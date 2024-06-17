describe('Check Dashboard functionality', () => {
    const username = Cypress.env('username');
    const password = Cypress.env('password');

    beforeEach(() => {
        cy.visit("/")
        cy.get('input[placeholder="Login"]').type(username)
        cy.get('input[placeholder="Password"]').type(password)
        cy.get('button[type="submit"]').click()


    })

    it('Check that user can add dashboard', () => {
        cy.get('div[class*="addDashboardButton__add-dashboard-btn"]').contains('Add New Dashboard').click()
        cy.get('textarea[placeholder="Enter dashboard description"]').type("dashboardDescription")
        cy.get('input[placeholder="Enter dashboard name"]').type("dashboardCypressName")
        cy.get('button[class^="bigButton__big-button"]').contains('Add').click();
        cy.get('ul[class^="pageBreadcrumbs__page-breadcrumbs"] span').should('have.text', 'dashboardCypressName');
    })

    it('Check that user can not add with same dashboard name', () => {
        cy.get('div[class*="addDashboardButton__add-dashboard-btn"]').click()
        cy.get('input[placeholder="Enter dashboard name"]').type("DEMO DASHBOARD")
        cy.get('textarea[placeholder="Enter dashboard description"]').type("dashboardDescription")
        cy.get('button[class^="bigButton__big-button"]').contains('Add').click();
        cy.get('input[placeholder="Enter dashboard name"]')
            .should('have.value', 'DEMO DASHBOARD')
            .should('have.class', /^input__error/);
    })

})

