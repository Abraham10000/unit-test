describe('First test in cypress', () => {
  it('cypress runs correctly', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('children').click();
    cy.url().should('contains', 'traversal');
  })
})

describe('testing items', ()=>{
// TODO : tester si après avoir ajouter une tâche elle est vraiment lister dans todo.
it('items are listed in todo correctly', () =>{
    
  })
// TODO : vérifier si après avoir cocher check le todo se déplace vers done //
it('items are correctly move to done after it cheked', ()=>{

})
});