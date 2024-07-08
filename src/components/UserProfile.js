import { reactive } from "vue";

const state = reactive({
  profileImage: "../assets/images/Group888.png", // Default image
});

export const useProfileImage = () => {
  const setProfileImage = (newSrc) => {
    state.profileImage = newSrc;
  };

  return {
    state,
    setProfileImage,
  };
};
