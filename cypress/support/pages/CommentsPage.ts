import BasePage from './BasePage';

export default class CommentsPage extends BasePage {
    public getCommentNames(): Cypress.Chainable {
        return cy.get(this.selectors.commentName);
    }

    public getCommentEmails(): Cypress.Chainable {
        return cy.get(this.selectors.commentEmail);
    }

    public getCommentBodies(): Cypress.Chainable {
        return cy.get(this.selectors.commentBody);
    }

    public clickOnPublish() {
        cy.get(this.selectors.buttonPublish).click();
    }

    public fillComment(comment: string) {
        cy.get(this.selectors.inputComments).type(comment);
    }

    public fillEmail(email: string) {
        cy.get(this.selectors.inputEmail).type(email);
    }

    public fillName(name: string) {
        cy.get(this.selectors.inputName).type(name);
    }
}
