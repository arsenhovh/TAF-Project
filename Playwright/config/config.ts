import { PlaywrightTestConfig } from '@playwright/test';
import { devices } from 'playwright';
import { BrowserContextOptions } from 'playwright';

// Import Cucumber types
import { defineParameterType, defineStep } from '@cucumber/cucumber';

// Import dotenv for environment variable configuration
require('dotenv').config();

// Define custom device types for Cucumber
defineParameterType({
  name: 'deviceName',
  regexp: /Desktop Chrome|Desktop Firefox|Desktop Safari|Mobile Chrome|Mobile Safari/,
  transformer: (name: string) => name,
});

// Define steps if needed
defineStep('I open the {deviceName}', async function (this: any, deviceName: string) {
  const contextOptions: BrowserContextOptions = { ...devices[deviceName] };
  this.context = await this.browser.newContext(contextOptions);
});

// Define more steps as needed...

const baseConfig: PlaywrightTestConfig = {
  timeout: 5 * 60 * 1000,
  expect: { timeout: 10 * 1000 },
  testDir: '../',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};

export default baseConfig;
