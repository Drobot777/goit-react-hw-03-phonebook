import {Phonebook} from './Phonebook';
import {nanoid} from 'nanoid';
import {Component} from 'react';
import {Filter} from './Filter';
import {Contacts} from './Contacts';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    filter: '',
  };

  toggle = (name, tel) => {
    let masName = [];
    this.state.contacts.forEach (date => {
      return masName.push (date.name);
    });
    if (masName.includes (name)) {
      return alert ('Rosie Simpson is already in contacts');
    }
    return this.setState ({
      contacts: [
        ...this.state.contacts,
        {
          name: name,
          id: nanoid (),
          tel: tel,
        },
      ],
    });
  };

  changeFilter = value => {
    this.setState ({filter: value});
  };
  deleteContact = id => {
    this.state.contacts.forEach ((el, i) => {
      if (el.id === id) {
        return delete this.state.contacts[i];
      }
    });
    this.setState ({});
  };

  render () {
    const {filter} = this.state;
    const {contacts} = this.state;

    return (
      <div>

        <h1 style={{textAlign: 'center'}}>Phonebook</h1>
        <Phonebook toggle={this.toggle} />
        <h2 style={{textAlign: 'center'}}>Contact</h2>
        <Filter changeFilter={this.changeFilter} />
        <Contacts
          allContacts={contacts}
          valueFilter={filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
