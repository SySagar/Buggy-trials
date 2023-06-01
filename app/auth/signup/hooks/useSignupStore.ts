import { create } from 'zustand'
import {SignupStore,Step} from '../types/signupTypes'

const steps: Step[] = [
	{
		label: 'Create account',
		isComplete: false
	},
	{
		label: 'Complete your profile',
		isComplete: false
	},
	{
		label: 'Next steps',
		isComplete: false
	},
	
]


const useSignUpStore = create<SignupStore>()((set, get) => ({
	activeStep: 0,
	setActiveStep: (idx) => {
		if(get().activeStep === 0 && idx === -1) return
		if(get().activeStep === steps.length - 1 && idx === 1) return
		set((state) => ({ activeStep: state.activeStep + idx }))
	},
	steps: steps,
	user: {
		email: '',
		password: ''
	},
	profile: {
		name: '',
		username: '',
		githubId: ''
	},
	setUser: (u) => set({ user: u }),
	setProfile: (p) => set({ profile: p })
}))

export default useSignUpStore