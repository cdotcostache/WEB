import React, { Fragment } from 'react'
import GlobalStyle from './styles/globalStyles'
import routes from './routes/routes'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from './styles/themes'

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        {React.createElement(routes)}
      </ThemeProvider>
    </Fragment>
  )
}

export default App
