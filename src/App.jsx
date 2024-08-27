import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import "./CSS/Containers.css"

function App() {
  return (
    <div>
      <div className='main-container'><Header /></div>
      <div className='main-container'><Content /></div>
      <div className='main-container'><Footer /></div>
    </div>
  )
}

export default App;