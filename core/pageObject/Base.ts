import { getPage } from './index';
import {Page} from "@playwright/test";

export class BasePage {
   readonly page: Page;
   readonly pages: Record<string, any>;

  constructor(page: any) {
    this.page = page;
    this.pages = {};
  }

   getPage(pageName: string) {
    if (this.pages[pageName]) {
      return this.pages[pageName];
    }
    this.pages[pageName] = getPage(pageName, this.page);
    return this.pages[pageName];
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
