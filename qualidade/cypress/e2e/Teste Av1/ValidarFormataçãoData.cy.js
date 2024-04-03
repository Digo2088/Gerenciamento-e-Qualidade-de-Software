describe('Verificação do Formato da Data', () => {
  it('Deve verificar se a data está no formato correto', () => {
    
    
    cy.visit('http://127.0.0.1:5500/todo-list-alpine-js-master/index.html');

    cy.get('#todo_title')
            .click()
            .type("Comprar Frango")
        cy.get('.bg-white > .col-auto > .btn')
            .click()   

    
    cy.get(':nth-child(2) > [x-text="getFormatedDate(todo.createdAt)"]').invoke('text').then(dataHora => {
      
      expect(dataHora).to.match(/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/);
    });
  });
});



