import React, { Component,useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { AiFillMail,AiOutlineUser,AiOutlineMeh,AiOutlinePhone,AiFillSafetyCertificate } from "react-icons/ai";
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
      const imageUrl = URL.createObjectURL(image);
      this.setState({ image, imageUrl });
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
     const { username, secondname, email, telefone, imageID, passwordOne, isAdmin} = this.state;
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
          url:this.state.url,
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

  fileInputRef = React.createRef();

  handleImageClick = () => {
    this.fileInputRef.current.click();
  }

  

  render() {
    const {
      username,
      secondname,
      email,
      telefone,
      passwordOne,
      passwordTwo,
      isAdmin,
      image,
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
          <div>
         </div>
         </div >
      <div>
   <form className='carinpults' onSubmit={this.onSubmit}>  
       <div className='divimguploud'> 
    

      <div className="center_circle">
      <React.Fragment>
        <input type="file" style={{display:'none'}} id="image-upload-input" ref={this.fileInputRef} onChange={this.handleChange} />
        <img
          src={this.state.imageUrl || "https://st4.depositphotos.com/20838724/24118/v/450/depositphotos_241182048-stock-illustration-camera-simple-icon-vector-filled.jpg"}
          alt="Uploaded Images"
          className='progress-circle-img'
          onClick={this.handleImageClick}
        />

      </React.Fragment>
         
      
          <progress value={this.state.progress}  className="progress" />
     </div>
     <div className="constimg">
     
        {image &&
        <button onClick={this.handleUpload}
                        className="btnupload">
                        Salvar
                </button>
        
        }
      </div>
      
          <div className='namecadtop'>
              {username} {secondname}
             </div>
         </div>
         <div className='continputgeral'>
        <div className='imputdiv'>
        <AiOutlineMeh className='iconinp'/>
        <input className='inputup'
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Nome"
        />
        </div>

        <div className='imputdiv'>
        <AiOutlineUser className='iconinp'/>
         <input className='inputup'
          name="secondname"
          value={secondname}
          onChange={this.onChange}
          type="text"
          placeholder="Sobrenome"
        />
        </div>

        <div className='imputdiv'>
          <AiFillMail className='iconinp'/>
        <input className='inputup'
          name="email"
          value={email}
          onChange={this.onChange}
          type="email"
          placeholder="Email"
        />
        </div>

        <div className='imputdiv'>
        <AiOutlinePhone className='iconinp'/>
        <input className='inputup'
          name="telefone"
          value={telefone}
          onChange={this.onChange}
          type="phone"
          placeholder="Telefone"
        />
        </div>

        <div className='imputdiv'>
        <AiFillSafetyCertificate className='iconinp'/>
        <input className='inputup'
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Senha com 6 digitos"
        />
        </div>

        <div className='imputdiv'>
        <AiFillSafetyCertificate className='iconinp'/>
        <input className='inputup'
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirme sua senha"
        />
        </div>
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



