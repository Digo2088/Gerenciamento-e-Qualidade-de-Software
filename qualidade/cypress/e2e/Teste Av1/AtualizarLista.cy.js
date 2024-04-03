describe("Atualizar Lista ao recarregar pagina", ()=>{
    it("Deve Ser Possivel Atualizar Lista de Tarefas ao Recarregar Pagina", ()=> {
        cy.visit("http://127.0.0.1:5500/todo-list-alpine-js-master/index.html")
        cy.get('#todo_title')
            .click()
            .type("Comprar Frango")
        cy.get('.bg-white > .col-auto > .btn')
            .click()   
            .reload()
    })
}) 