import axios from 'axios'
import axiosClient from './api/axiosClient'
import postApi from './api/postApi'

// const liElement = (data) => {
//   const postTemplate = document.getElementById('postTemplate')
//   if (!postTemplate) return
//   const liElement = postTemplate.cloneNode(true)
//   return liElement
// }
const renderPostList = (data) => {
  if (!Array.isArray(data) || data.length === 0) return
  const ulElement = document.getElementById('postsList')
  console.log(ulElement)
  if (!ulElement) return
  data.forEach((value, index) => {
    ulElement.appendChild(liElement(value))
  })
}

;(async () => {
  try {
    const queryParams = {
      _page: 1,
      _limit: 5,
    }
    const data = await postApi.getAll(queryParams)
    renderPostList(data)
  } catch (error) {
    console.log(error)
  }
})()
