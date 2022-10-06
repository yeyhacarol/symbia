import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const Submit = ({title, instruction, children, onPress = () => {}}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button} onPress={onPress}>
        <Text style={style.title}>{title}</Text>
      </TouchableOpacity>
      {instruction ? (
        <Text style={style.instruction}>
          {instruction} {children}
        </Text>
      ) : (
        <></>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: 280,
    height: 50,
    marginBottom: 10,
    backgroundColor: '#3F6184',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-Light',
    fontSize: 22,
    color: '#fff',
  },
  instruction: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
});

export default Submit;
