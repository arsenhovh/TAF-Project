import { Locator, Page } from '@playwright/test';
import Users from '../constant';

export class LoginPage{
    readonly page: Page;
    readonly loginInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;

    constructor(page) {
        this.page = page;
        this.loginInput = page.locator('input[placeholder="Login"]');
        this.passwordInput = page.locator('input[placeholder="Password"]');
        this.signInButton = page.locator('button[type="submit"]');
    }

    async loginAsTestUser() {
        await this.loginInput.fill(Users.testUser.getEmail());
        await this.passwordInput.fill(Users.testUser.getPassword());
        await this.signInButton.click();
    }
}
