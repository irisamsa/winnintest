describe('Testes E2E na página inicial da Wikipedia', () => {
  beforeEach(() => {
      cy.visitWikipedia()
  })

  it('Verifica a presença do logotipo da wikipedia', () => {
      cy.elementExistsByWiki('.central-featured-logo')  // 
  })

  it('Verifica a presença do campo de busca', () => {
      cy.search() 
  })

  it('Verifica a presença de dez links de idioma', () => {
    cy.get('.central-featured-lang').should('have.length.at.least', 10)

  })

  it('Verifica a presença do botão Ler a Wikipédia na sua lingua', ()=>{
    cy.elementExistsByWiki('.lang-list-button-wrapper')
  })
  

  it('Verifica a presença do rodapé', () => {
      cy.elementExistsByWiki('footer')  
  })

  it('deve buscar por "Brasil" e verificar os blocos de conteúdo principais', () => {
    cy.search('Brasil')
    
    cy.url({ timeout: 10000 }).should('include', '/wiki/Brasil')

    cy.get('#firstHeading').should('contain', 'Brasil')
    cy.get('#mw-content-text').should('be.visible')
    cy.get('#vector-page-titlebar-toc').should('be.visible') 
    cy.get('.infobox').should('be.visible')  
    cy.get('#mw-content-text').within(() => {
      cy.get('h2').contains('História').should('be.visible')
      cy.get('h2').contains('Geografia').should('be.visible')
      cy.get('h2').contains('Economia').should('be.visible')
      cy.get('h2').contains('Cultura').should('be.visible')
    })
  }) 
})
