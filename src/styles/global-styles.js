import { createGlobalStyle, css } from 'style-component'

export const GlobalStyles = createGlobalStyle `

    *{
        margin:0;
        padding:0;
    }
    body{
        ${({theme}) => css `
            background: ${theme.colors.mainBg};
        
        `}
    }

`;