import { reactive } from "vue";

const state = reactive({
  isLogin: JSON.parse(localStorage.getItem("login")) || "false",
});

export const useIslogin = () => {
  const setIslogin = (value) => {
    state.isLogin = value;
  };
  const gettIslogin = () => {
    return state.isLogin;
  };

  return {
    state,
    setIslogin,
    gettIslogin,
  };
};
