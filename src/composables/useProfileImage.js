import { reactive } from "vue";

const state = reactive({
  profileImage:
    "https://clownfish-app-quehu.ondigitalocean.app/users/default.jpg", // Default image
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
