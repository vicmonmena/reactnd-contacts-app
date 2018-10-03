import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    contacts: [],
    screen: 'list'
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
    ContactsAPI.remove(contact)
  }

  createContact = (contact) => {
    ContactsAPI.create(contact).then(() => {
      this.setState((prevState) => ({
        contacts: prevState.contacts.concat([contact])
      }))
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListContacts 
            contacts={this.state.contacts} 
            handleRemoveClick={this.removeContact}
          />
        )} />
        <Route path='/create' render={({ history }) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/'); // volver a '/' para ver el listado con el nuevo contacto
            }}
          />
        )}/>
      </div>
    );
  }
}

export default App;
