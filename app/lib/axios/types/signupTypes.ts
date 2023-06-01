export default interface CreateUserData{
	email: string
	password: string
	profile: {
		username: string
		name: string
		githubId: string
	}
}