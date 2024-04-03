describe("Aviso de Tarefa Vazia", ()=>{
    it("Deve Ser Alertado Caso Tarefa não Seja Preenchida", ()=> {
        cy.visit("http://127.0.0.1:5500/todo-list-alpine-js-master/index.html")
        cy.get('#todo_title')
            .click()
        cy.get('.bg-white > .col-auto > .btn')
            .click()   
    })
}) 