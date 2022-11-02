import { GrClose } from 'react-icons/gr';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsPhone, BsEnvelope } from 'react-icons/bs';
import { useState } from 'react';

export default function ModalWindow(props) {
  const [completedForm, setCompletedForm] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setCompletedForm(prev => !prev);
  }

  return (
    <div>
      <div className="backdrop" onClick={props.onRequestClose}></div>
      <div className="modal" ref={props.nodeRef}>
        <button
          onClick={props.onRequestClose}
          type="button"
          className="modal-close-btn"
        >
          <GrClose className="modal-close-icon" />
        </button>
        {completedForm ? <FormLetter /> : <Form handleSubmit={handleSubmit} />}
      </div>
    </div>
  );
}

function Form({ handleSubmit }) {
  return (
    <>
      <p className="modal-title">
        Please fill out the form and we'll call you back
      </p>
      <form className="modal-form" onSubmit={handleSubmit}>
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
    </>
  );
}

function FormLetter() {
  return (
    <div className="formletter">
      <p>Thanks for filling out the form!</p>
      <p>We'll call you as soon as possible.</p>
    </div>
  );
}
