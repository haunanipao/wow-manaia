import request from 'superagent'

export function getWow() {
  return request.get('/').then((res) => res.body.wow)
}

// const serverURL = 'http://localhost:3000/api/v1/wow'
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
