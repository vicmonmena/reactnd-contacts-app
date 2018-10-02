import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';

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

  render() {
    return (
      <div>
      {
        this.state.screen === 'list' && (
        <ListContacts 
          contacts={this.state.contacts} 
          handleRemoveClick={this.removeContact}
          onNavigate={()=>{
            this.setState({
              screen: 'create'
            });
          }}
        />
      )}
      {
        this.state.screen === 'create' && (
          <CreateContact />
      )}
      </div>
    );
  }
}

export default App;
