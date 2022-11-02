import { BsFillPersonFill } from 'react-icons/bs';
import { BsPhone, BsEnvelope } from 'react-icons/bs';

export default function Contacts() {
  return (
    <section className="contact-form">
      <div className="container">
        <div className="contact-form-content">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-text">Please fill out the form below to contact us</p>
        <form className="modal-form">
          <div className="form-field">
            <label htmlFor="inputName" className="modal-label">
              Name
            </label>
            <div className="input-text-icon">
              <input
                type="text"
                name="inputName"
                id="inputName"
                className="modal-input"
                required
              />
              <BsFillPersonFill className="input-icon" />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="tel" className="modal-label">
              Mobile phone
            </label>
            <div className="input-text-icon">
              <input
                type="tel"
                name="tel"
                id="tel"
                className="modal-input"
                required
              />
              <BsPhone className="input-icon" />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="email" className="modal-label">
              Email
            </label>
            <div className="input-text-icon">
              <input
                type="email"
                name="email"
                id="email"
                className="modal-input"
                required
              />
              <BsEnvelope className="input-icon" />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="comment" className="modal-label">
              Comment
            </label>
            <textarea
              name="comment"
              id="comment"
              className="modal-input modal-comment"
              rows="10"
              placeholder="Enter your comment..."
            />
          </div>

          <div className="form-field modal-policy">
            <input
              type="checkbox"
              name="policy"
              id="policy"
              className="modal-policy-check"
            />
            <label htmlFor="policy" className="modal-policy-text">
              I would like to receive a newsletter
            </label>
          </div>

          <div className="modal-submit">
            <button className="btn modal-btn">Send</button>
          </div>
        </form>
        </div>
      </div>
    </section>
  );
}
