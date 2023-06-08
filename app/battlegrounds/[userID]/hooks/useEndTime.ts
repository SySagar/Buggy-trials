import { create } from "zustand";

const useEndTime = create((set) => ({
  active: false,
  battleEnded: () => set({ active: true }),
}));

export default useEndTime;
