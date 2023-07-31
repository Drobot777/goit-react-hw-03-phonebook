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
  localStorageName ='localName'
   saveLocalStorage = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
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
   let obj = this.state.contacts.filter ((el) => el.id!==id);
    this.setState ({contacts:obj});
  };
  componentDidUpdate(prevState){
    if(prevState.contacts!==this.state.contacts){
      return this.saveLocalStorage(this.localStorageName,this.state.contacts)
    }
  }
  componentDidMount() {
    const saveLocalStorage = localStorage.getItem(this.localStorageName)

this.setState({contacts:saveLocalStorage?JSON.parse(saveLocalStorage):[]})
  }

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
