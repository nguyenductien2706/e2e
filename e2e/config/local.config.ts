/* eslint-disable no-nested-ternary */
import { ReporterDescription } from '@playwright/test';

const { HEADLESS, TIMEOUT} = process.env;

export const isHeadless = HEADLESS === 'true';
export const TEST_TIMEOUT = typeof TIMEOUT === 'string' ? parseInt(TIMEOUT, 10) : 30000;
export const ENABLE_SCREENSHOT = 'only-on-failure';
export const WORKERS = 5;
export const TRACE = 'retain-on-failure';
export const REPORTER: ReporterDescription[] = [['list'], ['html', { open: 'never', outputFolder: './output/local/html-report' }]];
export const VIDEO = 'retain-on-failure';
export const SLOMO = 100;
export const OUTPUT_DIR = './output/local/data';
