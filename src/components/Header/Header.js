import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

const Header = ({text, children}) => {
  return (
    <View style={style.container}>
      <Text style={style.brand}>SYMBYA</Text>
      <View style={style.line}></View>
      <Text style={style.instruction}>
        {text} {children}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  brand: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 35,
    color: '#000',
  },
  line: {
    width: '100%',
    height: 0.5,
    marginBottom: 30,
    backgroundColor: '#000',
  },
  instruction: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    fontWeight: 'light',
    color: '#000',
    marginBottom: 40,
  },
});

export default Header;
