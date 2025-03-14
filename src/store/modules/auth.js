import AuthService from "../services/auth.service";
const state = {
  user: null,
  loggedIn: false,
  msg: "",
  email: "",
  name: "",
  role: null,
  id: "",
};

const mutations = {
  // setUser(state, user) {
  //   state.user = user;
  // },
  loginSuccess(state, flag, msg) {
    state.loggedIn = flag;
    state.msg = msg;
  },
  loginFailure(state, flag, msg) {
    state.loggedIn = flag;
    state.msg = msg;
  },
  logout(state) {
    state.loggedIn = false;
    state.user = null;
  },
  setUser(state, { email, name, role, id }, user) {
    state.email = email;
    state.name = name;
    state.role = role;
    state.user = user;
    state.id = id;
  },
};

const actions = {
  async handleSignIn(context, { email, password }) {
    try {
      const result = await AuthService.login(email, password);
      // console.log("after calling input", result);

      // Commit mutations or perform other actions if needed
      context.commit("setUser", result);
      context.commit("loginSuccess", true, "User has been registered");

      // Return the result to be accessed in the component
      return result;
    } catch (error) {
      // Handle errors and reject the promise
      context.commit("loginSuccess", false, error);
      return error;
    }
  },
  async getprofiledata(context) {
    try {
      const result = await AuthService.getcurrentprofile(); // Assuming getcurrentprofile returns a promise
      console.log("I am called on auth", result);
      context.commit("setUser", result);
      return result;
    } catch (error) {
      // Handle errors and reject the promise
      console.error("Error fetching profile data:", error);
      throw error;
    }
  },
  async handleProfile(
    context,
    { fullname, name, nickname, email, age, phone, socialMedia, image }
  ) {
    const data = {
      fullname,
      name,
      nickname,
      email,
      age,
      phone,
      socialMedia,
      image,
    };
    console.log("handle profile s", data);

    const result = await AuthService.setprofile(data);

    return result;
  },
  // async handleProfile2(
  //   context,
  //   {
  //     city,
  //     companyName,
  //     country,
  //     emailForCustomer,
  //     faxCustomer,
  //     interanetPrefix1,
  //     interanetPrefix2,
  //     interanetPrefix3,
  //     mobileCustomer,
  //     number,
  //     phoneCustomer,
  //     prefix1,
  //     prefix2,
  //     prefix3,
  //     street1,
  //     street2,
  //     zipCode,
  //     email,
  //   }
  // ) {
  //   console.log("in handle profile");
  //   const data = {
  //     city,
  //     companyName,
  //     country,
  //     emailForCustomer,
  //     faxCustomer,
  //     interanetPrefix1,
  //     interanetPrefix2,
  //     interanetPrefix3,
  //     mobileCustomer,
  //     number,
  //     phoneCustomer,
  //     prefix1,
  //     prefix2,
  //     prefix3,
  //     street1,
  //     street2,
  //     zipCode,
  //     email,
  //   };
  //   console.log("handle profile");
  //   const result = await AuthService.setprofile2(data);

  //   return result;
  // },
  async handleProfile2(
    context,
    {
      city,
      companyName,
      country,
      emailForCustomer,
      faxCustomer,
      // interanetPrefix1,
      // interanetPrefix2,
      // interanetPrefix3,
      mobileCustomer,
      number,
      phoneCustomer,
      // prefix1,
      // prefix2,
      // prefix3,
      street1,
      street2,
      zipCode,
      email,
    }
  ) {
    console.log("in handle profile");
    const data = {
      city,
      companyName,
      country,
      emailForCustomer,
      faxCustomer,

      mobileCustomer,
      number,
      phoneCustomer,

      street1,
      street2,
      zipCode,
      email,
    };
    console.log("handle profile");
    const result = await AuthService.setprofile2(data);

    return result;
  },
  async handleSignUp(
    context,
    // { name, age, password, email, phone, socialMedia }
    { fullname, nickname, password, email, check1, check2 }
  ) {
    console.log("yes", context);
    try {
      const result1 = await AuthService.register(
        fullname,
        nickname,
        password,
        email,
        check1,
        check2
      );
      console.log("usersignup", result1);
      const result = await AuthService.login(email, password);
      // Commit mutations or perform other actions if needed
      context.commit("setUser", result);
      context.commit("loginSuccess", true, "User has been registered");

      // Return the result to be accessed in the component
      return result;
    } catch (error) {
      // Handle errors and reject the promise
      context.commit("loginSuccess", false, error);
      return error;
    }
  },
  async handleSignUp2(
    context,
    {
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
      check2,
    }
  ) {
    // console.log("yes", context);
    try {
      const result1 = await AuthService.register2(
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
      );
      console.log("singup delear object", result1);
      const result = await AuthService.login(email, password);
      // Commit mutations or perform other actions if needed
      context.commit("setUser", result);
      // context.commit("loginSuccess", true, "User has been registered");

      // Return the result to be accessed in the component
      return result;
    } catch (error) {
      // Handle errors and reject the promise
      context.commit("loginSuccess", false, error);
      return error;
    }
  },

  // signup({ commit }) {
  //   // For demo purposes, assign dummy values upon signup
  //   const email = "test@example.com";
  //   const name = "Test User";
  //   const role = "user";

  //   // Commit the setUser mutation with dummy values
  //   commit("setUser", { email, name, role });
  // },
  async signup(context, { email, name, role }) {
    try {
      // Perform signup logic here, such as making an API request
      // For now, let's assume a successful signup and commit the mutation

      // For demo purposes, we'll commit the setUser mutation with the provided email, name, and role
      context.commit("setUser", { email, name, role });

      // You can perform additional actions here, such as redirecting the user or showing a success message
      console.log("successfull", email, name, role);
      // Return a success message or any other data if needed
      return { success: true, message: "Signup successful" };
    } catch (error) {
      // Handle errors and reject the promise
      console.error("Error during signup:", error);
      throw error;
    }
  },
  logout({ commit }) {
    // Perform logout logic (e.g., clearing local storage)
    commit("logout");
  },
};

const getters = {
  userEmail: (state) => state.email,
  userName: (state) => state.name,
  userRole: (state) => state.role,
  userId: (state) => state.id,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
