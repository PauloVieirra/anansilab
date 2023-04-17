import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import PubliPage from '../Publi';
import ContaPage from '../Conta';
import ConexoesPage from '../Conexoes';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Termos from '../Termos';
import Sobre from '../Sobre';
import Feedpage from '../Feedpage';
import Slidertop from '../Slidertop';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';


const App = () => (
  <Router>
    <Switch>
    <div>
      <Navigation />
      

    

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.TERMOS} component={Termos}/>
      <Route path={ROUTES.PUBLI} component={PubliPage}/>
      <Route path={ROUTES.SOBRE} component={Sobre}/>
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.FEEDPAGE} component={Feedpage}/>
      <Route path={ROUTES.SLIDERTOP} component={Slidertop}/>
      <Route path={ROUTES.CONTA} component={ContaPage}/>
      <Route path={ROUTES.CONEXOES} component={ConexoesPage}/>

      <Route path={ROUTES.ADMIN} component={AdminPage} />
      
    </div>
    </Switch>
  </Router>
);

export default withAuthentication(App);
