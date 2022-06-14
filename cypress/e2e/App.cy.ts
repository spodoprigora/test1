describe('App e2e', () => {
	it('should have header', () => {
		cy.visit('/');

		cy.get('h3').should('have.text', 'Users list');
	});

	it('should have table', () => {
		cy.visit('/');

		cy.get('table').should('have.length', 1);
	});

    it('should have link to User albums', () => {
        cy.visit('/');

		cy.get('table tr').last().get('td').last().should('have.text', 'Show albums');
    });

	it('should go to User albums', () => {
		cy.visit('/');

		cy.contains('Show albums').click();
		cy.get('h3').should('have.text', 'User albums');
	});

	it('should go to return to main page', () => {
		cy.visit('/');

		cy.contains('Show albums').click();
		cy.get('h3').should('have.text', 'User albums');

		cy.contains('Back').click();
		cy.get('h3').should('have.text', 'Users list');
	});

	it('should go to photos page', () => {
		cy.visit('/');

		cy.contains('Show albums').click();
		cy.get('h3').should('have.text', 'User albums');


		cy.contains('Open').click();
		cy.get('ul li img').should('have.attr', 'src');
	});

	it('should go to return to main page', () => {
		cy.visit('/');

		cy.contains('Show albums').click();
		cy.get('h3').should('have.text', 'User albums');


		cy.contains('Open').click();

		cy.contains('Back').click();
		cy.get('h3').should('have.text', 'User albums');

		cy.contains('Back').click();

		cy.get('h3').should('have.text', 'Users list');
	});
});
