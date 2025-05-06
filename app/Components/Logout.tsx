import { clearCookies } from '@/lib/utils'

const Logout = () => {
  return (
    <button onClick={() => clearCookies()}>Log out</button>
  )
}

export default Logout