import React, { Component } from "react";
import firebase from 'firebase/app';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';


const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';


const ERROR_MSG_ACCOUNT_EXISTS = `
  Ja existe uma conta que usa esse email.
`;

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      username: "",
      secondname: "",
      email: "",
      passwordOne: "",
      passwordTwo: "",
      telefone: "",
      isAdmin: "",
      imageID: ""
      
    }; 
    
    this.storage = firebase.storage();
    this.database = firebase.database();
   
  }


  

 

 

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  




   handleFormSubmit = () => {
    const { username, secondname, email, telefone, imageID, isAdmin} = this.state;
    const roles = {};

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    const userRef = this.database.ref('users').push();
    userRef.set({
      username,
      secondname,
      email,
      roles,
      telefone,
      imageID
    })
      .then(() => console.log('Data written successfully!'))
      .catch(error => console.error(error));
  }

  handleRegister = () => {
    const { email, passwordOne } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, passwordOne)
      .then((userCredential) => {
        console.log('User registered successfully!', userCredential.user);
        this.handleFormSubmit();
      })
     
      .handleFormSubmit()
      .catch(error => console.error(error));
      this.handleFormSubmit();
      }
      
      handleUpload = () => {
      const { image } = this.state;
      const uploadTask = this.storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
      "state_changed",
      snapshot => {
      const progress = Math.round(
      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      this.setState({ progress });
      },
      error => {
      console.log(error);
      },
      () => {
      this.storage
      .ref("images")
      .child(image.name)
      .getDownloadURL()
      .then(url => {
      const imageID = url.split('?')[0].split('/').slice(-1)[0];
      this.setState({ url, imageID }, this.handleRegister);

      
  

      });
      }
      );
      };

      onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

      onChangeCheckbox = event => {
        this.setState({ [event.target.name]: event.target.checked });
      };
    
      
    
      
      render() {

        const { username, secondname, email, telefone, passwordOne, isAdmin ,passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      telefone === '' ||
      email === '' ||
      secondname === '' ||
      username === '';

      return (
        <>
      <div className="center">
      <br/>
      <h2 className="green-text">React Firebase Image Uploader</h2>
      <br/>
      <br/>
      <div className="row">
      <progress value={this.state.progress} max="100" className="progress" />
      </div>
      <br />
      <br />
      <br />
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
      height="300"
      width="400"
      />
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

      <div className='check'>
         
         
        </div>


        <div className='check'>
         
          <input className='removerbox'
            name="isAdmin"
            type="checkbox"
            checked={isAdmin}
            onChange={this.onChangeCheckbox}
          />
        </div>
        




        
      </div>
      </>
      );
      }
      }
      
      export default ImageUpload;