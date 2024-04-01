import { Locator, Page } from '@playwright/test';

export class Dashboards {
    readonly page: Page;
    readonly successfullySignInMsg: Locator;
    readonly addNewDashboard: Locator;
    readonly newDashboardNameFromPopup: Locator;
    readonly description: Locator;
    readonly addDashboardButtonFromPopup: Locator;
    readonly dashboardAddedSuccessfully: Locator;
    readonly editDashboardButton: Locator;
    readonly deleteDashboardButton: Locator;
    readonly dashboardDeletedSuccessfully: Locator;
    readonly fullScreenDashboardButton: Locator;
    readonly addNewWidget: Locator;
    readonly dashboardNameFromMenu: Locator;
    readonly confirmDeleteButton: Locator;
    readonly updateButtonFromEditPopup: Locator;

    constructor(page) {
        this.page = page;
        this.successfullySignInMsg = page.getByText('Signed in successfully');
        this.addNewDashboard = page.locator('.addDashboardButton__add-dashboard-btn--acseh button')
        this.newDashboardNameFromPopup = page.getByPlaceholder('Enter dashboard name');
        this.description = page.locator('textarea[placeholder="Enter dashboard description"]');
        this.addDashboardButtonFromPopup = page.locator('button.bigButton__big-button--BmG4Q').getByText('Add');
        this.dashboardAddedSuccessfully = page.getByText('Dashboard has been added');
        this.dashboardDeletedSuccessfully = page.getByText('Dashboard has been deleted');
        this.editDashboardButton = page.locator('button.ghostButton__ghost-button--r7c9T').getByText('Edit');
        this.updateButtonFromEditPopup = page.locator('button.bigButton__big-button--BmG4Q').getByText('Update');
        this.deleteDashboardButton = page.locator('button.ghostButton__ghost-button--r7c9T').getByText('Delete');
        this.fullScreenDashboardButton = page.locator('button.ghostButton__ghost-button--r7c9T').getByText('Full screen');
        this.addNewWidget = page.locator('button.ghostButton__ghost-button--r7c9T').getByText('Add new widget');
        this.dashboardNameFromMenu = page.locator('ul.pageBreadcrumbs__page-breadcrumbs--P8I6V span');
        this.confirmDeleteButton = page.locator('button.bigButton__big-button--BmG4Q').getByText('Delete');;
    }
}
