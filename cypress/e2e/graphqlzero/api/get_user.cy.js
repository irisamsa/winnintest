describe('Teste de consulta GraphQL para obter usuário', () => {
    it('Consulta GraphQL para obter um usuário específico', () => {
        cy.getUser(1).then((userData) => {

            expect(userData).to.have.property('user')
            expect(userData.user).to.have.property('id').to.be.a('string');
            expect(userData.user).to.have.property('username').to.be.a('string');
            expect(userData.user).to.have.property('email').to.be.a('string');
            expect(userData.user).to.include({
              id: '1',
              username: 'Bret',
              email: 'Sincere@april.biz'
            })
            expect(userData.user).to.have.property('address').to.be.an('object').that.has.property('geo').to.be.an('object');
            expect(userData.user.address).to.have.property('geo')
            expect(userData.user.address.geo).to.have.property('lat').to.be.a('number');
            expect(userData.user.address.geo).to.have.property('lng').to.be.a('number');
            expect(userData.user.address.geo).to.include({
              lat: -37.3159,
              lng: 81.1496
            })
        });
    });
});  