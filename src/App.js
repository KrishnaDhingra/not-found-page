import './index.css'
import Navbar from './components/navbar.js'
import NotFoundImage from './assets/not-found-image.png'

function App() {
  return (
    <div className="overflow-hidden App h-screen bg-gray-200">

      <Navbar/>

        <div className="inner-container grid place-items-center">
          
          <img className="not-found-image" src={NotFoundImage} alt="" />


          <div className="flex flex-col gap-3">

            <p className="not-found-text text-black text-center font-normal">The page you are looking for could not be found!</p>

            <div className="flex gap-2 justify-center">

              <span className="text-black text-xl font-normal">Please contact our </span>
              <a href="#" className="text-blue-500 text-xl font-normal underline hover:text-blue-600">server mods</a>
              <span className="text-black text-xl font-normal">for more info</span>

            </div>

          </div>

        </div>
    </div>
  );
}

export default App;
