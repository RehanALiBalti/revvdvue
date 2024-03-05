const { Auth } = require('aws-amplify');


function login(username,password) {
    console.log("before request",password, username);
    return new Promise((resolve, reject) => {
        // Call Auth.signUp
        Auth.signIn(username, password)
          .then(( user ) => {
            console.log("Auth Service test11", user,user.CognitoUser,user.attributes);
            const username=user.username;
            const userAttributes = user.attributes;
            const email = userAttributes.email;
            const sub = userAttributes.sub; // User ID
            
            const muser={
                email:email,
                sub:sub,
                username:username,
            }
            resolve(muser);
          })
          .catch((error) => {
            console.log("Auth Service test22", error.message);
            reject(error.message);
          });
      });   
  }
  
  function logout() {
    // Implementation for logout, if needed
  }
  
  function register(name, age, password, email, phone, socialMedia) {
    console.log("before request", name, age, password, email, phone, socialMedia);
  
    return new Promise((resolve, reject) => {
      // Call Auth.signUp
      Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          phone_number:"+123456789",
          name:name,
          website:socialMedia
        //   'custom:fullname':name,
        //   'custom:age':age,
        //   'custom:socialMedia':socialMedia,
          // Add other optional attributes as needed
        },
        autoSignIn: {
          enabled: true,
        },
      })
        .then(({ user }) => {
          console.log("Auth Service test11", user);
          resolve(user);
        })
        .catch((error) => {
            console.log("Auth Service test22", error.message);
            reject(error.message);
        });
    });
  }
  
  
  
  export default {
    login,
    logout,
    register,
  };
  