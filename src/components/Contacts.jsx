import {Component} from 'react';
import css from './Contacts.module.css';
import PropTypes from 'prop-types';
export class Contacts extends Component {
  deleteContacts = e => {
    let idToDelete = e.currentTarget.id;
    this.props.deleteContact (idToDelete);
  };
  filterItems = ary => {
    let arryContacts = ary.filter (el => {
      return (
        el.name.toLowerCase ().indexOf (this.props.valueFilter.toLowerCase ()) >
        -1
      );
    });
    return arryContacts.map ((el, i) => {
      return (
        <li
          key={i.toString ()}
          id={el.id}
          className={css.list}
          onClick={this.deleteContacts}
        >
          {el.name}
          :
          {el.tel}
          <button type="button" className={css.button}>delete</button>
        </li>
      );
    });
  };
  renderContacts = arry => {
    if (arry.length === 0) {
      return;
    }
    if (this.props.valueFilter === '') {
      return arry.map ((el, i) => {
        return (
          <li
            key={i.toString ()}
            id={el.id}
            className={css.list}
            onClick={this.deleteContacts}
          >
            {el.name}
            :
            {el.tel}
            <button type="button" className={css.button}>delete</button>
          </li>
        );
      });
    }
    return this.filterItems (arry);
  };
  render () {
    return (
      <u className={css.item}>
        {this.renderContacts (this.props.allContacts)}
      </u>
    );
  }
}
Contacts.propTypes = {
  allContacts: PropTypes.array.isRequired,
  valueFilter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
