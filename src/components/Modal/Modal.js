import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import './Modal.scss';

const Modal = ({
  visible, title, subtitle, content, hideModal,
}) => {
  if (!visible) return null;
  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <strong>{title}</strong>
          {subtitle && <p>&nbsp;-&nbsp;{subtitle}</p>}
          <button
            type="button"
            className="delete"
            aria-label="close"
            onClick={hideModal}
          />
        </header>
        <section className="modal-card-body">
          <div className="mark-down-content">
            <ReactMarkdown source={content} />
          </div>
        </section>
        <footer className="modal-card-foot" />
      </div>
    </div>
  );
};

Modal.defaultProps = {
  title: undefined,
  subtitle: undefined,
  content: undefined,
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
};

export default Modal;
