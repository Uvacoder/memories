import { useUser } from "@auth0/nextjs-auth0"
import React from "react"

export default function Navbar() {
  const { user, error, isLoading } = useUser()

  React.useEffect(() => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0)

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          const target = el.dataset.target
          const $target = document.getElementById(target)
          el.classList.toggle("is-active")
          $target.classList.toggle("is-active")
        })
      })
    }
  }, [])
  return (
    <>
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a href="/" className="navbar-item nounderline">
            <span className="baloo">Memory Log</span>
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              {!user && (
                <a href="/api/auth/login" className="button">
                  Login
                </a>
              )}
              {user && (
                <>
                  <span>Welcome, {user.name}!</span>
                  <a href="/api/auth/logout" className="button btnSpaceLeft">
                    Logout
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
