import { expect, test } from '@playwright/test';
import { BasePage } from "../../core/pageObject/Base";
const logger = require('logger');

let basePage;
let dashboardPage;
let loginPage;

test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    dashboardPage = basePage.getPage('dashboard');
    loginPage = basePage.getPage('login');
    await basePage.goto('web');
    await loginPage.loginAsTestUser();
});

test('Check that user can add new dashboard', async () => {
    logger.info('Starting test: Check that user can add new dashboard');
    await dashboardPage.addNewDashboard();
    await dashboardPage.fillDashboardPopupInputsAndSave('New Dashboard1', 'Some Description2')
    await expect.soft(dashboardPage.dashboardAddedSuccessfully).toBeVisible();
    await expect.soft(dashboardPage.dashboardNameFromMenu).toHaveText('New Dashboard1');
    logger.info('Test: Check that user can add new dashboard - Passed');
});

test('Check that user can delete newly add dashboard', async () => {
    logger.info('Starting test: Check that user can delete newly add dashboard');
    await dashboardPage.addNewDashboard();
    await dashboardPage.fillDashboardPopupInputsAndSave('New Dashboard2', 'Some Description2')
    await  dashboardPage.deleteDashboard()
    await expect.soft(dashboardPage.dashboardDeletedSuccessfully).toBeVisible();
    await expect.soft(dashboardPage.dashboardNameFromMenu).not.toBeVisible();
    logger.info('Verified that Dashboard Name From Menu is not visible');
    logger.info('Test: Check that user can delete newly add dashboard - Passed');
});

test('Check that user can edit newly add dashboard', async () => {
    logger.info('Starting test: Check that user can edit newly add dashboard');
    await dashboardPage.addNewDashboard();
    await dashboardPage.fillDashboardPopupInputsAndSave('New Dashboard3', 'Some Description3')
    await dashboardPage.editDashboardButton.click();
    await dashboardPage.udpateDashboardPopupInputsAndSave('Edit Dashboard3', 'Edit Description3')
    await expect.soft(dashboardPage.dashboardNameFromMenu).toHaveText('Edit Dashboard3');
    logger.info('Verified that Dashboard Name From Menu has text "Edit Dashboard3"');
    logger.info('Test: Check that user can edit newly add dashboard - Passed');
});

test.afterEach(async () => {
    if (await dashboardPage.dashboardNameFromMenu.isVisible()){
      await  dashboardPage.deleteDashboard()
    }
});
