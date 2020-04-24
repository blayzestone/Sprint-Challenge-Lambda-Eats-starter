describe('Form', () => {
  it('can navigate to site', () => {
    cy.visit('localhost:3000');
  })
  it('can navigate to the form', () => {
    cy.contains('Order Pizza')
      .click();
  })

  it('can submit the form', () => {
    cy.get('#instructions')
      .type('foobar')
      .should('have.value', 'foobar')

    // STRETCH
    cy.get('#size')
      .select('Sm');

    cy.get('#size')
      .select('M');

    cy.get('input[name="pepperonni"]')
      .check()
      .should('have.checked');
    cy.get('input[name="olives"]')
      .check()
      .should('have.checked');

    cy.contains('Add to Order')
      .click();
  })

  it('displays validation errors', () => {
    cy.get('input[name="name"]')
    .type('a')
    .should('have.value', 'a');
    
    cy.contains('Name must be at least 2 characters long');
  })
})