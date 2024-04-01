import {expect, test} from '@playwright/test';
import {BasePage} from "../../Core/Page Object/Base";

let basePage
test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await basePage.goto('https://reportportal.epam.com/');
    await basePage.loginPage.loginAsTestUser()
});

test('Check that user can add new dashboard', async () => {
    await basePage.dashboardPage.addNewDashboard.click()
    await basePage.dashboardPage.newDashboardNameFromPopup.fill('New Dashboard1')
    await basePage.dashboardPage.description.fill('Some Description1')
    await basePage.dashboardPage.addDashboardButtonFromPopup.click()
    await expect.soft(basePage.dashboardPage.dashboardAddedSuccessfully).toBeVisible();
    await expect.soft(basePage.dashboardPage.dashboardNameFromMenu).toHaveText('New Dashboard1')
})

test('Check that user can delete newly add dashboard', async () => {
    await basePage.dashboardPage.addNewDashboard.click()
    await basePage.dashboardPage.newDashboardNameFromPopup.fill('New Dashboard2')
    await basePage.dashboardPage.description.fill('Some Description2')
    await basePage.dashboardPage.addDashboardButtonFromPopup.click()
    await basePage.dashboardPage.deleteDashboardButton.click()
    await basePage.dashboardPage.confirmDeleteButton.click()
    await expect.soft(basePage.dashboardPage.dashboardDeletedSuccessfully).toBeVisible();
    await expect.soft(basePage.dashboardPage.dashboardNameFromMenu).not.toBeVisible();
})

test('Check that user can edit newly add dashboard', async () => {
    await basePage.dashboardPage.addNewDashboard.click()
    await basePage.dashboardPage.newDashboardNameFromPopup.fill('New Dashboard3')
    await basePage.dashboardPage.description.fill('Some Description3')
    await basePage.dashboardPage.addDashboardButtonFromPopup.click()
    await basePage.dashboardPage.editDashboardButton.click()
    await basePage.dashboardPage.newDashboardNameFromPopup.fill('Edit Dashboard3')
    await basePage.dashboardPage.description.fill('Edit Some Description3')
    await basePage.dashboardPage.updateButtonFromEditPopup.click()
    await expect.soft(basePage.dashboardPage.dashboardNameFromMenu).toHaveText('Edit Dashboard3')
})

test.afterEach(async () => {
    if (await basePage.dashboardPage.dashboardNameFromMenu.isVisible()){
        await basePage.dashboardPage.deleteDashboardButton.click()
        await basePage.dashboardPage.confirmDeleteButton.click()
    }
});


