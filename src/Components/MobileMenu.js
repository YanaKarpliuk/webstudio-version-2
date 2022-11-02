import { GrClose } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

export default function MobileMenu(props) {
  return (
    <div className="mob-menu" ref={props.nodeRef}>
      <div className="mob-container">
        <div>
          <GrClose className="menu-close-button" onClick={props.closeMenu} />
          <ul className="mob-menu__list">
            <li className="mob-menu__item">
              <NavLink
                to="/"
                end
                className={navData =>
                  navData.isActive
                    ? 'mob-menu__link--active mob-menu__link'
                    : 'mob-menu__link'
                }
              >
                Studio
              </NavLink>
            </li>
            <li className="mob-menu__item">
              <NavLink
                to="/portfolio"
                className={navData =>
                  navData.isActive
                    ? 'mob-menu__link--active mob-menu__link'
                    : 'mob-menu__link'
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className="mob-menu__item">
              <NavLink
                to="contacts"
                className={navData =>
                  navData.isActive
                    ? 'mob-menu__link--active mob-menu__link'
                    : 'mob-menu__link'
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="mob-menu-contact-list">
            <li className="mob-menu-contact mob-menu-tel">+38 096 111 11 11</li>
            <li className="mob-menu-contact mob-menu-mail">
              info@devstudio.com
            </li>
          </ul>
          <ul className="mob-sm-list">
            <li className="mob-sm-list__item">
              <a
                href="https://telegram.org/"
                target="_blank"
                className="mob-sm-list__link"
              >
                Telegram
              </a>
            </li>
            <li className="mob-sm-list__item">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="mob-sm-list__link"
              >
                Facebook
              </a>
            </li>
            <li className="mob-sm-list__item">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="mob-sm-list__link"
              >
                Instagram
              </a>
            </li>
            <li className="mob-sm-list__item">
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                className="mob-sm-list__link"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
