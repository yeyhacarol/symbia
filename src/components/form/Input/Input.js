import React from 'react';
import {StyleSheet, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {Input} from 'react-native-elements';

const TextField = ({placeholder, iconName, error, ...props}) => {
  return (
    <>
      <Input
        style={style.input}
        placeholder={placeholder}
        rightIcon={<Icon name={iconName} size={30} color="white" />}
        {...props}
      />
      <Text style={style.errorMessage}>{error}</Text>
    </>
  );
};

const style = StyleSheet.create({
  input: {
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    width: '100%',
    height: 25,
  },
  errorMessage: {
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
});

export default TextField;
