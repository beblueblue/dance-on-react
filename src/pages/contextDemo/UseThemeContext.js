import React, { useState } from 'react'
import logo from '../../logo.svg'
import '../../App.css'
import Button from '@material-ui/core/Button'

import themes from './themes'
import ThemeContext from './theme-context'
import ThemedBar from './ThemedBar'

export default function UseThemeContext() {
  const [theme, setTheme] = useState(themes.light)
  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark: themes.light)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React {theme.name}</h1>
          <div>
            <Button variant="contained" onClick={() => setTheme(themes.light)}>浅色主题</Button>
            <Button variant="contained" color="primary" onClick={() => setTheme(themes.dark)}>
              深色主题
            </Button>
          </div>
        </header>
        <ThemedBar />
      </div>
    </ThemeContext.Provider>
  );
}