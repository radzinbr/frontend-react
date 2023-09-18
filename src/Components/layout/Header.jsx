import "./header.css"
import "../ui/button.css"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="top">
      <h1>logo</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contatos">Contatos</NavLink></li>
          <li><NavLink to="/about us ">sobre nós</NavLink></li>
          <li><button className="primary">login</button></li>
          <li> <button className="secondary">cadastro</button></li>

        </ul>
      </nav>
    </div>
  )
}

export default Header
///rafce