describe('page', () => {
  it('works', () => {
    cy.request({
      url: 'http://localhost:7373/bla',
      timeout: 200000
    });
  });
})
