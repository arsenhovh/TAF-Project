import { PlaywrightTestConfig } from '@playwright/test';
import baseConfig from './config';

const config: PlaywrightTestConfig = {
    ...baseConfig,
    use: {
        baseURL: 'https://reportportal.epam.com/ui/'
    },
};

export default config;
