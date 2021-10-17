const firebaseConfig = {
    apiKey: "AIzaSyAYGQq-JV81hYECP73faMCwzgk_Ay0Am-Y",
    authDomain: "databasefirebasefirestore.firebaseapp.com",
    databaseURL: "https://databasefirebasefirestore-default-rtdb.firebaseio.com",
    projectId: "databasefirebasefirestore",
    storageBucket: "databasefirebasefirestore.appspot.com",
    messagingSenderId: "407141110375",
    appId: "1:407141110375:web:1b1ecc00c85aabd2713ac2",
    measurementId: "G-Y2QDD0H8NF"
  };
  
  firebase.initializeApp(firebaseConfig)


document.getElementById("data").innerText = Date()

function inicio(){

}//end inicio

function btnCriar(){
  let email = document.getElementById("inEmail").value//"teste@teste.com";
  let password = document.getElementById("inPass").value//"12345678";

  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      console.log("Salvo!")
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });  
  }//end btn salvar

  function btnAtualizar(){
    const user = usuarioAtual();
    let nome = document.getElementById("inNome").value

    user.updateProfile({
      displayName: nome
    }).then(() => {
      console.log("Update successful")
      usuarioAtual();
    }).catch((error) => {
      console.log(error)
    }); 
  }//end btn atualizar

 function btnEntrar(){
  let email = document.getElementById("inEmail").value//"teste@teste.com";
  let password = document.getElementById("inPass").value//"12345678";

  firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
    usuarioAtual();
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  }); 
}//end btn entrar

function btnSair(){
  firebase.auth().signOut().then(() =>{
    console.log("Saiu!")
    document.getElementById("userAtual").innerText = "Entre!"
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
}//end btn sair

function btnRemover(){
  const user = usuarioAtual();

  user.delete().then(() => {
    console.log("Deletado!");
  }).catch((error) => {
    console.log(error);
  });
}//end btn remover

function usuarioAtual(){
  let user = usuarioAtual();
  if (user !== null){ 
    console.log(`user ID: ${user.uid}`);
    console.log(`user email: ${user.email}`);
    console.log(`user nome: ${user.displayName}`);
    document.getElementById("userAtual").innerHTML = `NOME: ${user.displayName}<br> EMAIL: ${user.email}<br> UID: ${user.uid}`
    return user;
  }else{
    console.log("Sem usuario!")
    return "Sem usuario!"
  }
}//end btn usuarioAtual

function btnRecuperar(){

}//end btn recuperar






//===========================================================================================//

//CRIA VALORES

//  var igorNameRef = firebase.database().ref('users/igor/name');
//      igorNameRef.child('first').set('Igor');
//      igorNameRef.child('last').set('Angeli');



// UPDATE DE VALORES, SE NAO EXISTENTES SERAO CRIADOS

// var igoraNameRef = firebase.database().ref('users/igor/name');
//     igoraNameRef.update({ first: 'Igor', last: 'Angeli' });


//POST DE VALORES COM IDs ALEATORIOS

//  var postListRef = firebase.database().ref('posts');
//  var newPostRef = postListRef.push();
//  newPostRef.set({
// 	 // ...
//  });

//REMOVE VALORES

// var igorRef = firebase.database().ref('users/igor/name');
//     igorRef.remove()
//       .then(function() {
//         console.log("Remove succeeded.")
//       })
//       .catch(function(error) {
//         console.log("Remove failed: " + error.message)
//       });


//INCREMENTA VALOR, OU CRIA CASO NAO EXISTA

// var igorRankRef = firebase.database().ref('valores/valor');
//     igorRankRef.transaction(function(valorAtual) {        
//     // console.log(valorNuvem + 1)
//     return valorAtual += 1
// });



//RECUPERA VALOR EM NUVEM

// const dbRef = firebase.database().ref("users/lastId")
//       dbRef.get().then((snapshot) => {
//         if (snapshot.exists()) {
//           console.log(snapshot.val()) //PRINTA OU ENVIA VALOR RECEBIDO
//           // valorRecebido = snapshot.val()
//           if(valorRecebido != null){
//             console.log("Valor obtido",valorRecebido)
//           }
//         } else {
//           console.log("Sem dados")
//         }
//       }).catch((error) => {
//         console.error(error)
//       });


//RECUPERA VALORES E PRINTA INDIVIDUALMENTE      
// firebase.database().ref("lastID").once('value', (snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//       // var childKey = childSnapshot.key
//       // var childData = childSnapshot.val()
//       // console.log(childKey,childData)
//       console.log(childSnapshot.val())
//       // ...
//     });
//   });


//DETECTAR ALTERAÇOES

  // firebase.database().ref("users").on('value', (snapshot) => {
  //       const data = snapshot.val()
  //       console.log(data)
  //       // updateStarCount(postElement, data)
  //       limpaPrint()
  //       valorRecebido = data
  //       printar()
  //     });


  //RECUPERA KEY ID 

  // var KEY = firebase.database().ref().push().key
  // console.log(KEY)

//==================================================================================//






