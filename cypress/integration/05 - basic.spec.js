/// <reference types="cypress"/>

describe('Básico de Cypress', () => {
    it.only('Deve acessar uma página e fazer uma assertiva no título', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        // const titulo = cy.title()
        // console.log(titulo)

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        cy.title().then(title => {
            console.log(title)
        })

            //TODO imprimir o log no console
            //TODO escrever o log em um campo de texto

    })

    it('Deve encontrar e interagir com um elemento', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})