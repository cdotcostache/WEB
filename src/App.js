import React, { Fragment } from 'react'
import GlobalStyle from './globalStyles'
import routes from './routes/routes'

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      {React.createElement(routes)}
    </Fragment>
  )
}

export default App
