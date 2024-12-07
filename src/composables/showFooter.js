import { reactive } from "vue";

const state = reactive({
  IsFooter: false,
});

export const useShowFooter = () => {
  const setShowFooter = (value) => {
    state.IsFooter = value;
  };
  const getShowFooter = () => {
    return state.IsFooter;
  };

  return {
    state,
    setShowFooter,
    getShowFooter,
  };
};
