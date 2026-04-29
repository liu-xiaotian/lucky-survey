import { useEffect, useState } from 'react'
import useGetUserInfo from './useGetUserInfo'
import { useRequest } from 'ahooks'
import { getUserInfoService } from '../services/user'
import { useDispatch } from 'react-redux'
import { loginReducer } from '../store/userReducer'

function useLoadUserData() {
  const [waitingUserData, setWaitingUserData] = useState(true)
  const dispatch = useDispatch()

  const { run } = useRequest(getUserInfoService, {
    manual: true,
    onSuccess(result) {
      const { username, nickname } = result
      dispatch(loginReducer({ username, nickname }))
    },
    onFinally() {
      setWaitingUserData(false)
    },
  })
  // 判断当前 redux store 是否已经存在用户信息
  const { username } = useGetUserInfo() //redux store
  useEffect(() => {
    if (!username) {
      // 如果 redux store 中没有用户信息，则进行加载
      run()
    }
  }, [username, run])
  return waitingUserData
}

export default useLoadUserData
