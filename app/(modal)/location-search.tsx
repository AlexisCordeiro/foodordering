import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from "@expo/vector-icons";




const LocationSearch = () => {
    const navigation = useNavigation()
    const [location, setLocation] = useState({
        latitude: -23.031776,
        longitude: -45.579822,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
    })

    return (
        <View style={{ flex: 1 }}>
            <GooglePlacesAutocomplete
                placeholder="Search or move the map"
                fetchDetails={true}
                onPress={(data, details = null) => {
                    const point = details?.geometry?.location;
                    if(!point) return;
                    setLocation({
                       ...location,
                       latitude: point.lat,
                       longitude: point.lng
                    });
                    console.log(data, details);
                }}
                query={{
                    key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
                    language: 'en'
                }}
                renderLeftButton={() => (
                    <View style={styles.boxIcon}>
                        <Ionicons name="search-outline" size={24} color={"#fff"} style={{backgroundColor: Colors.medium}} />
                    </View>
                )}
                styles={{
                    container:{
                        flex: 0,
                    },
                    textInput:{
                        backgroundColor: Colors.medium,
                        paddingLeft: 35
                    },
                    textInputContainer:{
                        padding: 8,
                        backgroundColor: "#fff",
                    },
                    
                }}
            />
            <MapView showsUserLocation={true} style={styles.map} region={location} />
            <View style={styles.absoluteBox}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    boxIcon:{
        position: "absolute",
        left: 15,
        top: 18,
        zIndex: 1,
                
    },
    map: {
        flex: 1
    },
    absoluteBox: {
        position: "absolute",
        bottom: 20,
        width: "100%",
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 16,
        alignItems: "center",
        margin: 16
    },
    buttonText: {
        color: "#ffff",
        fontWeight: "bold",
        fontSize: 16
    },
})

export default LocationSearch