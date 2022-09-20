import request from 'superagent'
const serverURL = '/api/v1/wow'

// Get all the WOWs
export function getWows() {
  return request.get(serverURL).then((res) => res.body)
}

// Add a WOW from the form
export function addWow(form) {
  return request
    .post(serverURL)
    .send(form)
    .then((res) => {
      if (res.status === 200) {
        return res.body
      } else {
        throw new Error('WOW was not saved')
      }
    })
}
