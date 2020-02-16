import React, { useContext } from 'react'
import ThemeContext from './theme-context'
import Button from '@material-ui/core/Button'

const ThemedBar = () => {
  console.log('render ThemedBar')
  const {theme, toggleTheme} = useContext(ThemeContext)
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

export default ThemedBar