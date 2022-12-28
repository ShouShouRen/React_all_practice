import React from 'react';
import Logo from './logo.png'
import {
  StyledAppHeader,
  StyledAppHeaderContent,
  StyledAppHeaderNavigationBar,
  StyledExploerButton,
  StyledSignInButton
} from './App.Styled'
import { Routes, Route, Link } from 'react-router-dom'
import About from '../About'
import Recipes from '../Recipes'
import Cooking from '../Cooking'
import Dinner from '../Dinner';

function Index() {
  return (
    <React.Fragment>
      <div className="content-title">Let's Get Cooking!</div>
      <div className="content-text">
        <div>Explore the best recipes from around the world.</div>
        <div>Make cooking enjoyable again.</div>
      </div>
      <StyledExploerButton>Explore Recipes</StyledExploerButton>
    </React.Fragment>
  )
}

function App() {
  const [searchStart, setSearchStart] = React.useState(false)
  const [pathname, setPathname] = React.useState('/')

  React.useEffect(() => {
    const pn = window.location.pathname
    setPathname(pn)
  }, [])
  return (
    <StyledAppHeader>
      <StyledAppHeaderNavigationBar>
        <div>
          <a href="/"><img src={Logo} /></a>
        </div>
        <div className="navigation-list">
          <div className="search">
            <i onClick={() => setSearchStart(!searchStart)} className="fas fa-search"></i>
            <input className={searchStart ? 'open' : ''} type="text" placeholder="搜尋網站目標" />
          </div>
          <div className="navigation">
            <ul>
              <li><Link to='/recipes'>Recipes</Link></li>
              <li><Link to='/dinner'>Dinner TV</Link></li>
              <li><Link to='/cooking'>Cooking School</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </div>
          <div>
            <StyledSignInButton>Sign In</StyledSignInButton>
          </div>
        </div>
      </StyledAppHeaderNavigationBar>
      <StyledAppHeaderContent>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/cooking' element={<Cooking />} />
        </Routes>
      </StyledAppHeaderContent>
    </StyledAppHeader>
  );
}

export default App;