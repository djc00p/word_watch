export default class WWapp {
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

  static getTopWord() {
    return fetch(`${this.apiHost}top_word`)
    .then(response => response.json())
    .then(topWord =>  topWord )
    .catch(error => console.dir(error))
  }

  static postWords() {
    return fetch(`${this.apiHost}words`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: { word: { value: words }}
    })
    .then(response => response.json())
    .then(words => words)
    .catch(error => console.dir(error))
  }
}
