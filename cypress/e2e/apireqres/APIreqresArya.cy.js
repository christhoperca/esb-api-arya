describe('API Test from Reqres', () => {
  beforeEach('Reset', function() {
    cy.request({
      method: 'GET', 
      url:'https://reqres.in/api/reset'
    })
  })

  it('Get User from page 3', function() {
    cy.request({
      method: 'GET', 
      url:'https://reqres.in/api/users?page=3'
    })
      .then((response) => {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
        expect(response.body.data.length).to.eq(response.body.data.length)
        cy.log('Empty data in page 3')
      })
  })

  it('Get Single User with ID 10', function() {
    cy.request({
      method: 'GET', 
      url:'https://reqres.in/api/users/10'
    })
      .then((response) => {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
        expect(response.body.data.email).to.eq(response.body.data.email)
      })
  })

  it('Register successful', function(){
    cy.request({
      method: 'POST', 
      url:'https://reqres.in/api/register',
      body:{
        email: "eve.holt@reqres.in",
        password: "pistol"
      }
    })
      .then((response) => {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
        cy.log('Successfully Registered')
    })
  })

  it('Register failed (missing password)', function(){
    cy.request({
      method: 'POST', 
      url:'https://reqres.in/api/register',
      body:{
        email: "sydney@fife"
      }
    })
  })

  it('Register failed missing email', function(){
    cy.request({
      method: 'POST', 
      url:'https://reqres.in/api/register',
      body:{
        password: "sydney@fife"
      }
    })
  })

  it('Register failed Missing email or username', function(){
    cy.request({
      method: 'POST', 
      url:'https://reqres.in/api/register',
      body:{
      }
    })
  })
})