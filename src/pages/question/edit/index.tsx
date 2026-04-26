import useLoadingQuestionData from '../../../hooks/useLoadQuestionData'

const Edit = () => {
  const { loading, data } = useLoadingQuestionData()
  return (
    <div>
      <p>Edit page</p>
      {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}
    </div>
  )
}

export default Edit
