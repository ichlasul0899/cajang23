import React, {useContext} from 'react'
import { ThemeContext, themes } from '../../theme-context'

const About = () => {
  const [theme,setTheme] = useContext(ThemeContext);
  const handleClick = () => {
    console.log(theme)
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  return (
    <div>
      <h3 style={{color: theme.background }}>About</h3>
      <p>Buat Website mirip sanber code</p>
      <button onClick={handleClick}>Change Theme</button>
    </div>
  )
}

export default About
