import {Component} from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
export class Filter extends Component {
  state = {
    inputValue: '',
  };
  handleChange = evt => {
    this.props.changeFilter (evt.target.value);
    this.setState ({inputValue: evt.target.value});
  };

  render () {
    const {inputValue} = this.state;
    return (
      <div>
        <label className={css.label}>
          Find contacts by name
          <input
            type="text"
            name="name"
            value={inputValue}
            onChange={this.handleChange}
            className={css.input}
          />
        </label>
      </div>
    );
  }
}
Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
