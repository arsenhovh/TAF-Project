import { PlaywrightTestConfig } from '@playwright/test';
import baseConfig from './playwright.config';

const config: PlaywrightTestConfig = {
    ...baseConfig,
    use: {
        baseURL: 'https://your-web-report-portal-url'
    },
};

export default config;
