describe('day' , () => {


	//Som en student vill jag kunna söka efter todo items som innehåller en viss text, så att jag lätt kan se om en viss sak finns med i priolistan.

	it('should be able to show me if the word Im searching for appears in any todos' , () => {
		cy.visit('/')
		cy.get('[ data-cy="search-input" ]').click()
		cy.get('[ data-cy="search-input" ]').type("9-16")
		cy.get('[ data-cy="search-results" ]').should('not.contain', 'inlämning')
		cy.get('[ data-cy="search-results" ]').should('contain', 'Lektion i skolan 9-16')

	})

	
})