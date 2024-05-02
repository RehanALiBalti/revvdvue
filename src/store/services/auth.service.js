const { Auth } = require("aws-amplify");

function getcurrentprofile() {
  return new Promise((resolve, reject) => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log("mmma", user);
        console.log(user.signInUserSession.idToken.payload);
        //console.log(user);
        const attributes = user.signInUserSession.idToken.payload;
        console.log("attri", attributes);
        const response = { success: 1, result: attributes };
        localStorage.setItem("login", true);
        localStorage.setItem("data", attributes);

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
// function setprofile(data) {
//   console.log("before request", data);
//   return new Promise((resolve, reject) => {
//     try {
//       console.log("i am resolve");
//       const updatedAttributes = {
//         email: data.email,
//         phone_number: data.phone,
//         name: data.name,
//         website: data.socialMedia,
//         "custom:fullname": data.fullName,
//         "custom:age": data.age,
//         // Add other attributes you want to update
//       };
//       if (data.image != "") {
//         updatedAttributes.picture = data.image;
//       }
//       console.log("update", updatedAttributes);
//       Auth.currentAuthenticatedUser().then((user) => {
//         Auth.updateUserAttributes(user, updatedAttributes).then((result) => {
//           resolve(result);
//         });
//       });
//     } catch (error) {
//       console.log("i am rejexct");
//       reject(data);
//     }
//   });
// }
function setprofile(data) {
  console.log("before request", data);

  return new Promise((resolve, reject) => {
    try {
      const updatedAttributes = {
        email: data.email,
        phone_number: data.phone,
        name: data.name,
        website: data.socialMedia,
        "custom:fullname": data.fullname, // Correctly access fullName property
        "custom:age": data.age,
        // Add other attributes you want to update
      };
      if (data.image !== "") {
        updatedAttributes.picture = data.image;
      }
      console.log("update", updatedAttributes);

      Auth.currentAuthenticatedUser()
        .then((user) => {
          console.log("authenuser", user);
          console.log(user.signInUserSession.accessToken.jwtToken);

          Auth.updateUserAttributes(user, updatedAttributes)
            .then((result) => {
              resolve(result);
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      console.error("Error updating user attributes:", error);
      reject(error);
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

// function register(name, age, password, email, phone, socialMedia) {
//   console.log("before request", name, age, password, email, phone, socialMedia);

//   return new Promise((resolve, reject) => {
//     // Call Auth.signUp
//     Auth.signUp({
//       username: email,
//       password: password,
//       attributes: {
//         email: email,
//         phone_number: "+123456789",
//         name: name,
//         website: socialMedia,
//         //   'custom:fullname':name,
//         //   'custom:age':age,
//         //   'custom:socialMedia':socialMedia,
//         // Add other optional attributes as needed
//       },
//       autoConfirm: true,
//       autoSignIn: {
//         enabled: true,
//       },
//     })
//       .then(({ user }) => {
//         console.log("Auth Service test11", user);

//         const response = { success: 1, result: user };
//         resolve(response);
//       })
//       .catch((error) => {
//         console.log("Auth Service test22", error.message);
//         const response = { success: 0, error: error.message };
//         reject(response);
//       });
//   });
// }
function register(name, password, email) {
  console.log("before request", name, password, email);

  return new Promise((resolve, reject) => {
    // Call Auth.signUp
    Auth.signUp({
      username: email,
      password: password,

      attributes: {
        email: email,

        name: name,

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

function register2(
  companyName,
  street,
  streetNo,
  street2,
  zipCode,
  city,
  country,
  intlPrefix1,
  prefix1,
  phone1,
  intlPrefix2,
  prefix2,
  fax,
  intlPrefix3,
  prefix3,
  mobilePhone,
  email,
  password
) {
  console.log(
    "before request",
    companyName,
    street,
    streetNo,
    street2,
    zipCode,
    city,
    country,
    intlPrefix1,
    prefix1,
    phone1,
    intlPrefix2,
    prefix2,
    fax,
    intlPrefix3,
    prefix3,
    mobilePhone,
    email,
    password
  );

  return new Promise((resolve, reject) => {
    // Call Auth.signUp
    Auth.signUp({
      username: email,
      password: password,

      email: email,
      companyName: companyName,
      street1: streetNo,
      number: mobilePhone,
      street2: street2,
      zipCode: zipCode,
      country: country,
      interanetPrefix1: intlPrefix1,
      prefix1: prefix1,
      phoneCustomer: phone1,
      interanetPrefix2: intlPrefix2,
      prefix2: prefix2,
      faxCustomer: fax,
      interanetPrefix3: intlPrefix3,
      city: city,
      prefix3: prefix3,
      mobileCustomer: mobilePhone,
      emailForCustomer: email,
      dealerPassword: password,

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
  register2,
};
