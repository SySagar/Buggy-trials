import useAppTheme from "./useAppTheme"
import { IChildren } from "./types"
import { ThemeProvider } from "@mui/material"

const AppTheme = ({ children }: IChildren) => {
    const theme = useAppTheme()

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default AppTheme;