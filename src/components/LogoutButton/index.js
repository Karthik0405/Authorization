// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogOutButton = props => {
  const logOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div>
      <button className="button" type="button" onClick={logOut}>
        LogOut
      </button>
    </div>
  )
}

export default withRouter(LogOutButton)
