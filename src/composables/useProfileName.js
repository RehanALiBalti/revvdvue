import { reactive } from "vue";

const state = reactive({
  name: "", // Default name
});

export const useProfileName = () => {
  const setName = (newName) => {
    console.log("in state", newName);
    state.name = newName;
    console.log("state name", state.name);
  };

  return {
    state,
    setName,
  };
};
