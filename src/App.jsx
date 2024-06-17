import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeadComponent from './components/HeadComponent/HeadComponent'
import Nav_video from './components/Nav_video'
import Page_wrapper from './components/Page_wrapper.jsx'
import Body_wrapper from './components/Body_wrapper.jsx'
import Navbar from './components/Navbar.jsx'
import Section_main from './components/Section_main.jsx'
import Video_section from './components/Video_section.jsx'
import Section_videos from './components/Section_videos.jsx';
import Section_about from './components/Section_about.jsx'
import Main_cs from './components/Main_cs.jsx';
import SectionCaseStudy from './components/SectionCaseStudy.jsx'
import Mob_cs from './components/Mob_cs.jsx'
import CaseStudy from './components/CaseStudy.jsx';
import Section_9 from './components/Section_9.jsx';
import Section_Solution from './components/Section_Solution.jsx';
import Footer from './components/Footer.jsx'
import "./global.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <HeadComponent/> 
      </div>
      <Body_wrapper>
        <Nav_video/>
      <Page_wrapper>
        <Navbar/>
        <Section_main/>
        <Video_section/>
        <Section_videos/>
        <Section_about/>
        <Main_cs/>
        <SectionCaseStudy/>
        <Mob_cs/>
        <CaseStudy/>
        <Section_9/>
        <Section_Solution/>
        <Footer/>
      </Page_wrapper>
      </Body_wrapper>
      
    </>
  )
}

export default App
