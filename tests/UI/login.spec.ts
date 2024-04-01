import {expect, test} from '@playwright/test';
import {BasePage} from "../../Core/Page Object/Base";

test('Check that ushbkjnk', async ({page}) => {
  const basePage = new BasePage(page);
  await basePage.goto('https://reportportal.epam.com/');
  await basePage.loginPage.loginAsTestUser()
  await expect(basePage.sideBarMenu).toBeVisible();
})



