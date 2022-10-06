import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Submit from '../../components/form/Submit/Submit';
import TextField from '../../components/form/Input/Input';

const Registration = () => {
  const [inputs, setInputs] = useState({
    name: '',
    phone: '',
    smartphone: '',
    email: '',
    responsibleName: '',
    responsiblePhone: '',
  });

  const handleOnChange = (text, input) => {
    setInputs(prevState => ({
      ...prevState,
      [input]: text,
    }));
  };

  const [error, setErrors] = useState({});

  const handleErrors = (errorMessage, input) => {
    setErrors(prevState => ({
      ...prevState,
      [input]: errorMessage,
    }));
  };

  const handleValidate = () => {
    let validate = false;

    if (!inputs.name) {
      validate = false;
      handleErrors('Preencha seu nome.', 'name');
    }
    if (!inputs.phone) {
      validate = false;
      handleErrors('Preencha seu telefone.', 'phone');
    }
    if (!inputs.smartphone) {
      validate = false;
      handleErrors('Preencha seu celular.', 'smartphone');
    }
    if (!inputs.email) {
      validate = false;
      handleErrors('Preencha seu e-mail.', 'email');
    }

    console.log(error);
  };

  return (
    <ScrollView style={style.scroll}>
      <Header
        text="Preencha seus dados para acessar ao"
        children={<Text style={style.custom}>SYMBIA.</Text>}
      />
      <View style={style.container}>
        <Container>
          <TextField
            placeholder="Seu nome"
            iconName="user"
            onFocus={() => handleErrors('', 'name')}
            onChangeText={text => handleOnChange(text, 'name')}
            error={error.name}
          />
          <TextField
            placeholder="Seu telefone"
            iconName="phone"
            onFocus={() => handleErrors('', 'phone')}
            onChangeText={text => handleOnChange(text, 'phone')}
            error={error.phone}
          />
          <TextField
            placeholder="Seu celular"
            iconName="smartphone"
            onFocus={() => handleErrors('', 'smartphone')}
            onChangeText={text => handleOnChange(text, 'smartphone')}
            error={error.smartphone}
          />
          <TextField
            placeholder="Seu e-mail"
            iconName="at-sign"
            onFocus={() => handleErrors('', 'email')}
            onChangeText={text => handleOnChange(text, 'email')}
            error={error.email}
          />
        </Container>

        <Text style={style.responsible}>
          Você pode cadastrar dados do seu responsável, caso necessário.
        </Text>

        <Container>
          <TextField placeholder="Nome do responsável" iconName="users" />
          <TextField placeholder="Telefone do responsável" iconName="phone" />
        </Container>

        <Submit
          title="CADASTRAR"
          instruction="Já possui cadastro?"
          children={<Text style={style.custom}>Entrar.</Text>}
          onPress={handleValidate}
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
  responsible: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    fontWeight: 'light',
    color: '#000',
    marginBottom: 30,
  },
  custom: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#3F6184',
  },
});

export default Registration;
