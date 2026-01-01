import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <html>
      <body>
        <div>
          <div>Navbar of the root</div>
          {children}
        </div>
      </body>
    </html>
  )
}

export default Layout