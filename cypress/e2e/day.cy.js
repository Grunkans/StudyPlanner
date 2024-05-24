//Som en student vill jag att veckans alla dagar ska visas, så att jag kan välja fritt när jag vill göra mina uppgifter.

describe('day' , () => {

	it('should display every weekday' , () => {
		cy.visit('/');
		cy.get('[ data-cy="the-day" ]').should("contain" , 'Måndag')
		cy.get('[ data-cy="the-day" ]').should("contain" , 'Tisdag')
		cy.get('[ data-cy="the-day" ]').should("contain" , 'Onsdag')
		cy.get('[ data-cy="the-day" ]').should("contain" , 'Torsdag')
		cy.get('[ data-cy="the-day" ]').should("contain" , 'Fredag')
		cy.get('[ data-cy="the-day" ]').should("contain" , 'Lördag')
		cy.get('[ data-cy="the-day" ]').should("contain" , 'Söndag')

	})

	
})