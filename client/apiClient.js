import request from 'superagent'

export function getGreeting() {
  return request.get('/').then((res) => res.body.greeting)
}
const serverURL = 'http://localhost:3000/api/v1'
// Calls to api lives here

// *** EXAMPLE ***
// export function getWelcome() {
//   return request.get(`${serverURL}/welcome`).then((response) => response.body)
// }

// // Proxy API and special key
// export function getHeros(value) {
//   return (
//     request
//       // .get(`/api/v1/marvel/marvel/test?search=${value}`)
//       .get(`/api/v1/marvel/marvel/test/${value}`)
//       .then((response) => {
//         console.log(response.body)
//       })
//   )
// }
