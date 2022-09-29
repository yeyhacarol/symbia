import React from 'react';
import {StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {Input} from 'react-native-elements';

const TextField = ({placeholder, iconName}) => {
  return (
    <Input
      style={style.input}
      placeholder={placeholder}
      rightIcon={<Icon name={iconName} size={35} color="white" />}
    />
  );
};

style = StyleSheet.create({
  input: {
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
  },
});

export default TextField;
