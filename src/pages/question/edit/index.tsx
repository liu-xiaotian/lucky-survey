import useLoadingQuestionData from '../../../hooks/useLoadQuestionData'

const Edit = () => {
  const { loading, questionData } = useLoadingQuestionData()
  return (
    <div>
      <p>Edit page</p>
      {loading ? <p>loading</p> : <p>{JSON.stringify(questionData)}</p>}
    </div>
  )
}

export default Edit
