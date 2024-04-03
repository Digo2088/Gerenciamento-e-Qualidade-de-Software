describe("Filtrar Tarefa", ()=>{
    it("Deve Ser Possivel Filtrar Tarefa", ()=> {
        cy.visit("http://127.0.0.1:5500/todo-list-alpine-js-master/index.html")
         
        cy.get('[x-model="todo.task"]').type('Comprar Frango{enter}')
        cy.get('[x-model="todo.task"]').type('Comprar Arroz{enter}')
        cy.get('[x-model="todo.task"]').type('Comprar Sanidade{enter}')

        
        cy.get('.form-check-input').eq(0).check()

        
        cy.get('select').select('Em aberto')

        
        cy.get('.form-check-input:checked').should('have.length', 0)

        
        cy.get('select').select('Concluídos')

        
        cy.get('.form-check-input:checked').should('have.length', 1)

       
        cy.get('select').select('Todos')

        
        cy.get('.form-check-input').should('have.length', 3)
            
    })
}) 