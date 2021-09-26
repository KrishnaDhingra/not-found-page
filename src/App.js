import './index.css'
import Navbar from './components/navbar.js'
import NotFoundImage from './assets/not-found-image.png'

function App() {
  return (
    <div className="overflow-hidden App h-screen bg-gray-200">

      <Navbar/>

        <div className="px-2 inner-container flex flex-col justify-center md:grid place-items-center">
          
          <img className="transform scale-100 sm:scale-90 lg:scale-75 not-found-image" src={NotFoundImage} alt="" />


          <div className="flex flex-col gap-3">

              <p className="not-found-text text-black text-2xl sm:text-3xl text-center font-normal">The page you are looking for could not be found!</p>

              <span className="text-center text-black text-xl font-normal">Please contact our<a href="#" className="mx-2 server-mods text-xl font-normal underline hover:text-blue-600">server mods</a>for more info</span>
        
          </div>

        </div>
    </div>
  );
}

export default App;
