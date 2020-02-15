import React from 'react'
import ThemeContext from './theme-context'
import Button from '@material-ui/core/Button'

const ThemedBar = () => {
  return (
    <ThemeContext.Consumer>
      {
        ({theme, toggleTheme}) => {
          return (
            <React.Fragment>
              <div style={{
                marginTop: '20px',
                background: theme.bgColor,
                color: theme.color,
              }}>
                { theme.name }主题色块
              </div>
              <Button variant="contained" onClick={toggleTheme} color={theme.btnType}>切换主题</Button>
            </React.Fragment>
          )
        }
      }
    </ThemeContext.Consumer>
  )
}

export default ThemedBar