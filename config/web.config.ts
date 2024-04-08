import { PlaywrightTestConfig } from '@playwright/test';
import baseConfig from './config';

const config: PlaywrightTestConfig = {
    ...baseConfig,
    use: {
        baseURL: 'https://your-web-report-portal-url'
    },
};

export default config;
