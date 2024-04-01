import {Locator, Page} from '@playwright/test';
import {Dashboards} from "./dashbord";
import {LoginPage} from "./loginPage";

export class BasePage {
  readonly page: Page;
  readonly dashboardPage: Dashboards;
  readonly loginPage: LoginPage;
  readonly sideBarMenu:Locator

  constructor(page: Page) {
    this.page = page
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new Dashboards(this.page);
    this.sideBarMenu = page.locator('aside')
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

}
