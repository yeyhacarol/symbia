import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Submit from '../../components/form/Submit/Submit';
import TextField from '../../components/form/Input/Input';

const Registration = () => {
  return (
    <ScrollView style={style.scroll}>
      <Header
        text="Preencha seus dados para acessar ao"
        children={<Text style={style.custom}>SYMBIA.</Text>}
      />
      <View style={style.container}>
        <Container>
          <TextField placeholder="Seu nome" iconName="user" />
          <TextField placeholder="Seu telefone" iconName="phone" />
          <TextField placeholder="Seu celular" iconName="smartphone" />
          <TextField placeholder="Seu e-mail" iconName="at-sign" />
        </Container>

        <Submit
          title="PRÓXIMO"
          instruction="Já possui cadastro?"
          children={<Text style={style.custom}>Entrar.</Text>}
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  custom: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#3F6184',
  },
});

export default Registration;
