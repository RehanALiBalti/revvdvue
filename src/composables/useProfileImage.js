import { reactive } from "vue";

const state = reactive({
  profileImage: "/images/Group888.png", // Default image
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
