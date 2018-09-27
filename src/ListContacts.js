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
    return(
      <div className="list-contacts"> 
        {JSON.stringify(this.state.query)}
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search contact"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
        </div>
        <ol className="list-contacts">
          {this.props.contacts.map(contact => (
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
              <button className="contact-remove" onClick={() => this.props.handleRemoveClick(contact)}>
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