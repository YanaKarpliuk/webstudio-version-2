import { NavLink, Link } from 'react-router-dom';
import { BsPhone, BsEnvelope } from 'react-icons/bs';
import { GrMenu } from 'react-icons/gr';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

export default function Header() {
  const [menuIsOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  function openMenu() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="header">
      <div className="container header-flex">
        <Link to="/" className="logo">
          <span className="logo__text logo__text--blue">Web</span>
          <span className="logo__text logo__text--black">Studio</span>
        </Link>
        <button type="button" className="menu-open-button" onClick={openMenu}>
          <GrMenu className="icon-menu" />
        </button>
        <nav className="menu-nav">
          <ul className="menu-nav__list">
            <li className="menu-nav__item">
              <NavLink
                to="/"
                end
                className={navData =>
                  navData.isActive
                    ? 'menu-nav__link--active menu-nav__link'
                    : 'menu-nav__link'
                }
              >
                Studio
              </NavLink>
            </li>
            <li className="menu-nav__item">
              <NavLink
                to="/portfolio"
                className={navData =>
                  navData.isActive
                    ? 'menu-nav__link--active menu-nav__link'
                    : 'menu-nav__link'
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className="menu-nav__item">
              <NavLink
                to="contacts"
                className={navData =>
                  navData.isActive
                    ? 'menu-nav__link--active menu-nav__link'
                    : 'menu-nav__link'
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul className="header-contact-container">
          <li className="header-contact">
            <BsEnvelope className="header-contact__envelope-icon" />
            <span>info@devstudio.com</span>.
          </li>
          <li className="header-contact">
            <BsPhone className="header-contact__smartphone-icon" />
            <span>+38 096 111 11 11</span>
          </li>
        </ul>
      </div>

      <CSSTransition
        in={menuIsOpen}
        nodeRef={nodeRef}
        timeout={250}
        classNames="mob-menu"
        unmountOnExit
      >
        <MobileMenu nodeRef={nodeRef} closeMenu={closeMenu} />
      </CSSTransition>
    </header>
  );
}
