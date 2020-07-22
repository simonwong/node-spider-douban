const superagent = require('superagent')
const api = 'https://movie.douban.com/j/search_subjects'

function requestDouban (pageStart) {
  return new Promise((resolve, reject) => {
    superagent
      .get(api)
      .query({
        pageStart,
        type: 'tv',
        tag: '日本动画',
        sort: 'recommend',
        page_limit: 20,
      })
      .type('form')
      .accept('application/json')
      .end((err, res) => {
        if (err) reject(err)

        console.log('[spider response]:', res.text)

        resolve(res)
      })
  })
}

module.exports = requestDouban
