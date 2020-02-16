import React from 'react'
import themes from './themes';

const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
  changeTheme: () => {},
})

export default ThemeContext