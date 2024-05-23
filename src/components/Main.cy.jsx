import Main from "./Main"

describe('<Main />', () => {
// 	beforeEach(() => {
// 	cy.mount(<Main />)

		
// 	})


	//Som en student vill jag att veckans alla dagar ska visas, så att jag kan välja fritt när jag vill göra mina uppgifter.


	it('should display every day of the week', () => {
		cy.mount(<Main />)
			cy.get('h2').contains('Måndag').should('be.visible')
			cy.get('h2').contains('Tisdag').should('be.visible')
			cy.get('h2').contains('Onsdag').should('be.visible')
			cy.get('h2').contains('Torsdag').should('be.visible')
			cy.get('h2').contains('Fredag').should('be.visible')
			cy.get('h2').contains('Lördag').should('be.visible')
			cy.get('h2').contains('Söndag').should('be.visible')
	})

	
})