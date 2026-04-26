import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getQuestionService } from '../../../service/question'

const Edit = () => {
  const { id = '' } = useParams()
  useEffect(() => {
    async function fn() {
      const data = await getQuestionService(id)
      console.log('edit data', data)
    }
    fn()
  }, [])
  return <div>index{id}</div>
}

export default Edit
