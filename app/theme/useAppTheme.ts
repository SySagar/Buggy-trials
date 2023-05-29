import { ThemeOptions, createTheme, responsiveFontSizes } from '@mui/material'
import typographyOptions from './options/typography'
import paletteOptions from './options/palette'

const obj = {
	MuiButton: {
		styleOverrides: {
			root: {
				width: 'fit-content'
			}
		}
	}
}

const useAppTheme = () => {
	const themeOptions: ThemeOptions = {
		typography: typographyOptions,
		palette: paletteOptions,
	}

	const theme = createTheme(themeOptions)

	return responsiveFontSizes(theme)
}

export default useAppTheme