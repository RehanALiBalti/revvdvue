const { Auth } = require("aws-amplify");

async function getcurrentprofile() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log("mmma", user);
    console.log(user.signInUserSession.idToken.payload);

    const attributes = user.signInUserSession.idToken.payload;
    console.log("attri", attributes);
    const response = { success: 1, result: attributes };

    localStorage.setItem("login", JSON.stringify(true));
    localStorage.setItem("data", JSON.stringify(attributes));

    console.log(response, "response");
    return response;
  } catch (error) {
    const response = { success: 0, error: error.message };
    console.log("Auth Service test22", error.message);
    throw response;
  }
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
// working
function setprofile(data) {
  console.log("before request", data);

  return new Promise((resolve, reject) => {
    try {
      const updatedAttributes = {
        email: data.email,
        phone_number: data.phone,
        // phone_number: data.phone ? data.phone.toString() : "",
        // "custom:phone": data.phone ? data.phone.toString() : "",
        name: data.name,
        nickname: data.name,

        "custom:fullname": data.fullname, // Correctly access fullName property
        // "custom:age": data.age,
        "custom:age": data.age ? data.age.toString() : "", // Ensure it's a string
        // Add other attributes you want to update
      };
      if (data.socialMedia) {
        updatedAttributes.website = data.socialMedia;
      }

      // if (data.image !== "") {
      //   updatedAttributes.picture = data.image;
      // }
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
              const errorString =
                typeof error === "string" ? error : String(error);
              const cleanedErrorMessage = errorString.replace(
                /^InvalidParameterException:\s*/,
                ""
              );
              console.log("ttt", error, typeof error);
              reject(cleanedErrorMessage);
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
// function setprofile2(data) {
//   console.log("before request", data);

//   return new Promise((resolve, reject) => {
//     try {
//       const updatedAttributes = {
//         email: data.email,

//         name: data.companyName,

//         "custom:city": data.city,

//         "custom:companyName": data.companyName,

//         "custom:country": data.country,

//         "custom:emailForCustomer": data.emailForCustomer,

//         "custom:faxCustomer": data.faxCustomer,

//         "custom:interanetPrefix1": data.interanetPrefix1,

//         "custom:interanetPrefix2": data.interanetPrefix2,

//         "custom:interanetPrefix3": data.interanetPrefix3,

//         "custom:mobileCustomer": data.mobileCustomer,

//         "custom:number": data.number,

//         "custom:phoneCustomer": data.phoneCustomer,

//         "custom:prefix1": data.prefix1,
//         "custom:prefix2": data.prefix2,

//         "custom:prefix3": data.prefix3,

//         "custom:street1": data.street1,

//         "custom:street2": data.street2,

//         "custom:zipCode": data.zipCode,

//         // Add other attributes you want to update
//       };

//       console.log("update", updatedAttributes);

//       Auth.currentAuthenticatedUser()
//         .then((user) => {
//           console.log("authenuser", user);
//           console.log(user.signInUserSession.accessToken.jwtToken);

//           Auth.updateUserAttributes(user, updatedAttributes)
//             .then((result) => {
//               resolve(result);
//             })
//             .catch((error) => {
//               reject(error);
//             });
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     } catch (error) {
//       console.error("Error updating user attributes:", error);
//       reject(error);
//     }
//   });
// }

function setprofile2(data) {
  console.log("before request", data);

  return new Promise((resolve, reject) => {
    try {
      const updatedAttributes = {
        email: data.email,

        name: data.companyName,

        "custom:city": data.city,

        "custom:companyName": data.companyName,

        "custom:country": data.country,

        "custom:emailForCustomer": data.emailForCustomer,

        "custom:faxCustomer": data.faxCustomer,

        "custom:mobileCustomer": data.mobileCustomer,

        "custom:number": data.number,

        "custom:phoneCustomer": data.phoneCustomer,

        "custom:street1": data.street1,

        "custom:street2": data.street2,

        "custom:zipCode": data.zipCode,

        // Add other attributes you want to update
      };

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
function register(fullname, name, password, email, check1, check2) {
  console.log(
    "before request",
    fullname,
    name,
    password,
    email,
    check1,
    check2
  );

  return new Promise((resolve, reject) => {
    // Call Auth.signUp
    Auth.signUp({
      username: email,
      password: password,

      attributes: {
        email: email,

        nickname: name,

        "custom:fullname": fullname,
        "custom:check1": check1,
        "custom:check2": check2,

        // "custom:check1": "true",
        // "custom:check2": "true",

        //   'custom:age':age,
        //   'custom:socialMedia':socialMedia,
        // Add other optional attributes as needed
      },
      autoConfirm: true,
      // autoSignIn: {
      //   enabled: true,
      // },
    })
      .then(({ user }) => {
        console.log("Auth Service test11", user);
        // Auth.currentAuthenticatedUser()
        // .then((user) => {
        //   console.log("authenuser", user);
        // })

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
  name,
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
  password,
  role,
  check1,
  check2
) {
  console.log(
    "before request",
    name,
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
    password,
    "here is role",
    role,
    check1,
    check2
  );

  return new Promise((resolve, reject) => {
    // Call Auth.signUp
    Auth.signUp({
      username: email,
      password: password,
      email: email,
      attributes: {
        name: name,
        "custom:companyName": name,
        nickname: name,
        "custom:street1": street,
        "custom:number": mobilePhone,
        "custom:street2": street2,
        "custom:zipCode": zipCode,
        "custom:country": country,
        "custom:interanetPrefix1": intlPrefix1,
        "custom:prefix1": prefix1,
        "custom:phoneCustomer": phone1,
        "custom:interanetPrefix2": intlPrefix2,
        "custom:prefix2": prefix2,
        "custom:faxCustomer": fax,
        "custom:interanetPrefix3": intlPrefix3,
        "custom:city": city,
        "custom:prefix3": prefix3,
        "custom:mobileCustomer": mobilePhone,
        "custom:emailForCustomer": email,
        "custom:dealerPassword": password,
        "custom:check1": check1,
        "custom:check2": check2,
        "custom:Role": role,
      },

      autoConfirm: true,
      // autoSignIn: {
      //   enabled: true,
      // },
    })
      .then(({ user }) => {
        console.log("Auth Service test11", user);

        const response = { success: 1, result: user };
        resolve(response);
      })
      .catch((error) => {
        console.log("Auth Service test33", error);
        console.log("Auth Service test22", error.message);
        const response = { success: 0, error: error.message };
        reject(response);
      });
  });
}
// function register2(
//   name,
//   street,
//   streetNo,
//   street2,
//   zipCode,
//   city,
//   country,
//   intlPrefix1,
//   prefix1,
//   phone1,
//   intlPrefix2,
//   prefix2,
//   fax,
//   intlPrefix3,
//   prefix3,
//   mobilePhone,
//   email,
//   password,
//   role,
//   check1,
//   check2
// ) {
//   console.log(
//     "before request",
//     name,
//     street,
//     streetNo,
//     street2,
//     zipCode,
//     city,
//     country,
//     intlPrefix1,
//     prefix1,
//     phone1,
//     intlPrefix2,
//     prefix2,
//     fax,
//     intlPrefix3,
//     prefix3,
//     mobilePhone,
//     email,
//     password,
//     "here is role",
//     role,
//     check1,
//     check2
//   );

//   return new Promise((resolve, reject) => {
//     const attributes = {
//       name: name,
//       "custom:companyName": name,
//       nickname: name,
//       "custom:street1": street,
//       "custom:number": mobilePhone,
//       "custom:street2": street2,
//       "custom:zipCode": zipCode,
//       "custom:country": country,
//       "custom:interanetPrefix1": intlPrefix1,
//       "custom:prefix1": prefix1,
//       "custom:phoneCustomer": phone1,
//       "custom:interanetPrefix2": intlPrefix2,
//       "custom:prefix2": prefix2,
//       "custom:faxCustomer": fax,
//       "custom:interanetPrefix3": intlPrefix3,
//       "custom:city": city,
//       "custom:prefix3": prefix3,
//       "custom:mobileCustomer": mobilePhone,
//       "custom:emailForCustomer": email,
//       "custom:dealerPassword": password,
//       // "custom:check1": check1,
//       // "custom:check2": check2,
//     };

//     console.log("Attempting to sign up with attributes:", attributes);

//     Auth.signUp({
//       username: email,
//       password: password,
//       attributes: attributes,
//       autoConfirm: true,
//     })
//       .then(({ user }) => {
//         console.log("Auth Service success", user);
//         resolve({ success: 1, result: user });
//       })
//       .catch((error) => {
//         console.error("Auth Service Error:", error);
//         console.log("Error Message:", error.message);

//         // Detect which attribute is causing the issue
//         Object.keys(attributes).forEach((key) => {
//           try {
//             Auth.signUp({
//               username: email,
//               password: password,
//               attributes: { [key]: attributes[key] },
//             });
//             console.log(`✅ Allowed attribute: ${key}`);
//           } catch (err) {
//             console.log(`❌ Unauthorized attribute: ${key}`);
//           }
//         });

//         reject({ success: 0, error: error.message });
//       });
//   });
// }

export default {
  login,
  logout,
  register,
  setprofile,
  setprofile2,
  getcurrentprofile,
  register2,
};
