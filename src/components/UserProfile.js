import { reactive } from "vue";

const state = reactive({
  profileImage: "../assets/images/prof.png", // Default image
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
