import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson' },
      { id: 'id-2', name: 'Hermione Kline' },
      { id: 'id-3', name: 'Eden Clements' },
    ],
    name: '',
  };

  addContact = name => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name }],
    }));
  };

  render() {
    return (
      <>
        <ContactForm onSubmit={this.addContact} />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}
