/// <reference types="cypress" />

describe('home', () => {
  beforeEach(() => {
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/*`, {
      fixture: 'homeResults.json'
    })
    cy.visit('http://localhost:5173/')
  })

  it('should show the site title', () => {
    cy.get('h1').should('be.visible')
  })

  it('should show news selector dropdown', () => {
    cy.get('.news-dropdown').should('be.visible')
  })

  it('should update the search field value when an option is picked and show appropriate results', () => {
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/*`, {
      fixture: 'foodResults.json'
    })
    cy.get('.news-dropdown').select('Food').should('have.value', 'food')
    cy.get('.tile-title').eq(0).contains('Barbara Lynch, a Leading Boston Restaurateur, Is Accused of Workplace Abuse')
  })

  it('should show the error message if there is an issue fetching articles', () => {
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/*`, {
      statusCode: 500,
    })
    cy.get('.loading').contains('An error occurred')
  })
})