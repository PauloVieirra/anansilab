import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import logo from '../../components/img/plus.png';
import iconback from '../../components/img/arrow.png';

const PasswordForgetPage = () => (
  <>
  <div className='divtopchange'>
        <div className='divsupchange'>
        <div className='divimglogochange'> <img src={logo} className='imglogo'/> </div>
        <div className='divbackchange'>
            <Link to={ROUTES.LANDING}> <img src={iconback} className='diviconback'/>    </Link>
        </div>
        </div>
    </div>
  <div className='divrecuperar'>
     
    <h3>Recuperar conta</h3>
    <PasswordForgetForm />
  </div>
  </>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <div>Informe seu e-mail de cadastro</div>
        <input className='inputchange'
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email"
        />
        <button disabled={isInvalid} type="submit" className='btnchange'>
          Recuperar minha senha
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET} className='textdeflink'>Esqueceu sua senha? </Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
