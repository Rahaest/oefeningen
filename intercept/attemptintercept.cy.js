it ('Read a user' , () => {
  cy.request('GET', "https://petstore.swagger.io/v2/user/string",).then((response) => {
    expect(response).to.have.property('status', 200)
    expect(response.body).to.not.be.null
  })
})


  it('post', () => {
    cy.intercept('POST','https://petstore.swagger.io/v2/user/string', {
    statusCode: 200,
      body: {
        id : 666,
      username: 'Bob666',
      firstName: "Bobby",
      lastName: "Fantoom",
      email: "string@gmail.com",
      password: "string",
      phone: "telepstring",
      userStatus: 0
      }})
  })


    