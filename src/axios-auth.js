import axios from 'axios'

const instance= axios.create({
    baseURL: 'https://myvueproject-da50e.firebaseio.com/',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  })

  
  export default  instance
  