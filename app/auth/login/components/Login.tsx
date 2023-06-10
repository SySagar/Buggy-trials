'use client'
import LoginForm from "./LoginForm"
import { Container, Stack} from "@mui/material"
import { NextPage } from "next"
import SinglePage from "@layout/SinglePage"

const Login: NextPage = () => {
	return (
		<SinglePage>
			<Stack
				flexGrow={1}
				justifyContent='center'
			>
				<Container
					
					component={Stack}
					maxWidth='sm'
					padding='32px'
					justifyContent='center'
				>
					<LoginForm />
				</Container>
			</Stack>
		</SinglePage>
	)
}

export default Login