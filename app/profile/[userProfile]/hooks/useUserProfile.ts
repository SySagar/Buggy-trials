import { create } from "zustand";
import { userProfileTypes, userTypes } from "../Types/userProfileTypes";

const useUserProfile = create<userTypes>((set) => ({
  user: {
    username: "",
  },
  setUser: (u: userProfileTypes) => set({ user: u }),
}));

export default useUserProfile;
