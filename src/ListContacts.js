import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * 
 * @param {*} props 
 * 
 * Si usamos <button className="contact-remove" onClick={props.handleRemoveClick}>
 * Estaríamos pasando el evento a la función y se esperaría escuchando.
 */

 class ListContacts extends Component {

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    handleRemoveClick: PropTypes.func.isRequired
  }

  state= {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    })
  }
  render() {

    const { query } = this.state;
    const { contacts, handleRemoveClick} = this.props;
    
    // Cuando el state (query) cambia (updateQuery) 
    // se produce un re-render y por tanto 
    // el filtro del listado de contactos
    // se aplica cada vez que se introduce un caracter en el input (onChange)
    const filteredContacts = 
      query === '' ? contacts 
      : contacts.filter(item => (item.name.toLowerCase().includes(query.toLowerCase())));

    return(
      <div className="list-contacts"> 
        
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search contact"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
        </div>
        <ol className="list-contacts">
          {filteredContacts.map(contact => (
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
              <button className="contact-remove" onClick={() => handleRemoveClick(contact)}>
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}


export default ListContacts;