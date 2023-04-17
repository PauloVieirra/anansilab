import React from 'react';
import { compose } from 'recompose';
import SignOutButton from '../SignOut/index';
import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';
import FeedBase from '../Feed';
import './style.css';




const HomePage = () => (
<>
<div className="scrollable-container">
<div className='feedplaytoplist'>1</div>
      <div className="scrollable-content">
      <FeedBase/>
      </div>
</div>
  <div className='brngoout'><SignOutButton/>  </div>

  </>
);












const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
