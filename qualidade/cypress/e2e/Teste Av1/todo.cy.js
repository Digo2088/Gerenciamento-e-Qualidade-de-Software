describe("Carregamento da Aplicação",()=>{
    it("Deve Ser Possivel Carregar a Aplicação", ()=> {
        cy.visit("http://127.0.0.1:5500/todo-list-alpine-js-master/index.html")
        cy.get('h1').should("have.text", "O que fazer hoje?")
    })
})

