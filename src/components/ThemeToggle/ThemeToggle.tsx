import React from 'react'
// @ts-ignore
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default function ThemeToggle() {
  return(
    <ThemeToggler>
      {({ theme, toggleTheme }:{theme: any, toggleTheme:any}) => {
        if (theme == null) return null
        return(
          <label>
            {/* @todo switch this to a toggle */}
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            <span></span>
          </label>
        )}
      }
    </ThemeToggler>
  )
}