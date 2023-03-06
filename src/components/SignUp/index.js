import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import './style.css';
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
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username,mediaone,mediathow, mediatree,mediafour, secondname, ano, estatura, nomemae,nomepai,posicao,telefone,img, email, passwordOne, isAdmin,estudos, idioma } = this.state;
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
          mediaone,
          mediathow,
          mediatree,
          mediafour,
          secondname,
          ano,
          email,
          estatura,
          nomemae,
          nomepai,
          posicao,
          telefone,
          img,
          estudos,
          idioma,
          roles,
        });
      })
      .then(() => {
        return this.props.firebase.doSendEmailVerification();
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
      mediaone,
      mediathow,
      mediatree,
      mediafour,
      secondname,
      email,
      estatura,
      ano,
      nomemae,
      nomepai,
      posicao,
      telefone,
      img,
      estudos,
      idioma,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      estatura === '' ||
      ano === '' ||
      nomemae === '' ||
      nomepai === '' ||
      posicao === '' ||
      telefone === '' ||
      img === '' ||
      estudos === '' ||
      idioma === '' ||
      email === '' ||
      mediaone === '' ||
      mediathow === '' ||
      mediatree === '' ||
      mediafour === '' ||
      secondname === '' ||
      
      username === '';


    return (
      <div className='divinputxs'>
        <div className='divbarratopup'>
       
        </div>
        <div className='carinpults'>
                 <form onSubmit={this.onSubmit}>
        <input className='inputstyle'
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
         <input className='inputstyle'
          name="secondname"
          value={secondname}
          onChange={this.onChange}
          type="text"
          placeholder="secondname"
        />
        <input className='inputstyle'
          name="email"
          value={email}
          onChange={this.onChange}
          type="email"
          placeholder="Email Address"
        />
         <input className='inputstyle'
          name="estatura"
          value={estatura}
          onChange={this.onChange}
          type="number"
          placeholder="Estatura"
        />
        <input className='inputstyle'
          name="ano"
          value={ano}
          onChange={this.onChange}
          type="date"
          placeholder="Nascimento"
        />
        <input className='inputstyle'
          name="nomemae"
          value={nomemae}
          onChange={this.onChange}
          type="text"
          placeholder="Nome da mae"
        />
        <input className='inputstyle'
          name="nomepai"
          value={nomepai}
          onChange={this.onChange}
          type="text"
          placeholder="Nome do pai"
        />
        <input className='inputstyle'
          name="posicao"
          value={posicao}
          onChange={this.onChange}
          type="text"
          placeholder="Posicao"
        />
        <input className='inputstyle'
          name="telefone"
          value={telefone}
          onChange={this.onChange}
          type="phone"
          placeholder="Telefone"
        />
        <input className='inputstyle'
          name="img"
          value={img}
          onChange={this.onChange}
          type="text"
          placeholder="Link da imagem"
        />
          <input className='inputstyle'
          name="mediaone"
          value={mediaone}
          onChange={this.onChange}
          type="text"
          placeholder="Link Video 1"
        />
         <input className='inputstyle'
          name="mediathow"
          value={mediathow}
          onChange={this.onChange}
          type="text"
          placeholder="Link Video 2"
        />
         <input className='inputstyle'
          name="mediatree"
          value={mediatree}
          onChange={this.onChange}
          type="text"
          placeholder="Link Video 3"
        />
         <input className='inputstyle'
          name="mediafour"
          value={mediafour}
          onChange={this.onChange}
          type="text"
          placeholder="Link Video 4"
        />
        <input className='inputstyle'
          name="estudos"
          value={estudos}
          onChange={this.onChange}
          type="text"
          placeholder="Estudos"
        />
        <input className='inputstyle'
          name="idioma"
          value={idioma}
          onChange={this.onChange}
          type="text"
          placeholder="Idioma"
        />
        <input className='inputstyle'
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input className='inputstyle'
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <label>
          Admin:
          <input className='inputstyle'
            name="isAdmin"
            type="checkbox"
            checked={isAdmin}
            onChange={this.onChangeCheckbox}
          />
        </label>
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
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
