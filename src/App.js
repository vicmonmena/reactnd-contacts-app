import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    contacts: []
  }

  // Con esta función SI esperaría por el evento donde se asigne (en este caso el onClick del button dentro del ListContacs)
  // removeContact = event => {
  //   console.log('Removing contact')
  // }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({contacts})
    });
  }
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
