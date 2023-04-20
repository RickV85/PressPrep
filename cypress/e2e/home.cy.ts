/// <reference types="cypress" />

describe('home', () => {
  beforeEach(() => {
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/*`, {
      fixture: 'newsResults.json'
    })
    cy.visit('http://localhost:5173/')
  })

  it('Should show the loading message before results load', () => {
    cy.get('.loading').contains('loading')
  })
})