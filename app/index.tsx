import {Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Categories from "@/constants/components/Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import Restaurants from "@/constants/components/Restaurants";
import Colors from "@/constants/Colors";


const Page = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{paddingBottom: 40}}>
                <Categories />
                <Text style={styles.header}>
                    Top picks in your neighbourhood
                </Text>
                <Restaurants />
                <Text style={styles.header}>
                    Offers near you
                </Text>
                <Restaurants />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 60,
        backgroundColor: Colors.lightGrey,

    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom:8,
        paddingHorizontal: 16,
        marginTop: 16
    }
})

export default Page;