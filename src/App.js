import React, { Component } from 'react';
import ListContacts from './ListContacts';


class App extends Component {
  state = {
    contacts: [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }

  // Con esta función SI esperaría por el evento donde se asigne (en este caso el onClick del button dentro del ListContacs)
  // removeContact = event => {
  //   console.log('Removing contact')
  // }

  removeContact = contact => {
    console.log('Removing contact: ' + contact.id)
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => (item.id !== contact.id))
    }))
  }

  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} handleRemoveClick={this.removeContact}/>
      </div>
    );
  }
}

export default App;
