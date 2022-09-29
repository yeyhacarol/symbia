import React from 'react';
import {StyleSheet, View} from 'react-native';

const Container = ({children}) => {
  return <View style={style.container}>{children}</View>;
};

style = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 30,
    backgroundColor: '#3F6184',
  },
});

export default Container;
