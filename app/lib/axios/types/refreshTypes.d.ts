export interface RefreshToken {
    refreshToken: string,
    setRefreshToken: (token: string) => void,
    getRefreshToken: () => string
}
