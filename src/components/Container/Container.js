import React from 'react';
import {StyleSheet, View} from 'react-native';

const Container = ({children, className}) => {
  return <View style={[style.container, className]}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    marginBottom: 30,
    borderRadius: 30,
    backgroundColor: '#3F6184',
  },
});

export default Container;
