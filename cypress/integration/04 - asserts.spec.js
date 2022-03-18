/// <reference types="cypress"/>


it('Igualdade', () => {
    const a = 1
    expect(a).equal(1)
    expect(a, 'Deveria ser 1').equal(1)
    expect(a).to.be.equal(1)
    expect('a').not.to.be.equal('b')
})

it('Verdade', () => {
    const a = true
    const b = null
    let c
    expect(a).to.be.true
    expect(true).to.be.true
    expect(b).to.be.null
    expect(a).not.be.null
    expect(c).to.be.undefined
})

it('Igualdade de objetos', () => {
    const objeto = {
        a: 1,
        b: 2
    }

    expect(objeto).equal(objeto)
    expect(objeto).equals(objeto)
    expect(objeto).eq(objeto)
    expect(objeto).to.be.equal(objeto)
    expect(objeto).to.be.deep.equal({a: 1, b: 2})
    expect(objeto).eql({a: 1, b: 2})
    expect(objeto).include({a: 1})
    expect(objeto).to.have.property('b')
    expect(objeto).to.have.property('b', 2)
    expect(objeto).to.not.be.empty
    expect({}).to.be.empty
})

it('Listas/Arrays', () => {
    const lista = [1, 2, 3]
    expect(lista).to.have.members([1, 2, 3])
    expect(lista).to.include.members([1, 3])
    expect(lista).to.not.be.empty
    expect([]).to.be.empty
    
})

it('Tipos', () => {
    const num = 1
    const str = 'String'
    
    expect(num).to.be.a('number')
    expect(str).to.not.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.a('object')
    expect([]).to.be.a('array')
})

it('Strings', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('de')
    expect(str).to.match(/de/) // verficar se contém a palavra "de" dentro da frase
    expect(str).to.match(/^String/) // verficar se iniciou com "String"
    expect(str).to.match(/teste$/) // verficar se finalizou com "teste"
    expect(str).to.match(/.{15}/)
    expect(str).to.match(/\w+/) // verificar se contém apenas caracteres
    expect(str).to.match(/\D+/) // verificar que não contém números
})

it('Números', () => {
    const number = 4
    const numberFloat = 5.2123

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3) // verificar se o número é cima de 3
    expect(number).to.be.below(7) // verificar se o número é abaixo de 7
    expect(numberFloat).to.be.equal(5.2123)
    expect(numberFloat).to.be.closeTo(5.2, 0.1)
    expect(numberFloat).to.be.above(5)
})