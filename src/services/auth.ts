const isBrowser = typeof window !== `undefined`

const getUser = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {}

const setUser = (user: { name?: string; legalName?: string; email?: string }) => (window.localStorage.gatsbyUser = JSON.stringify(user))

// @ts-ignore
export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false

  if (username === `gatsby` && password === `demo`) {
    console.log(`Credentials match! Setting the active user.`)
    return setUser({
      name: `Jim`,
      legalName: `James K. User`,
      email: `jim@example.org`,
    })
  }

  return false
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user.email
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = (callback: () => void) => {
  if (!isBrowser) return

  console.log(`Ensuring the \`gatsbyUser\` property exists.`)
  setUser({})
  callback()
}