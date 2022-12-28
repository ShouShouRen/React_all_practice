import React from 'react';
import Logo from './logo.png';
import './App.css';
import {
  StyledAppHeader,
  StyledAppHeaderContent,
  StyledAppHeaderNavigationBar,
  StyledExploerButton,
  StyledSignInButton
} from './App.Styled';
import About from '../About';
import Recipes from '../Recipes';
import Cooking from '../Cooking';
import Dinner from '../Dinner';

function App() {
  // const [isSignInClick, setSignInClick] = React.useState(false)
  const [pathname, setPathname] = React.useState('/')
  const [searchStart, setSearchStart] = React.useState(false)

  React.useEffect(() => {
    const pn = window.location.pathname
    setPathname(pn)
  }, [])
  return (

    <StyledAppHeader>
      <StyledAppHeaderNavigationBar>
        <div>
          <a href='/'>
            <img src={Logo} />
          </a>
        </div>
        <div className='navigation-list'>
          <div className='search'>
            <i onClick={() => setSearchStart(!searchStart)} className='fas fa-search'></i>
            <input className={searchStart ? 'open' : ''} placeholder="搜尋網站目標" type='text' />
          </div>
          <div className='navigation'>
            <ul>
              <li><a href='/recipes'>Recipes</a></li>
              <li><a href="/dinner">Dinner TV</a></li>
              <li><a href="/cooking">Cooking School</a></li>
              <li><a href='/about'>About</a></li>
            </ul>
          </div>
          <div>
            <StyledSignInButton>Sign Up</StyledSignInButton>
          </div>
        </div>
      </StyledAppHeaderNavigationBar>
      <StyledAppHeaderContent>
        {pathname === '/' &&
          <React.Fragment>
            <div className='content-title'>Let's Get Cooking</div>
            <div className='content-text'>
              <p>Explore the best recipes from around the world.</p>
              <p>Make cooking enjoyble again.</p>
            </div>
            <StyledExploerButton>Explore Recipes</StyledExploerButton>
          </React.Fragment>
        }
        {
          pathname === '/about' && <About />
        }
        {
          pathname === '/recipes' && <Recipes />
        }
        {
          pathname === '/cooking' && <Cooking />
        }
        {
          pathname === '/dinner' && <Dinner />
        }
      </StyledAppHeaderContent>
    </StyledAppHeader>
  );
}

export default App;
