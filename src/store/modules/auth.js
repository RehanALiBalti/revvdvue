import AuthService from '../services/auth.service';
const state = {
  user: null,
  loggedIn:false,
  msg:""
};


const mutations = {
  setUser(state, user) {
     state.user = user;
  },
    loginSuccess(state, flag,msg) {
      state.loggedIn = flag;
      state.msg=msg
 
    },
    loginFailure(state,flag,msg) {
      state.loggedIn = flag;
      state.msg=msg
 
    },
    logout(state) {
      state.loggedIn = false;
      state.user = null;
    },

};

const actions = {
  async handleSignIn(context,{ email, password }) {
    try {

      const result = await AuthService.login(email,password);
      console.log("after calling input",result)
      
      // Commit mutations or perform other actions if needed
      context.commit('setUser', result);
      context.commit('loginSuccess', true, "User has been registered");

      // Return the result to be accessed in the component
      return result;
    } catch (error) {
      // Handle errors and reject the promise
      context.commit('loginSuccess', false, error);
      return (error);
    }
    
  },
  async handleSignUp(context,{ name,age, password, email, phone,socialMedia }) {
    console.log("yes",context);
    try {

      const result = await AuthService.register(name,age, password, email, phone,socialMedia);
      
      // Commit mutations or perform other actions if needed
      context.commit('setUser', result);
      context.commit('loginSuccess', true, "User has been registered");

      // Return the result to be accessed in the component
      return result;
    } catch (error) {
      // Handle errors and reject the promise
      context.commit('loginSuccess', false, error);
      return (error);
    }
    
  }

      
  };

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};