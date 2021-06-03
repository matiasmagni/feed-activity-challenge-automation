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

    public getMessage(): Cypress.Chainable {
        return cy.get(this.selectors.message);
    }

    public getEmailErrorMessage(): Cypress.Chainable {
        return cy.get(this.selectors.emailErrorMessage);
    }

    public clickOnPublish() {
        cy.get(this.selectors.buttonPublish).click();
    }

    public fillComment(comment: string) {
        this.type(cy.get(this.selectors.inputComments), comment);        
    }

    public fillEmail(email: string) {
        this.type(cy.get(this.selectors.inputEmail), email);
    }

    public fillName(name: string) {
        this.type(cy.get(this.selectors.inputName), name);
    }

    private type(element: Cypress.Chainable, text: string) {
        if (text.length > 0) {
            element.type(text);
        } else {
            element.clear();
        }
    }
}
