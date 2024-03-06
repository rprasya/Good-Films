import Intro from './components/Intro'
import NavigationBar from './components/NavigationBar'
import Tranding from './components/Tranding'
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
    </>
  )
}

export default App