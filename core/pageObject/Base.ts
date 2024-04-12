import {Page} from "@playwright/test";
import {LoginPage} from "./loginPage";
import {Dashboards} from "./dashbord";

export class BasePage {
   readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

    static getPage(page: Page, pageName: string) {
        switch (pageName) {
            case 'login':
                return new LoginPage(page);
            case 'dashboard':
                return new Dashboards(page);
            default:
                throw new Error(`Page '${pageName}' not found.`);
        }
    }
}
