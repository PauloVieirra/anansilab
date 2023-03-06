import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
//import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import './style.css';


const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <>
    <div className='manusup'>
      <button className='btnbar'>
      <Link to={ROUTES.ACCOUNT} className='textbtnbar'>
      <img src="https://img.icons8.com/pastel-glyph/64/null/gender-neutral-user.png"/>
        </Link>
      </button>
    {!!authUser.roles[ROLES.ADMIN] && (
      <button className='btnbar'>
        <Link to={ROUTES.ADMIN} className='textbtnbar'>
        <img src="https://img.icons8.com/ios/50/null/mechanistic-analysis.png"/>
        </Link>
      </button>
    )}
   </div>
 </>
);

const NavigationNonAuth = () => (
    <>
  <div className='menuexterno'>
    <div className='logscreen'>
    <div className='navegscreen'>
    <div className='btnexterno'> <Link to={ROUTES.LANDING} style={{ textDecoration: 'none', color:'#fff'}}>Inicio</Link></div>
      <div className='btnexterno'>Sobre</div>
      <div className='btnexterno'>Parceiros</div>
      <div className='btnexterno'>Cursos</div>
      <div className='btnexterno'>Eventos</div>
    </div>
    </div>
    <div className='musicalbtns'>
      <button className='btnselectmusical'><Link to={ROUTES.SIGN_IN}>Inscreva-se </Link> </button>
      <button className='btnloginmusical'><Link to={ROUTES.SIGN_IN}> Entrar </Link> </button>
    </div>
    <div className='musicalbtnsmobi'>
      
      <button className='btnloginmusical'> <Link to={ROUTES.SIGN_IN}> Entrar </Link> </button>
      <button className='btnselectmusical'> <Link to={ROUTES.SIGN_IN}> Não tem uma conta? Inscreva-se </Link> </button>
    </div>
  </div>
  
  </>
);

export default Navigation;
