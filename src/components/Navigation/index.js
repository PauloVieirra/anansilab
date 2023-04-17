import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
//import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { IoHeadsetOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoGitBranchOutline } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import imglogofios from "../img/logos-fios.png";
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
     <div className='menurow'>

       <button className='btnbar active'>
          <Link to={ROUTES.HOME} className="a">
          <IoHomeOutline className='iconbar'/>
          <div className='textmenu'>Inicio</div>
          </Link>
        </button>
     

      <button className='btnbar'>
      <Link to={ROUTES.ACCOUNT} className="a">
      <IoPersonCircleOutline className='iconbar'/>
      <div className='textmenu'>Perfil</div>
      </Link>
      </button>
      <button className='btnbar'>
      <Link to={ROUTES.PUBLI} className="a">
      <IoHeadsetOutline className='iconbar'/>
        <div className='textmenu'>Postar</div></Link>
      </button>
      <button className='btnbar'>
         <Link to={ROUTES.CONEXOES} className="a">
         <IoGitBranchOutline className='iconbar'/>
         <div className='textmenu'>Conexões</div>
         </Link>
      </button>

      <button className='btnbar'>
         <Link to={ROUTES.CONTA} className="a" >
         <IoMicOutline className='iconbar'/>
         <div className='textmenu'>Conta</div>
        </Link>
      </button>

    {!!authUser.roles[ROLES.ADMIN] && (
      <button className='btnbar'>
        <Link to={ROUTES.ADMIN} className='a'>
        <img className='iconbar' src="https://img.icons8.com/ios/50/null/mechanistic-analysis.png"/>
        <div className='textmenu'>Conta</div>
        </Link>
      </button>
    )}
    <div className='indicator'></div>
    </div>
   
   </div>
 </>
);

const NavigationNonAuth = () => (
 <>
  
 </>
);

export default Navigation;
