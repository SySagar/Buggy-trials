import { create } from "zustand";
import UserJoin from "dashboard/types/userjoinTypes";

const useUserJoin = create<UserJoin>()((set, get) => ({
  user: {
    roomdID: "",
    username: "",
  },
  setUser: (u: any) => set({ user: u }),
}));

export default useUserJoin;
