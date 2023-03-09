import React, { Component, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import './style.css';
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








const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';


const ERROR_MSG_ACCOUNT_EXISTS = `
  Ja existe uma conta que usa esse email.
`;


class SignUpFormBase extends Component {
  constructor(props) {
    super(props);


    this.state = { ...INITIAL_STATE };
  }


  onSubmit = event => {
    const { username, secondname,telefone, email, passwordOne, isAdmin} = this.state;
    const roles = {};


    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }


    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          secondname,
          email,
          telefone,
          roles,
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }


        this.setState({ error });
      });


    event.preventDefault();
  };



  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

 
  render() {
    const {
      username,
      secondname,
      email,
      telefone,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
    } = this.state;


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
  }
}


const SignUpLink = () => (
  <p>
    <Link to={ROUTES.SIGN_UP}> Cadastrar um novo atleta</Link>
  </p>
);


const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);


export default SignUpPage;


export { SignUpForm, SignUpLink };



