import { PlaywrightTestConfig } from '@playwright/test';
import baseConfig from './playwright.config';

const config: PlaywrightTestConfig = {
    ...baseConfig,
    use: {
        baseURL: 'http://localhost:5000',
    },
};

export default config;
