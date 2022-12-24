import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { ABInput } from '../components/ABInput'
import database from '@react-native-firebase/database';


export default function RegisterVehicle() {

    const [vehicleModal, setVehicleModal] = useState({})
    let {vehicleName ,typeOfVehicle ,noOfSeats ,time ,startingDestination ,endingDestination } = vehicleModal
    const [isLoading, setLoading] = useState(false)

    let sendData = () => {
        console.log(vehicleModal)
        setLoading(true)
        vehicleModal.id = database().ref('User/').push().key;
        database()
        .ref(`Registered Vehicle/${vehicleModal.id}`)
        .set(vehicleModal)
        .then(() => {
            setLoading(false)
            console.log('Success');
            setVehicleModal({ 
                vehicleName : '',
                typeOfVehicle : '',
                noOfSeats : '',
                time : '',
                startingDestination : '',
                endingDestination : '',
            })
            })
            .catch(err => {
                setLoading(false)
                console.log(err);
            });
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ justifyContent: 'center', marginTop: 50 }}>
                <View style={{ paddingHorizontal: 25 }}>
                    <Text style={styles.headerTxt}>Register Vehicle</Text>
                    <ABInput value={vehicleName} onChange={(e) => setVehicleModal({ ...vehicleModal, vehicleName: e })} icon='directions-car' placeholder='Vehicle Name' />{}
                    <ABInput value={typeOfVehicle} onChange={(e) => setVehicleModal({ ...vehicleModal, typeOfVehicle: e })} icon='commute' placeholder='Type of Vehicle' />{}
                    <ABInput value={noOfSeats} onChange={(e) => setVehicleModal({ ...vehicleModal, noOfSeats: e })} icon='airline-seat-recline-normal' placeholder='No of Seats' />{}
                    <ABInput value={time} onChange={(e) => setVehicleModal({ ...vehicleModal, time: e })} icon='schedule' placeholder='Time' />{}
                    <ABInput value={startingDestination} onChange={(e) => setVehicleModal({ ...vehicleModal, startingDestination: e })} icon='location-on' placeholder='Starting Destination' />{}
                    <ABInput value={endingDestination} onChange={(e) => setVehicleModal({ ...vehicleModal, endingDestination: e })} icon='where-to-vote' placeholder='Ending Destination' />{}
                    <TouchableOpacity onPress={sendData} style={styles.customButton} >
                        {isLoading ? (
                            <ActivityIndicator color='white' />
                        ) : (
                            <Text style={{
                                textAlign: 'center',
                                fontWeight: '700',
                                fontSize: 16,
                                color: '#fff',
                            }}>
                                Submit
                            </Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerTxt: {
        fontSize: 30,
        fontWeight: "500",
        color: "#333",
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
    },
    socialMediaIcon: {
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    customButton: {
        backgroundColor: '#1B2763',
        padding: 15,
        borderRadius: 10,
        marginBottom: 30,
    }
})
