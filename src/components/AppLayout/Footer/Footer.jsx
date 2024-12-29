import { NavLink } from "react-router-dom"
import "./Footer.css"

const Footer = () => {

  return (
    <footer>
      <section className="footer-section">
        <div>
          <p className="copy">copyright @ 2024. All Right Reserved <NavLink to={"/"} target="_top" className="link">React Query</NavLink></p>
        </div>
        <ul className="footer-index">
          <li>
            <NavLink to={"/"} target="_top">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/fetch-rq"} target="_top">
              FetchRQ
            </NavLink>
          </li>
          <li>
            <NavLink to={"/fetch-old"} target="_top">
              FetchOld
            </NavLink>
          </li>
          <li>
            <NavLink to={"/infinite-scroll"} target="_top">
              Infinite Scroll
            </NavLink>
          </li>
          <li>
            <NavLink to={"https://github.com/Lucky-Bhure/React-Query.git"} target="_blank">
              Source Code
            </NavLink>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
