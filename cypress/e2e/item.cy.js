//Som en student vill jag kunna ta bort en todo item, eftersom saker kan ändras.

describe('item' , () => {
	
	it('should check and uncheck a todo-item when i click in its box' , () => {
		cy.visit('/');
		cy.get('[ data-cy="toggle-input" ]').first().should("be.checked")
		cy.get('[ data-cy="toggle-input" ]').first().click();
		cy.get('[ data-cy="toggle-input" ]').first().should("not.be.checked")
		cy.get('[ data-cy="toggle-input" ]').first().click();
		cy.get('[ data-cy="toggle-input" ]').first().should("be.checked")
		
	})


	it('should delete a todo when i click on trashcan' , () => {
		cy.visit('/');
		cy.get('[ data-cy="delete-button" ]').first().click()
		cy.get('[ data-cy="item-box" ]').should("not.contain" , 'Lektion i skolan 9-16')
		
			
	})

	
})