import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TextInput = styled.TextInput`
  color: black;
  background-color: white;
  margin: 0px 30px;
  padding: 5px 10px;
  border-radius: 15px;
`;

const Input = ({placeholder, value, onChange, onSubmit}) =>
  <TextInput
    value={value}
    placeholder={placeholder}
    returnKeyType={'search'}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
  />

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default Input;