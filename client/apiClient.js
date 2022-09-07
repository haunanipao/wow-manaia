import request from 'superagent'
const serverURL = '/api/v1/wow'

export function getWow() {
  return request.get(serverURL).then((res) => res.body)
}

// Calls to api lives here
// *** EXAMPLE ***
// export function getWelcome() {
//   return request.get(`${serverURL}/welcome`).then((response) => response.body)
// }
//
// export function addWow(form) {
//   return request
//     .post(serverUrl)
//     .send(form)
//     .then((res) => {
//       if (res.status === 200) {
//         return res.body
//       } else {
//         throw new Error('wow not saved')
//       }
//     })
// }
