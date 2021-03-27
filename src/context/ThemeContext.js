import React, { createContext, useState } from 'react'

const ThemeContext = createContext()
const { Provider, Consumer } = ThemeContext

const ThemeProvider = ({children}) => {
  const [ darkMode, setDarkMode ] = useState(false)
  return (
    <Provider
      value= {{
        darkMode, setDarkMode
      }}
    >
      {children}
    </Provider>
  )
}
export { ThemeProvider, Consumer as ThemeConsumer, ThemeContext}