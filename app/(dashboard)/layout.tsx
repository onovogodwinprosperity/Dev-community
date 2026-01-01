import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <html>
      <body>
        <div>
          <div>Navbar of dashboard analytics and users</div>
          {children}
        </div>
      </body>
    </html>
  )
}

export default Layout