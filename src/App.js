import './index.css'
import Navbar from './components/navbar.js'

function App() {
  return (
    <div className="App h-screen bg-gray-200">

      <Navbar/>

        <div className="my-auto h-3/4 flex flex-col justify-center items-center gap-4">

          <div className="flex flex-gap-2">
            <p className="four font-bold text-blue-500">4</p>
            <p className="four font-bold text-blue-500">0</p>
            <p className="four font-bold text-blue-500">4</p>
          </div>

          <p className="not-found-text text-black text-3xl text-center font-normal">The page you are looking for could not be found!</p>

          <div className="flex gap-2">

            <span className="text-black text-xl font-normal">Please contact our </span>
            <a href="#" className="text-blue-500 text-xl font-normal underline hover:text-blue-600">server mods</a>
            <span className="text-black text-xl font-normal">for more info</span>

          </div>

        </div>
    </div>
  );
}

export default App;
