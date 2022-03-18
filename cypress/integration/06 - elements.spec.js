/// <reference types="cypress"/>

describe('Trabalhar com elementos básicos', () => {

    // Acessar o site no iníco de cada teste.
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        // cy.visit('http://www.google.com')
    })

    // Reload da página
    beforeEach(() => {
        cy.reload()
    })

    // Teste com texto
    it('Texto', () => {
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')

    })

    // Teste com links
    it('Links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    // Teste com campos de texto
    it('Campos de Texto', () => {

        cy.get('#formNome')
            .type('Diebersan')
            .should('have.value', 'Diebersan')

        cy.get('[data-cy=dataSobrenome]')
            .type('Rousinn')
            .should('have.value', 'Rousinn')

        cy.get('#elementosForm\\:sugestoes')
            .type('Texto escrito aqui...')
            .should('have.value', 'Texto escrito aqui...')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('QAA{backspace}')
            .should('have.value', 'QA')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', { delay: 100 })
            .should('have.value', 'acerto')

    })

    // Teste com Radio
    it('Teste com radioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc')
            .should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length', 2)
    })

    // Teste com checkbox
    it('Teste com checkbox', () => {
        cy.get('#formComidaPizza').click()
        cy.get('[name=formComidaFavorita]').click({ multiple:true })
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaPizza').click()
        cy.get('#formComidaPizza').should('be.checked')
        cy.get('[name=formComidaFavorita]').click({ multiple:true })
        cy.get('[name=formComidaFavorita]').should('not.be.checked')
    })

    // Teste com comboBox
    it('Teste com comboBox', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('Superior')
            .should('have.value', 'superior')

        cy.get('[data-test=dataEscolaridade]')
            .select('doutorado')
            .should('have.value', 'doutorado')
    })

    // Teste com comboBox Multiplo
    it.only('Teste com combo multiplo', () => {
        cy.get('[data-testid=dataEsportes]').select(['nada', 'Karate', 'futebol'])
    })
})