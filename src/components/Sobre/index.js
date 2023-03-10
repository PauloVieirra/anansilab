import React, { Component, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { BsArrowLeft } from "react-icons/bs";
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  image:null,
  error: null,
};



 function SignUpPageb() {


  const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

  const ERROR_MSG_ACCOUNT_EXISTS = `
    Já existe uma conta que usa esse e-mail.
  `;
  
  class SignUpFormBase extends Component {
    constructor(props) {
      super(props);
  
      this.state = { ...INITIAL_STATE };
    }

    handleImageUpload = event => {
      event.preventDefault();
      const { image } = this.state;
    
      if (image) {
        const { firebase } = this.props;
        const storageRef = firebase.storage.ref();
        const imageRef = storageRef.child(`images/${image.name}`);
    
        imageRef.put(image).then(snapshot => {
          snapshot.ref.getDownloadURL().then(url => {
            const imageId = snapshot.metadata.name;
            const dbRef = firebase.db.ref('users');
            const newKey = dbRef.push().key;
    
            const { username, email, isAdmin } = this.state;
            const roles = {};
    
            if (isAdmin) {
              roles[ROLES.ADMIN] = ROLES.ADMIN;
            }
    
            const userData = {
              username,
              email,
              roles,
              imageId,
            };
    
            const updates = {};
            updates[`/users/${newKey}`] = userData;
    
            return firebase.db.ref().update(updates);
          });
        }).catch(error => {
          console.error('Error uploading image:', error);
        });
      }
    };

    onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    onChangeCheckbox = event => {
      this.setState({ [event.target.name]: event.target.checked });
    };
  
    onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
        const image = event.target.files[0];
        this.setState(() => ({ image }));
      }
    };
  
    render() {
      const { username, secondname, email, telefone, passwordOne, passwordTwo, isAdmin, error, image } = this.state;
  
      const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        telefone === '' ||
        email === '' ||
        secondname === '' ||
        username === '';




 return (
   
  <div className='divinputxs'>
  <div className='divbarratopup'>
    <Link to={ROUTES.LANDING} style={{textDecoration: 'none', color: 'white' }} >
     <div style={{display:'flex',width:'48px',marginLeft:'12px', height:"100%", justifyContent:'center', alignItems:'center', fontSize:'24px'}}> <BsArrowLeft/> </div>
     </Link>
      <div></div>
  </div >
  <div>
   <form className='carinpults' onSubmit={this.onSubmit}>  
   <div className='divimguploud'> 
      <input type='file' onChange={this.handleImageUpload} />
        <div className='namecadtop'>
        {username} {secondname}
         </div>
   </div>
  <div className='imputdiv'>

  <input className='inputup'
    name="username"
    value={username}
    onChange={this.onChange}
    type="text"
    placeholder="Full Name"
  />
  </div>
  <div className='imputdiv'>
   <input className='inputup'
    name="secondname"
    value={secondname}
    onChange={this.onChange}
    type="text"
    placeholder="secondname"
  />
  </div>
  <div className='imputdiv'>
  <input className='inputup'
    name="email"
    value={email}
    onChange={this.onChange}
    type="email"
    placeholder="Email Address"
  />
  
  </div>
  <div className='imputdiv'>
  <input className='inputup'
    name="telefone"
    value={telefone}
    onChange={this.onChange}
    type="phone"
    placeholder="Telefone"
  />

  </div>
  <div className='imputdiv'>
  <input className='inputup'
    name="passwordOne"
    value={passwordOne}
    onChange={this.onChange}
    type="password"
    placeholder="Password"
  /></div>
    <div className='imputdiv'>
  <input className='inputup'
    name="passwordTwo"
    value={passwordTwo}
    onChange={this.onChange}
    type="password"
    placeholder="Confirm Password"
  />
  </div>
    <div className='btnregister'>
  <button className='btnup'  disabled={isInvalid} type="submit">
    Cadastrar
  </button>
  </div>
 
  {error && <p>{error.message}</p>}




      <div className='check'>
      
        <input className='removerbox'
          name="isAdmin"
          type="checkbox"
          checked={isAdmin}
          onChange={this.onChangeCheckbox}
        />
      </div>


    
    </form>
    </div>
    </div>


  );
 }}}

 const SignUpLink = () => (
  <p>
    <Link to={ROUTES.SIGN_UP}> Cadastrar um novo atleta</Link>
  </p>
);


const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpPageb);


export default SignUpPage;


export { SignUpForm, SignUpLink };