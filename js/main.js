import axios from 'axios'
import axiosClient from './api/axiosClient'
import postApi from './api/postApi'

console.log('hello from main.js')

async function main() {
  const testGetAll = await postApi.getAll({ _page: 1, limit: null })
  console.log('run...')
  console.log(testGetAll)
}

main()
