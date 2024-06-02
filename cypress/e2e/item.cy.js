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

	//Som en student vill jag kunna ändra texten för en todo item, så att jag kan uppdatera den om något nytt händer.

	it('should be able to change what a todo-item says' , () => {
		cy.visit('/');
		cy.get('[ data-cy="edit-button" ]').first().click()
		cy.get('[ data-cy="edit-form" ]').click()
		cy.get('[ data-cy="edit-form" ]').clear()
		cy.get('[ data-cy="edit-form" ]').type("Göra klart biologin")
		cy.get('[ data-cy="save-button" ]').click()
		cy.get('[ data-cy="item-field" ]').first().should('contain', 'Göra klart biologin')


	})


	
})