import Header from '../Header'
import LogOutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <h1 className="home-heading">Home Route</h1>
    <LogOutButton />
  </div>
)

export default Home
