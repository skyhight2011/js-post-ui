import axios from 'axios'
import axiosClient from './api/axiosClient'
import postApi from './api/postApi'

console.log('hello from main.js')

async function main() {
  try {
    const testGetAll = await postApi.getAll({ _page: 1, limit: null })
    console.log(testGetAll)
  } catch (error) {
    console.log(error)
  }
  console.log('abc xzy')
}

main()
