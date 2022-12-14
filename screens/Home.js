import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Overview from './overview';
import BookingHistory from './bookingHistory';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RegisterVehicle from './RegisterVehicle';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

export default function Home() {

    return (
        <>
            <Drawer.Navigator
                drawerContent={props => <CustomDrawer {...props} />}
                screenOptions={{
                    drawerActiveBackgroundColor: '#1B2763',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#333',
                    drawerLabelStyle: {
                        marginLeft: -25,
                        fontSize: 15,
                    }
                }}
            >
                <Drawer.Screen
                    options={{
                        drawerIcon: ({ color }) => (
                            <Icon name='home' size={20} color={color} />
                        )
                    }}
                    name="Overview"
                    component={Overview} />
                <Drawer.Screen
                    options={{
                        drawerIcon: ({ color }) => (
                            <Icon name='person' size={20} color={color} />
                        )
                    }}
                    name="Profile"
                    component={Profile} />
                <Drawer.Screen
                    options={{
                        drawerIcon: ({ color }) => (
                            <Icon name='history' size={20} color={color} />
                        )
                    }}
                    name="Booking History"
                    component={BookingHistory} />
                <Drawer.Screen
                    options={{
                        drawerIcon: ({ color }) => (
                            <Icon name='directions-car' size={20} color={color} />
                        )
                    }}
                    name="Register Vehicle"
                    component={RegisterVehicle} />
            </Drawer.Navigator>
        </>
    )
}