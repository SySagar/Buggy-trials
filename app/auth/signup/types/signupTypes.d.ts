export interface Step {
  label: string;
  isComplete: boolean;
}

export interface User {
  email: string;
  password: string;
}

export interface Profile {
  name: string;
  username: string;
  githubId: string;
}

export interface SignupStore {
  activeStep: number;
  setActiveStep: (by: number) => void;
  steps: Step[];
  user: User | undefined;
  profile: Profile;
  setUser: (u: User) => void;
  setProfile: (p: Profile) => void;
}
