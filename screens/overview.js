import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import vehicleExample from '../images/vehicleExample.jpg';
import { ABInput } from '../components/ABInput';
import database from '@react-native-firebase/database';


export default function Overview({ }) {

  let [bookingVehicle, setBookingVehicle] = useState()

  let getVehicles = () => {
    database()
      .ref('Registered Vehicle')
      .on('value', snapshot => {
        const fbObject = snapshot.val();
        const newArr = Object.keys(fbObject).map((key) => {
          fbObject[key].id = key;
          return fbObject[key];
        });
        setBookingVehicle(newArr)
      })
  }
  useEffect(() => {
    getVehicles()
  }, [])


  const ListItem = ({ bookingVehicle }) => {
    return <TouchableOpacity>
      <View style={styles.listItem}>
        <View>
          <Image source={vehicleExample} style={{ height: 120, width: 120 }} />
        </View>
        <View style={styles.vehicleList}>
          <Text style={styles.listHeader}>{bookingVehicle?.vehicleName}</Text>
          <View style={styles.location}>
            <Icon name='explore' size={20} color="black" />
            <Text style={{ marginLeft: 5, fontWeight: '600' }}>{bookingVehicle?.startingDestination}</Text>
          </View>
          <TouchableOpacity style={styles.priceTag}>
            <Text style={{ fontWeight: '600', color: '#fff', fontSize: 15, textAlign: 'center', }}>$200</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  }

  

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.headerSpacing]}>Let's find a Ideal slot for you.</Text>
      <View style={{ paddingHorizontal: 25, marginBottom: 20 }}>
        <ABInput icon="search" placeholder="Search.." />
      </View>
      <FlatList
        data={bookingVehicle}
        renderItem={({ item }) => <ListItem bookingVehicle={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
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
  },
  listItem: {
    marginHorizontal: 25,
    marginVertical: 5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
  }
});