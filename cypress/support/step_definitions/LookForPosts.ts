/// <reference types="Cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import config from '../config';
import HomePage from '../pages/HomePage';
import CommentsPage from '../pages/CommentsPage';


Given(`the user has navigated to Shahala home page`, () => {
  const page = new HomePage();
  page.navigateToThisPage(60);
  cy.url().should('include', page.getUrl());
});

Then(`the user visualizes all the posts correctly`, () => {
  const page = new HomePage();

  cy.request(config.API_URL.POSTS).then(response => {
    expect(response.status).to.eq(200);
    expect(response).not.to.be.null;
    expect(response).to.have.property('headers');
    expect(response.body.length).not.to.equal(0);

    page.getPostTitles().each(($el, index) => {
      expect(response.body[index].title).contains($el.text());
    });

    page.getPostBodies().each(($el, index) => {
      expect(response.body[index].body).contains($el.text());
    });
  });
});

When(`the user navigates to the {int}° post's comments page`, (postId) => {
  const page = new HomePage();
  page.clickCommentsLink(postId);
});

Then(`the user visualizes all the {int}° post's comments correctly`, (postId) => {
  const page = new CommentsPage();
  cy.url().should('include', page.getUrl());

  cy.request(`${config.API_URL.COMMENTS}?postId=${postId}`).then(response => {
    expect(response.status).to.eq(200);
    expect(response).not.to.be.null;
    expect(response).to.have.property('headers');
    expect(response.body.length).not.to.equal(0);
    cy.scrollTo('bottom');

    page.getCommentNames().each(($el, index) => {
      expect(response.body[index].name).contains($el.text());
    });

    page.getCommentEmails().each(($el, index) => {
      expect(response.body[index].email).contains($el.text());
    });

    page.getCommentBodies().each(($el, index) => {
      expect(response.body[index].body).contains($el.text());
    });
  });
});
