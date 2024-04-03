describe("Validar tarefa jÁ FOI CONCLUIDA", ()=>{
    it("Deve Ser Possivel Validar tarefa jÁ FOI CONCLUIDA", ()=> {
        cy.visit("http://127.0.0.1:5500/todo-list-alpine-js-master/index.html")
        cy.get('#todo_title')
            .click()
            .type("Comprar Frango")
        cy.get('.bg-white > .col-auto > .btn')
            .click()   
        cy.get('.form-check-input')
            .click()
    })
}) 