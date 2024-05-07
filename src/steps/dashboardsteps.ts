import { Given, Then, Before } from '@cucumber/cucumber';
import { Page, chromium } from 'playwright';
import { BasePage } from "../../core/pageObject/Base";
import {expect} from "@playwright/test";

let browser;
let page: Page;
let dashboardPage:any;
let loginPage:any;

Before(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    dashboardPage = BasePage.getPage(page,'dashboard');
    loginPage = BasePage.getPage(page,'login');
});

Given('I navigate on the login page and login', async () => {
    await page.goto('/');
    await loginPage.loginAsTestUser();
});

Given('I click add new dashboard page', async () => {
    await dashboardPage.addNewDashboardButton.click();
});

Given(/^I fill "(.*)" and "(.*)" in name and description field$/, async (dashboardName, description) => {
    await dashboardPage.newDashboardNameFromPopup.fill(dashboardName);
    await dashboardPage.description.fill(description);
});

Given('I click add save button', async () => {
        await dashboardPage.addDashboardButtonFromPopup.click();
});

Given('I click add edit button', async () => {
    await dashboardPage.editDashboardButton.click();
});

Given(/^I expect to see newly added dashboard with name "(.*)"$/, async (dashboardName) => {
    await expect.soft(dashboardPage.dashboardAddedSuccessfully).toBeVisible();
    await expect.soft(dashboardPage.dashboardNameFromMenu).toHaveText(dashboardName);
});

Given(/^I delete dashboard$/, async () => {
    await dashboardPage.deleteDashboardButton.click();
    await dashboardPage.confirmDeleteButton.click();
});

Given(/^I expect to not dashboard$/, async () => {
    await expect.soft(dashboardPage.dashboardDeletedSuccessfully).toBeVisible();
    await expect.soft(dashboardPage.dashboardNameFromMenu).not.toBeVisible();
});

Given(/^I delete all dashboard$/, async () => {
    if (await dashboardPage.dashboardNameFromMenu.isVisible()){
        await  dashboardPage.deleteDashboard()
    }

});








