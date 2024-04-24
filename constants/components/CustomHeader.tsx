import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, TextInput, } from "react-native";
import React, { useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Colors";
import { Link } from "expo-router";

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import BottomSheet from "./BottomSheet";

const SearchBar = () => (
    <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
            <View style={styles.searchField}>
                <Ionicons style={styles.searchIcon} name="ios-search" size={20} color={Colors.medium}/>
                <TextInput style={styles.input} placeholder="Restaurantes, sobremesas, pratos..."/>
            </View>
            <Link href={"/(modal)/filter"} asChild>
                <TouchableOpacity style={styles.optionButton}>
                    <Ionicons name="options-outline" size={20}  color={Colors.primary} />
                </TouchableOpacity>
            </Link>
        </View>
    </View>
);



const CustomHeader = () => {

    const bottomSheetRef = useRef<BottomSheetModal>(null)

    const openModal = () => {
        bottomSheetRef.current?.present();
    }

    return(
        <SafeAreaView style={styles.safeArea}>
            <BottomSheet ref={bottomSheetRef}/>

            <View style={styles.container}>
                <TouchableOpacity>
                    <Image style={styles.bike} source={require('@/assets/images/bike.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
                    <Text style={styles.title}>
                        Delivery * Now
                    </Text>
                    <View style={styles.locationName}>
                        <Text style={styles.subtitle}>
                            Taubaté, SP
                        </Text>
                        <Ionicons name="chevron-down" size={20} color={Colors.primary}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileButton} onPress={openModal}>
                    <Ionicons name='person-outline' size={20} color={Colors.primary} />
                </TouchableOpacity>
            </View>
            <SearchBar/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1, 
        backgroundColor: "#fff"
    },
    container: {
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        gap: 20,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    bike:{
        height: 30,
        width: 30
    },
    titleContainer:{
        flex: 1,
    },
    searchContainer:{
        height: 60,
        backgroundColor: "#fff"
    },
    searchIcon:{
        paddingLeft: 10
    },
    input:{
        padding: 10,
        color: Colors.medium,
        width: 470
    },
    title:{
        fontSize: 14,
        color: Colors.medium,
    },
    locationName:{
        flexDirection: "row", alignItems: "center"
    },
    subtitle:{
        fontSize: 18,
        fontWeight: "bold"
    },
    profileButton:{
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 50,
    },
    searchSection:{
        flexDirection: "row",
        gap: 10,
        flex: 1,
        paddingHorizontal: 20,
        alignItems: "center"
    },
    searchField:{
       flex: 1,
        backgroundColor: Colors.lightGrey,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    optionButton:{
        padding: 10,
        borderRadius: 50
    }
})

export default CustomHeader;