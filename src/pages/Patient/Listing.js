import React, {useEffect, useState} from 'react';
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

const Listing = ({navigation}) => {
  const [patients, setPatitents] = useState([]);

  useEffect(() => {
    api.get('patientlist').then(data => setPatitents(data.data));
  }, []);

  return (
    <ScrollView style={style.scroll}>
      <View style={style.heading}>
        <Text style={style.headingText}>
          Listagem de <Text style={style.highlightHeadingText}>PACIENTES.</Text>
        </Text>
        <View style={style.line}></View>
      </View>
      {patients.map(patient => (
        <TouchableOpacity
          style={style.touchable}
          key={patient.id}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Details', {id: patient.id})}>
          <Container className={style.container}>
            <View style={style.content}>
              <Text style={[style.patientData, style.name]}>
                {patient.name}
              </Text>
              <Text style={style.patientData}>{patient.smartphone}</Text>
            </View>
            <View>
              <Icon name="smile" size={30} color="white" />
            </View>
          </Container>
        </TouchableOpacity>
      ))}
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
  touchable: {
    elevation: 5,
  },
  container: {
    minHeight: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  content: {
    flexGrow: 1,
  },
  patientData: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
  },
  name: {
    marginBottom: 15,
  },
});

export default Listing;
