import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Title from './Movies/Title';

const Container = styled.View``;

const List = ({title, children}) => (
  <>
    <Title title={title}></Title>
    <Container>
      {children}
    </Container>
  </>
)

List.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default List;