describe('API testing', () => {
    it('GET - read', () => {
       cy.request('GET', "https://petstore.swagger.io/")
    })
})

describe('API testing intercept', () => {
    it('GET - read', () => {
       cy.r('GET', "https://petstore.swagger.io/")
    })
})


describe('Intercepting testing', () => {
    it('post', () => {
      cy.intercept('POST','https://petstore.swagger.io/v2/user', {
      statusCode: 200,
        body: {
          id : 666,
        username: 'Bob666',
        firstName: "Bobby",
        lastName: "Fantoom",
        email: "fakeemail@gmail.com",
        password: "passstring",
        phone: "telepstring",
        userStatus: 0
        }
    })
  
  })
      
    it('GET - read', () => {
        cy.request('GET', "https://petstore.swagger.io/v2/user/").then((response) => {
          expect(response).to.have.property('status', 200)
          expect(response.body).to.not.be.null
    })  
    })
  })
  
  