describe('cy.wrap', () => {
  it('asserts 1 is a number', () => {
    cy.wrap(1).should('be.a', 'number')
  })

  it('asserts "Rachel Green" is a string', () => {
    cy.wrap('Rachel Green').should('be.a', 'string')
  })

  it('asserts false is a boolean', () => {
    cy.wrap(false).should('be.a', 'boolean')
  })

  it('asserts an array is empty', () => {
    cy.wrap([]).should('be.empty')
  })

  it('asserts an array is not empty', () => {
    cy.wrap([1, 'Chandler Bing', false]).should('not.be.empty')
  })

  it('spread the values of an array', () => {
    cy.wrap([1, 'Chandler Bing', false]).spread((first, second, third) => {
      expect(first).to.equal(1)
      expect(second).to.equal('Chandler Bing')
      expect(third).to.equal(false)
    })
  })

  it('works with the yielded array', () => {
    cy.wrap([1, 'Chandler Bing', false]).then(theArray => {
      expect(theArray).to.deep.equal([1, 'Chandler Bing', false])
    })
  })

  it('works with the yielded obj', () => {
    const obj = {
      name: 'Ross Geller',
      series: 'Friends'
    }

    cy.wrap(obj).then(theObj => {
      expect(theObj).to.deep.equal({
        name: 'Ross Geller',
        series: 'Friends'
      })
    })
  })

  it('asserts on the properties of an object', () => {
    const obj = {
      name: 'Phoeby Buffay',
      series: 'Friends'
    }

    cy.wrap(obj).should('have.property', 'name')
    cy.wrap(obj).should('have.property', 'series')
  })

  it('gets the values of an object', () => {
    const obj = {
      name: 'Joey Tribbiany',
      series: 'Friends'
    }

    cy.wrap(obj).its('name').should('be.equal', 'Joey Tribbiany')
    cy.wrap(obj).its('series').should('be.equal', 'Friends')
  })

  it('asserts on the properties and values of an object', () => {
    const obj = {
      name: 'Monica Geller',
      series: 'Friends'
    }

    cy.wrap(obj)
      .should('have.property', 'name')
      .and('be.equal', 'Monica Geller')
    cy.wrap(obj)
      .should('have.property', 'series')
      .and('be.equal', 'Friends')
  })

  it('invokes a function from an object', () => {
    const obj = {
      fn: () => 'Yo!'
    }

    cy.wrap(obj).invoke('fn').should('be.equal', 'Yo!')
  })

  it('checks every type of service', { viewportHeight: 880 }, () => {
    cy.visit('https://tat-csc.s3.sa-east-1.amazonaws.com/index.html')

    cy.get('#support-type')
      .find('input[type="radio"]')
      .each(typeOfService => {
        cy.wrap(typeOfService)
          .check()
          .should('be.checked')
      })
  })
})
