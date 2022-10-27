import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Toast from 'react-native-toast-message';

import api from '../../services/api';

import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Submit from '../../components/form/Submit/Submit';
import TextField from '../../components/form/Input/Input';

const Registration = () => {
  const [inputs, setInputs] = useState({
    name: '',
    telephone: '',
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
    let validate = true;

    if (!inputs.name) {
      validate = false;
      handleErrors('Preencha seu nome.', 'name');
    }
    if (!inputs.telephone) {
      validate = false;
      handleErrors('Preencha seu telefone corretamente.', 'telephone');
    }

    if (!inputs.smartphone) {
      validate = false;
      handleErrors('Preencha seu celular.', 'smartphone');
    }
    if (!inputs.email) {
      validate = false;
      handleErrors('Preencha seu e-mail.', 'email');
    }

    if (validate) {
      Toast.show({
        type: 'success',
        text1: 'Cadastrado com sucesso.',
      });

      registration();
    }

    console.log(error);
  };

  const registration = () => {
    try {
      const res = api.post('patientregistry', {
        name: inputs.name,
        telephone: inputs.telephone,
        smartphone: inputs.smartphone,
        email: inputs.email,
        responsibleName: inputs.responsibleName,
        responsiblePhone: inputs.responsiblePhone,
      });
    } catch (error) {
      console.log(error);
    }
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
            maxLength={10}
            onFocus={() => handleErrors('', 'telephone')}
            onChangeText={text => handleOnChange(text, 'telephone')}
            error={error.telephone}
          />
          <TextField
            placeholder="Seu celular"
            iconName="smartphone"
            maxLength={11}
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
          <TextField
            placeholder="Nome do responsável"
            iconName="users"
            onChangeText={text => handleOnChange(text, 'responsibleName')}
          />
          <TextField
            placeholder="Telefone do responsável"
            iconName="phone"
            maxLength={10}
            onChangeText={text => handleOnChange(text, 'responsiblePhone')}
          />
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
