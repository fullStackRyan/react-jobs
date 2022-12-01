import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const NavBar: React.FC = () => {
  const navigate = useNavigate()
  const user = false // temp

  const handleOnClick = () => {
    navigate('/')
  }

  return (
    <header>
      <div className='logo'>
        <Link to='/'>React Jobs</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button onClick={handleOnClick}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default NavBar
