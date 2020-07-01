import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Title from './Movies/Title';

const Container = styled.View``;

const List = ({children}) => (
  <>
    <Title title={'Coming Soon'}></Title>
    <Container>
      {children}
    </Container>
  </>
)

List.propTypes = {
  children: PropTypes.node
}

export default List;