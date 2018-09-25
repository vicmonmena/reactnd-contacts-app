import React from 'react';
import PropTypes from 'prop-types';
/**
 * 
 * @param {*} props 
 * 
 * Si usamos <button className="contact-remove" onClick={props.handleRemoveClick}>
 * Estaríamos pasando el evento a la función y se esperaría escuchando.
 */
const ListContacts = (props) => (

  <ol className="list-contacts">
    {props.contacts.map(contact => (
      <li key={contact.id} className="contact-list-item">
        <div 
          className="contact-avatar" 
          style={{
            backgroundImage: `url(${contact.avatarURL})`
          }}
        >
        </div>
        <div 
          className="contact-details" >
          <p>{contact.name}</p>
          <p>@{contact.handle}</p>
        </div>
        <button className="contact-remove" onClick={() => props.handleRemoveClick(contact)}>
          Remove
        </button>
      </li>
    ))}
  </ol>
)

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleRemoveClick: PropTypes.func.isRequired
}

export default ListContacts;