import './App.css'
import AboutMe from './components/AboutMe'
import AboutMemock from './components/AboutMemock'
import Banner from './components/Banner'
import Header from './components/Header'
import Hero from './components/Hero'
import RecentProjects from './components/RecentProjects'
import Services from './components/Services'

function App() {
  

  return (
    <div 
    className='w-full h-full'
    style={{
    background: `linear-gradient(to right, oklch(0.25 0.06 248.89) 0%, oklch(0.25 0.06 248.89) 50%, #050d17 100%)`
    }}>
     <Header/>
     <Hero/>
     <Banner/>
     <AboutMemock/>
     <RecentProjects/>
     <Services/>
     
    </div>
  )
}

export default App
