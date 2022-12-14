import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { ABInput } from '../components/ABInput'

export default function RegisterVehicle() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ justifyContent: 'center', marginTop: 50 }}>
                <View style={{ paddingHorizontal: 25 }}>
                    <Text style={styles.headerTxt}>Register Vehicle</Text>
                    <ABInput icon='directions-car' placeholder='Vehicle Name' />
                    <ABInput icon='commute' placeholder='Type of Vehicle' />
                    <ABInput icon='airline-seat-recline-normal' placeholder='No of Seats' />
                    <ABInput icon='schedule' placeholder='Time' />
                    <ABInput icon='location-on' placeholder='Starting Destination' />
                    <ABInput icon='where-to-vote' placeholder='Ending Destination' />
                    <TouchableOpacity style={styles.customButton} >
                        <Text style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 16,
                            color: '#fff',
                        }}>
                            Submit
                        </Text>
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
