import { Stack } from "@mui/material"
import { motion, Variants } from "framer-motion"
import { IChildren } from "./types/pageTypes"

const modes : Variants = {
	hidden: {
		x: 0,
		y: 100,
		opacity: 0
	},
	enter: {
		x: 0,
		y: 0,
		opacity: 1
	},
	exit: {
		x: 0,
		y: 100,
		opacity: 0
	}
}

const SinglePage = ({ children }: IChildren) : JSX.Element => {
	return (
		<Stack
			component={motion.main}
			variants={modes}
			initial='hidden'
			animate='enter'
			exit='exit'
			transition={{
				ease: 'linear'			
			}}
			flexGrow={1}
		>
			{ children }
		</Stack>
	)
}

export default SinglePage