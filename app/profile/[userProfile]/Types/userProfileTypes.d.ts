export interface userProfileTypes {
  username: string;
}

export interface userTypes {
  user: userProfileTypes;
  setUser: (u: userProfileTypes) => void;
}
