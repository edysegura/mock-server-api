const faker = require('faker')
const times = require('lodash/times')

function createCustomer(generatedId) {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()

  return {
    "id": ++generatedId,
    "firstName": firstName,
    "lastName": lastName,
    "email": faker.internet.email(firstName, lastName).toLowerCase()
  }
}

module.exports = () => {
  return {
    customer: times(10, createCustomer)
  }
}
