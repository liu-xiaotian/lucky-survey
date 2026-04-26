import { useRequest } from 'ahooks'
import { useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY } from '../constant'
import { getQuestionListService } from '../service/question'

function UseLoadQuestionListData() {
  const [searchParams] = useSearchParams()

  const { data, loading, error } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
      const data = await getQuestionListService({ keyword })
      return data
    },
    {
      refreshDeps: [searchParams], //刷新的依赖项
    }
  )

  return { data, loading, error }
}

export default UseLoadQuestionListData
