import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {Input} from 'react-native-elements';

const TextField = ({iconName, error, ...props}) => {
  return (
    <View style={style.inputContainer}>
      <Input
        style={style.input}
        rightIcon={<Icon name={iconName} size={30} color="white" />}
        {...props}
      />
      <Text style={style.errorMessage}>{error}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    width: '100%',
  },
  errorMessage: {
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    marginTop: -25,
  },
});

export default TextField;
