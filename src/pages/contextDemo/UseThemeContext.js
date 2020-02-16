import React, { useState, useContext } from 'react'
import logo from '../../logo.svg'
import '../../App.css'
import Button from '@material-ui/core/Button'

import themes from './themes'
import ThemeContext from './theme-context'
import ThemedBar from './ThemedBar'

const MainBar = () => {
  console.log('render mainBar')
  const {theme, changeTheme} = useContext(ThemeContext)

  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React {theme.name}</h1>
        <div>
          <Button variant="contained" onClick={() => {changeTheme(themes.light)}}>浅色主题</Button>
          <Button variant="contained" color="primary" onClick={() => {changeTheme(themes.dark)}}>
            深色主题
          </Button>
        </div>
      </header>
    </React.Fragment>
  )
}

// 使用 ThemeProvider 来管理状态，避免 UseThemeContext 的重复渲染
function ThemeProvider(props) {
  const [theme, setTheme] = useState(themes.light)
  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark: themes.light)
  }
  const changeTheme = theme => {
    setTheme(theme)
  }
  console.log("render ThemeProvider");
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default function UseThemeContext() {
  console.log("render UseThemeContext");
  return (
    <ThemeProvider>
      <div className="App">
        <MainBar />
        <ThemedBar />
      </div>
    </ThemeProvider>
  );
}
