import React from 'react'
// @ts-ignore
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Switch } from '../ui/switch'
export default function ThemeToggle() {
  return(
    <ThemeToggler>
      {({ theme, toggleTheme }:{theme: any, toggleTheme:any}) => {
        if (theme == null) return null
        return(
          <>
          <Switch
                      checked={theme === 'dark'}
                      onCheckedChange={e => toggleTheme(e.valueOf() ? 'dark' : 'light')}
 
                    />

          </>
        )}
      }
    </ThemeToggler>
  )
}