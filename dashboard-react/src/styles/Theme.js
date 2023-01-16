import { colors} from "./Colors";

export const palette = {
    primary: {
        main: colors.primary,
        dark: colors.primary_dark
    },
    secondary:{
        main: colors.secondary,
        dark: colors.secondary_dark
    }
};

const appTheme ={
    components: {
        MuiAppBar:{
            styleOverrides: {
                root: {
                    boxShadow: 'none'
                }
            }
        }
    },
    shape:{
        searchbar:{
            borderRadius:50
        }
    }
}

export default appTheme;