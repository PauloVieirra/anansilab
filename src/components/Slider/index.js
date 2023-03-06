import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import  './styles.css';

function UserList() {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    // Configuração do Firebase (simulada)
    const config = {
    apiKey: "AIzaSyDVAjMB7j7X9RxSWVB8hgt1zWcDXlamaVc",
    authDomain: "drinks-bis.firebaseapp.com",
    databaseURL: "https://drinks-bis-default-rtdb.firebaseio.com",
    projectId: "drinks-bis",
    storageBucket: "drinks-bis.appspot.com",
    messagingSenderId: "510935611385",
    appId: "1:510935611385:web:aa9dae650875751ecc2f28"
    };



    // Busca usuários do Realtime Database
    const usersRef = firebase.database().ref('albuns');
    usersRef.on('value', (snapshot) => {
      const usersObject = snapshot.val();
      if (usersObject) {
        const usersList = Object.keys(usersObject).map((key) => ({
          ...usersObject[key],
          uid: key,
        }));
        setUsers(usersList);
      }
    });

    // Limpa listener quando componente é desmontado
    return () => usersRef.off();
  }, []);

  return (
  <div className='itemlista'>
    {users.map((user) => (
      <>
      <div key={user.uid} style={{display:'flex', flexDirection:'column', marginBottom:'20px'}}>
         <div  style={{display:'flex',flexDirection:'row',width:'100%',}}>
         <div><img src= {user.img} alt=""  className='imgparclat'/></div>
          <div style={{display:'flex',fontSize:'11px',flexDirection:'column', marginLeft:'10px', width:'100%'}}>
         <div style={{fontSize:'16px'}}>  {user.nome}<br/></div>
         {user.genero}<br/>
      {user.ano}
    </div>
   
         </div>
 <div style={{display:'flex', width:'100%', height:'100%' ,fontSize:'11px', flexDirection:'row'}}>
    {user.pro1} - {user.pro2} - {user.pro3}
      
    </div>

         </div>
      
      
      
      
      
      </>))}
    </div>
  );
}

export default UserList;