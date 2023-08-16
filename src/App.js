import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { lightTheme } from "./components/Themes"
import { Route, Switch, useLocation } from "react-router-dom/cjs/react-router-dom.min"


//components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";


function App() {

  const location = useLocation();
  return <> 


  <GlobalStyle/>


    <ThemeProvider theme={lightTheme}>
    <SoundBar />
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/project" component={ProjectPage}/>
      <Route exact path="/work" component={WorkPage}/>
      <Route exact path="/skills" component={MySkillsPage}/>

   


    </Switch>
    </AnimatePresence>
    </ThemeProvider>
    
    </>
    
}

export default App

