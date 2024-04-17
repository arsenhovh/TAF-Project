import { Given, Then } from '@cucumber/cucumber';
import {  Page } from '@playwright/test';
import {BasePage} from "../../core/pageObject/Base";

let page: Page;
let basePage = new BasePage(page)
let dashboardPage = BasePage.getPage(page, 'dashboard');
let loginPage = BasePage.getPage(page, 'login')

Given('I navigate on the login page and login', async () => {
    await page.goto('/');
    await loginPage.loginAsTestUser();
});

Given('I click add new dashboard page', async () => {
    await dashboardPage.addNewDashboardButton.click();
});

Given(/^I fill "(.*)"  and "(.*)" in name and description field$/, async ({dashboardName, password: description}) => {
    await dashboardPage.newDashboardNameFromPopup.fill(dashboardName);
    await dashboardPage.description.fill(description);

});

Given('I click add save button', async () => {
    await dashboardPage.addDashboardButtonFromPopup.click();
});
