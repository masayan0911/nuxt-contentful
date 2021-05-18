const contentful = require('contentful')

module.exports = {
  createClient() {
    return contentful.createClient({
      space: process.env.SPACE_ID,
      accessToken: process.env.API_KEY
    })
  }
}
