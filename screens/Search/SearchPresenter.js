import React from 'react';
import styled from 'styled-components/native';
import Input from '../../components/Search/Input';

const Container = styled.ScrollView`

`;

const Text = styled.Text``;

export default () => (
  <Container
    style={{backgroundColor: 'black'}}>
    <Input placeholder={"Search here..."}/>
  </Container>
)