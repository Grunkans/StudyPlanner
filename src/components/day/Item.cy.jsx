import Item from "./Item";

describe('< Item />', () => {
	beforeEach(() => {
		cy.mount(<Item />)

		
	})


	//Som en student vill jag kunna ta bort en todo item, eftersom saker kan ändras.


	it('should be a deletebutton visible', () => {
		cy.get(span).contains(".delete").should('be.visible')

					
	})



	
})