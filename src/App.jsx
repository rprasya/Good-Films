import Intro from './components/Intro'
import NavigationBar from './components/NavigationBar'
import Tranding from './components/Tranding'
import SuperHero from './components/Superhero'
import "./style/landingPage.css"

function App() {
  return (
    <>
      {/* intro section */}
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* Tranding section */}
      <div className='tranding'>
        <Tranding />
      </div>
      {/* End Tranding section */}

      {/* Superhero section */}
      <div className='superhero'>
        <SuperHero />
      </div>
      {/* end Superhero section */}
    </>
    
  )
}

export default App