export default interface CreateUserData{
	userEmail: string
	password: string
	profile: {
		username: string
		name: string
		githubId: string
	}
}