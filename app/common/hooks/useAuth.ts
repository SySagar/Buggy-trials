import { create } from 'zustand'

type UserSession = {
    currentUser: any,
    setCurrentUser: (user: any) => void
}

const useAuth = create<UserSession>()((set) => ({
	currentUser: null,
	setCurrentUser: (user) => set({ currentUser: user })
}))

export default useAuth;