import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="flex gap-4 p-4 font-extralight">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'underline text-xl' : 'text-xl hover:underline'}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/event"
            className={({ isActive }) => isActive ? 'underline text-xl' : 'text-xl hover:underline'}
          >
            EVENT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) => isActive ? 'underline text-xl' : 'text-xl hover:underline'}
          >
            SHOP
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => isActive ? 'underline text-xl' : 'text-xl hover:underline'}
          >
            LOGIN
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => isActive ? 'underline text-xl' : 'text-xl hover:underline'}
          >
            CART(0)
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;