import BasePage from './BasePage';

export default class HomePage extends BasePage {
    /**
     * Navigates to this page object's URL.
     * 
     * @param timeout in seconds.
     */
    public navigateToThisPage(timeout: number = 10) {
        // Workaround for command timeout on first load.
        cy.visit(this.getUrl(), {
            timeout: timeout * 1000,
            onBeforeLoad: (win: any) => {
                win.sessionStorage.clear();
            }
        });
    }

    public clickCommentsLink(postId: any): Cypress.Chainable {
        return cy.get(this.selectors.commentsLink.replace('{postId}', postId)).click();
    }

    public getPostTitles(): Cypress.Chainable {
        return cy.get(this.selectors.postTitle);
    }

    public getPostBodies(): Cypress.Chainable {
        return cy.get(this.selectors.postBody);
    }
}
