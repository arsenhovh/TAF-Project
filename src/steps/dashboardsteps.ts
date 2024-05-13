import { Given, Then, Before,After } from '@cucumber/cucumber';
import { Page, chromium } from 'playwright';
import { BasePage } from "../../core/pageObject/Base";
import {expect} from "@playwright/test";
import { Dashboards } from '../../core/pageObject/dashbord';
import { LoginPage } from '../../core/pageObject/loginPage';


let browser;
let page: Page;
let dashboardPage: Dashboards
let loginPage: LoginPage;

Before(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    dashboardPage = BasePage.getPage(page,'dashboard');
    loginPage = BasePage.getPage(page,'login');
});

After(async () => {
    if (await dashboardPage.dashboardNameFromMenu.isVisible()){
        await  dashboardPage.deleteDashboard()
    }
});

Given('I navigate on the login page and login', async () => {
    await loginPage.open();
    await loginPage.loginAsTestUser();
});

Given('I click add new dashboard page', async () => {
    await dashboardPage.addNewDashboard();
});

Given(/^I fill (.*) and (.*) in name and description field$/, async (dashboardName, description) => {
    await dashboardPage.newDashboardNameFromPopup.fill(dashboardName);
    await dashboardPage.description.fill(description);
});

Given('I click add save button', async () => {
        await dashboardPage.addDashboardButtonFromPopup.click();
});

Given('I click add edit button', async () => {
    await dashboardPage.editDashboardButton.click();
});

Given(/^I expect to see newly added dashboard with name (.*)$/, async (dashboardName) => {
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

});

