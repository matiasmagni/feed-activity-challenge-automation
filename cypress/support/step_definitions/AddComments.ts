/// <reference types="Cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import config from '../config';
import HomePage from '../pages/HomePage';
import CommentsPage from '../pages/CommentsPage';


When(`the user adds a new comment`, (table) => {
  const page = new CommentsPage();
  const data = table.rowsHash();
  page.fillName(data.Name);
  page.fillEmail(data.Email);
  page.fillComment(data.Comment);
  page.clickOnPublish();
  localStorage.setItem('name', data.Name);
  localStorage.setItem('email', data.Email);
  localStorage.setItem('comment', data.Comment);
});

Then(`the user visualizes the new added comment correctly`, () => {
  const page = new CommentsPage();
  page.getCommentNames().last().contains(<string>localStorage.getItem('name'));
  page.getCommentEmails().last().contains(<string>localStorage.getItem('email'));
  page.getCommentBodies().last().contains(<string>localStorage.getItem('comment'));
  page.getMessage()
    .contains('Comment was added successfully!')
    .should('have.class', 'message');
});

Then(`the user visualizes that the comment is not added`, () => {
  const page = new CommentsPage();
  const email =  <string>localStorage.getItem('email');

  if (email) {
    page.getEmailErrorMessage().contains('Email has an invalid format!');
  }
  
  page.getCommentNames().last().should('not.equal', <string>localStorage.getItem('name'));
  page.getCommentEmails().last().should('not.equal', email);
  page.getCommentBodies().last().should('not.equal', <string>localStorage.getItem('comment'));
  page.getMessage()
    .contains('All fields are required!')
    .should('have.class', 'errorMsg');
});
