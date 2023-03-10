import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';
import './style.css';

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  image: null,
  url: '',
  progress: 0,
  username: '',
  secondname: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  telefone: '',
  isAdmin: false,
  imageID: '',
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';
const ERROR_MSG_ACCOUNT_EXISTS = 'Já existe uma conta que usa esse email.';

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.storage = firebase.storage();
    this.database = firebase.database();
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({ image });
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = this.storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
         snapshot => {
    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        this.storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            const imageID = url.split('?')[0].split('/').slice(-1)[0];
            this.setState({ url, imageID });
          });
      }
    );
  };
  
  onSubmit = event => {
    if (event) {
      event.preventDefault();
    }
     const { username, secondname, email, telefone, imageID, passwordOne, isAdmin,url } = this.state;
     const roles = {};
    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          secondname,
          email,
          roles,
          url,
          telefone,
          imageID,
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
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  isFormInvalid = () => {
    const { passwordOne, passwordTwo, telefone, email, secondname, username } = this.state;
    return (
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      telefone === '' ||
      email === '' ||
      secondname === '' ||
      username === ''
    );
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

       <div className="center">
      
      <br/>
      <div className="row">
      <progress value={this.state.progress} max="100" className="progress" />
      </div>
      <div className="file-field input-field">
      <div className="btn">
      <span>File</span>
      <input type="file" onChange={this.handleChange} />
      </div>
      <div className="file-path-wrapper">
      <input className="file-path validate" type="text" />
      </div>
      </div>
      <button
             onClick={this.handleUpload}
             className="waves-effect waves-light btn"
           >
      Upload
      </button>
      <br />
      <br />
      <img
      src={this.state.url || "https://via.placeholder.com/400x300"}
      alt="Uploaded Images"
      height="100"
      width="100"
      />  </div>
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
        />
        </div>

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



