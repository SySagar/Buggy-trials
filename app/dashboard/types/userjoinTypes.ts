export default interface UserJoin {
  user: {
    roomdID: string;
    username: string;
  };
  setUser: (u: any) => void;
}
