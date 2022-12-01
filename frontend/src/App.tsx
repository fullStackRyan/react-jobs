import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/nav-bar/nav-bar.component'
import Home from './pages/home.page'
import Login from './pages/login.page'
import Register from './pages/register.page'

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
