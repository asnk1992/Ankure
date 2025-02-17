import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header/header'
import Hero from './component/hero/hero'
import About from './component/about/about'
import Services from './component/services/services'
import Portfolio from './component/portfolio/portfolio'
import Contact from './component/contac/contact'
import Footer from './component/footer/footer'
import 'boxicons/css/boxicons.min.css';
import Cards from './component/cards/cards'
import Projects from './component/projects/projects'
import Work from './component/work/work'
import Newskill from './component/newskills/newskill'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <About/>
   <Work/>
   <Cards/>
   <Newskill/>
   {/* <Projects/> */}
   {/* <Hero/> */}
   {/* <Services/> */}
   {/* <Portfolio/> */}
{/* <Contact/> */}
<Footer/>
   </>
  )
}

export default App
