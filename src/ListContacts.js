import React, { Component } from 'react';

class ListContacts extends Component {
  render() {
    console.log('ListContacts props: ', this.props.contacts)
    return(
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
            <button className="contact-remove">
              Remove
            </button>
          </li>
        ))}
      </ol>
    )
  }
}

export default ListContacts;