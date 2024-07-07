Cypress.Commands.add('visitWikipedia', () => {
    cy.visit('https://www.wikipedia.org/')
})

Cypress.Commands.add('elementExistsByWiki', (id) => {
    cy.get(`${id}`).should('exist')
})

Cypress.Commands.add('search', (term) => {
    cy.get('input[name="search"]').type(`${term}{enter}`)
})

Cypress.Commands.add('getUser', (userId) => {
    const query = `
        query GetUser($id: ID!) {
            user(id: $id) {
                id
                username
                email
                address {
                    geo {
                        lat
                        lng
                    }
                }
            }
        }
    `;

    cy.request({
        method: 'POST',
        url: 'https://graphqlzero.almansi.me/api',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            query,
            variables: { id: userId },
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.not.be.null;
        return response.body.data;
    });
});