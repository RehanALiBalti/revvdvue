const { Auth } = require("aws-amplify");

function getcurrentprofile() {
  return new Promise((resolve, reject) => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log("mmma");
        //console.log(user);
        const { attributes } = user;
        console.log("attri", attributes);
        const response = { success: 1, result: attributes };
        console.log(response, "response");
        resolve(response);
      })
      .catch((error) => {
        const response = { success: 0, error: error.message };
        console.log("Auth Service test22", error.message);
        reject(response);
      });
  });
}
function setprofile(data) {
  console.log("before request", data);
  return new Promise((resolve, reject) => {
    try {
      console.log("i am resolve");
      const updatedAttributes = {
        email: data.email,
        phone_number: data.phone,
        name: data.name,
        website: data.socialMedia,
        'custom:fullname': data.name,
        'custom:age': data.age,
        // Add other attributes you want to update
      };
      console.log("update",updatedAttributes);
      Auth.currentAuthenticatedUser()
      .then((user) => {
        Auth.updateUserAttributes(user, updatedAttributes).then(result=>{
          resolve(result);
        })
      })
     
     
      
    } catch (error) {
      console.log("i am rejexct");
      reject(data)
      
    }
    
  });
}
function login(username, password) {
  console.log("before request", password, username);
  return new Promise((resolve, reject) => {
    // Call Auth.signUp
    Auth.signIn(username, password)
      .then((user) => {
        console.log(
          "Auth Service test11",
          user,
          user.CognitoUser,
          user.attributes
        );
        const username = user.username;
        const userDataKey = user.userDataKey;
        const signInUserSession = user.signInUserSession;
        const userAttributes = user.attributes;
        const email = userAttributes.email;
        const sub = userAttributes.sub; // User ID

        const muser = {
          email,
          sub,
          username,
          userDataKey,
          signInUserSession,
          userAttributes,
        };

        const response = { success: 1, result: muser };
        resolve(response);
      })
      .catch((error) => {
        const response = { success: 0, error: error.message };
        console.log("Auth Service test22", error.message);
        reject(response);
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
        phone_number: "+123456789",
        name: name,
        website: socialMedia,
        //   'custom:fullname':name,
        //   'custom:age':age,
        //   'custom:socialMedia':socialMedia,
        // Add other optional attributes as needed
      },
      autoConfirm: true,
      autoSignIn: {
        enabled: true,
      },
    })
      .then(({ user }) => {
        console.log("Auth Service test11", user);

        const response = { success: 1, result: user };
        resolve(response);
      })
      .catch((error) => {
        console.log("Auth Service test22", error.message);
        const response = { success: 0, error: error.message };
        reject(response);
      });
  });
}

export default {
  login,
  logout,
  register,
  setprofile,
  getcurrentprofile,
};
