import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';

import Container from '../../components/Container/Container';

const Details = () => {
  return (
    <ScrollView style={style.scroll}>
      <View style={style.heading}>
        <Text style={style.headingText}>
          Veja mais sobre o
          <Text style={style.highlightHeadingText}> PACIENTE.</Text>
        </Text>
        <View style={style.line}></View>
      </View>

      <Container className={style.container}>
        <View style={style.content}>
          <Text style={[style.patientData, style.name]}>Meu nome</Text>
          <Text style={style.patientData}>Meu número</Text>
        </View>
        <View>
          <Icon name="smile" size={30} color="white" />
        </View>
      </Container>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  heading: {
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    fontWeight: 'light',
    color: '#000',
    marginBottom: 5,
  },
  highlightHeadingText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#3F6184',
  },
  line: {
    width: '100%',
    height: 0.5,
    marginBottom: 20,
    backgroundColor: '#000',
  },
});

export default Details;
