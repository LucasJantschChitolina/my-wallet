import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes'

import dark from './styles/Themes/dark'
import light from './styles/Themes/light'

const App: React.FC = () =>{
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    )
}

export default App;