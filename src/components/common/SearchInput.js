import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../../styles/styles.css';

const SearchBox = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 20px;
  border-radius: 4px;
  border: 2px solid #f2f2f2;
`;

const SearchBoxContainer = styled.div`
  overflow: hidden;
  width: 100%;
  vertical-align: middle;
  white-space: nowrap;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const SearchBoxInput = styled.input`
  width: 100%;
  height: 20px;
  background: #fff;
  border: none;
  font-size: 13px;
  color: #737373;
  padding-left: 10px;
`;

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: this.props.value || '',
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      typeof nextProps.value !== 'undefined' &&
      nextProps.value !== this.props.value
    ) {
      const e = {
        target: {
          value: nextProps.value,
        },
      };
      this.updateSearch(e);
    }
  }

  updateSearch(e) {
    const searchTerm = e.target.value;
    this.setState(
      {
        searchTerm,
      },
      () => {
        if (this.throttleTimeout) {
          clearTimeout(this.throttleTimeout);
        }
        this.throttleTimeout = setTimeout(
          () => this.props.onChange(searchTerm),
          this.props.throttle,
        );
      },
    );
  }

  render() {
    const {
      onChange,
      caseSensitive,
      sortResults,
      throttle,
      value,
      fuzzy,
      ...inputProps
    } = this.props; // eslint-disable-line no-unused-vars
    inputProps.type = inputProps.type || 'search';
    inputProps.value = this.state.searchTerm;
    inputProps.onChange = this.updateSearch;
    inputProps.placeholder = inputProps.placeholder || 'Search';
    return (
      <SearchBox>
        <SearchBoxContainer>
          <SearchBoxInput {...inputProps} />
        </SearchBoxContainer>
      </SearchBox>
    );
  }
}

SearchInput.defaultProps = {
  onChange() {},
  caseSensitive: false,
  fuzzy: true,
  throttle: 200,
  sortResults: false,
  value: '',
};

SearchInput.propTypes = {
  onChange: PropTypes.func,
  caseSensitive: PropTypes.bool,
  sortResults: PropTypes.bool,
  fuzzy: PropTypes.bool,
  throttle: PropTypes.number,
  value: PropTypes.string,
};

export default SearchInput;
