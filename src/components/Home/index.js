import React from 'react';
import { compose } from 'recompose';
import ImageUpload from '../Modal';
import SignOutButton from '../SignOut/index';
import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';



const HomePage = () => (

  <>
  <div>
     
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    
 
    <Messages />
  </div>

  <div><SignOutButton/></div>

  <ImageUpload/>
  </>
);












const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
