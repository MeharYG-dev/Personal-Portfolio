import './App.css'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <div className="container text-center mt-5">
      <h1 className="text-primary">My Responsive Portfolio</h1>
      <p className="lead">Frontend Developer Portfolio</p>

      <button className="btn btn-primary">
        Test Bootstrap
      </button>
    </div>
    </>
  )
}

export default App