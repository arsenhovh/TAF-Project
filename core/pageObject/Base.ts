import {Page} from "@playwright/test";
import {LoginPage} from "./loginPage";
import {Dashboards} from "./dashbord";

export class BasePage {
   readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

   getPage(pageName: string) {
       switch (pageName) {
           case 'login':
               return new LoginPage(this.page);
           case 'dashboard':
               return new Dashboards(this.page);
           default:
               throw new Error(`Page '${pageName}' not found.`);
       }
  }

   async goto(url: string) {
    if (url === 'web') {
      await this.page.goto('https://reportportal.epam.com/');
    }
    if (url === 'local') {
      await this.page.goto('http://localhost:5000');
    }
  }
}
