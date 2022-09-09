import request from 'superagent'
const serverURL = '/api/v1/wow'

export function getWow() {
  return request.get(serverURL).then((res) => res.body)
}

export function addWow(form) {
  return request
    .post(serverURL)
    .send(form)
    .then((res) => {
      if (res.status === 200) {
        return res.body
      } else {
        throw new Error('wow not saved')
      }
    })
}

// export function updateWow() {}
// export function deleteWow() {}
