export default class WordBreakDown {
  constructor(words) {
    this.self = this
    this.apiHost = ((env) => {
      if(env = 'production'){
        return 'https://wordwatch-api.herokuapp.com/api/v1'
      } else {
        return 'http://localhost:3000/api/v1'
      }
    })(process.env.NODE_ENV)
  }

  getTopWord() {
    return fetch(`${this.apiHost}top_word`)
    .then(response => response.json())
    .then(topWord =>  topWord )
    .catch(error => console.dir(error))
  }
}
