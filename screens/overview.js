import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import vehicleExample from '../images/vehicleExample.jpg';
import { ABInput } from '../components/ABInput';

export default function Overview({ }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.headerSpacing]}>Let's find a Ideal slot for you.</Text>
      <View style={{ paddingHorizontal: 25, marginBottom: 20 }}>
        <ABInput icon="search" placeholder="Search.." />
      </View>
      <View style={{ marginHorizontal: 25, flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, elevation: 10 }}>
        <View>
          <Image source={vehicleExample}  style={{ height: 120, width: 120}}/>
        </View>
        <View style={styles.vehicleList}>
          <Text style={styles.listHeader}>Audi R8</Text>
          <View style={styles.location}>
            <Icon name='explore' size={20} color="black"/>
            <Text style={{ marginLeft: 5 ,fontWeight: '600' }}>Lahore</Text>
          </View>
          <TouchableOpacity style={styles.priceTag}>
            <Text style={{ fontWeight: '600', color: '#fff', fontSize: 15, textAlign: 'center', }}>$200</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#000",
    fontSize: 32,
  },
  headerSpacing: {
    marginHorizontal: 20,
    marginVertical: 50,
  },
  location: {
    flexDirection: 'row'
  },
  listHeader: {
    fontSize: 30,
    fontWeight: '600',
    color: '#1B2763'
  },
  vehicleList: {
    marginLeft: 20,
    justifyContent: 'space-evenly'
  },
  priceTag: {
    width: 80,
    backgroundColor: '#1B2763',
    padding: 5,
    borderRadius: 50
  }
});