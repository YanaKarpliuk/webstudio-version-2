import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

export default function Footer() {
  const [subscribe, setSubscribe] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSubscribe(prev => !prev);
  }
  return (
    <footer className="footer">
      <div className="container footer-flex">
        <div className="footer-info-sm">
          <div className="footer-info">
            <Link to="/" className="logo">
              <span className="logo__text logo__text--blue">Web</span>
              <span className="logo__text logo__text--white">Studio</span>
            </Link>
            <address className="footer-info__city">
              26 Svobody avenue Kyiv 12345
            </address>
            <address className="footer-info__contact">
              <p className="footer-info__link">info@devstudio.com</p>
              <p className="footer-info__link">+38 096 111 11 11</p>
            </address>
          </div>
          <div className="footer-sm">
            <p className="footer-sm__title">Find us here</p>
            <ul className="footer-sm__list">
              <li className="footer-sm__item">
                <a
                  href="https://telegram.org/"
                  target="_blank"
                  className="footer-sm__link"
                >
                  <FaTelegramPlane className="footer-sm__icon" />
                </a>
              </li>
              <li className="footer-sm__item">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="footer-sm__link"
                >
                  <FaFacebookF className="footer-sm__icon" />
                </a>
              </li>
              <li className="footer-sm__item">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="footer-sm__link"
                >
                  <FaInstagram className="footer-sm__icon" />
                </a>
              </li>
              <li className="footer-sm__item">
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  className="footer-sm__link"
                >
                  <FaLinkedin className="footer-sm__icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-newsletter">
          <label htmlFor="newsletter-input-email" className="footer-newsletter__title">
            Join our newsletter
          </label>
          <div className="newsletter">
            {subscribe ? (
              <p className='subscribeLetter'>Thank you!</p>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  className="newsletter-form__input"
                  id="newsletter-input-email"
                  placeholder="E-mail"
                  required
                />
                <button className="btn modal-btn">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
