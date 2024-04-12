import { expect, test } from '@playwright/test';
import { BasePage } from "../../core/pageObject/Base";
import { Dashboards } from '../../core/constant';

const logger = require('logger');

let basePage;
let dashboardPage;
let loginPage;

test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    dashboardPage = BasePage.getPage(page, 'dashboard');
    loginPage = BasePage.getPage(page, 'login');
    await page.goto('/');
    await loginPage.loginAsTestUser();
});

test('Check that user can add new dashboard', async () => {
    const dashboardData = Dashboards.dashboard1
    logger.info('Starting test: Check that user can add new dashboard');
    await dashboardPage.addNewDashboard();
    await dashboardPage.fillDashboardPopupInputsAndSave(dashboardData)
    await expect.soft(dashboardPage.dashboardAddedSuccessfully).toBeVisible();
    await expect.soft(dashboardPage.dashboardNameFromMenu).toHaveText(dashboardData.dashboardName);
    logger.info('Test: Check that user can add new dashboard - Passed');
});

test('Check that user can delete newly add dashboard', async () => {
    const dashboardData = Dashboards.dashboard2
    logger.info('Starting test: Check that user can delete newly add dashboard');
    await dashboardPage.addNewDashboard();
    await dashboardPage.fillDashboardPopupInputsAndSave(dashboardData)
    await  dashboardPage.deleteDashboard()
    await expect.soft(dashboardPage.dashboardDeletedSuccessfully).toBeVisible();
    await expect.soft(dashboardPage.dashboardNameFromMenu).not.toBeVisible();
    logger.info('Verified that Dashboard Name From Menu is not visible');
    logger.info('Test: Check that user can delete newly add dashboard - Passed');
});

test('Check that user can edit newly add dashboard', async () => {
    const dashboardData = Dashboards.dashboard3
    const dashboardDataForEdit = Dashboards.dashboardEdit
    logger.info('Starting test: Check that user can edit newly add dashboard');
    await dashboardPage.addNewDashboard();
    await dashboardPage.fillDashboardPopupInputsAndSave(dashboardData)
    await dashboardPage.editDashboardButton.click();
    await dashboardPage.udpateDashboardPopupInputsAndSave(dashboardDataForEdit)
    await expect.soft(dashboardPage.dashboardNameFromMenu).toHaveText(dashboardDataForEdit.dashboardName);
    logger.info('Verified that Dashboard Name From Menu has text "Edit Dashboard3"');
    logger.info('Test: Check that user can edit newly add dashboard - Passed');
});

test.afterEach(async () => {
    if (await dashboardPage.dashboardNameFromMenu.isVisible()){
      await  dashboardPage.deleteDashboard()
    }
});
