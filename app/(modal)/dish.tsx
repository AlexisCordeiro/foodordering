import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from 'react';
import { useLocalSearchParams, useRouter } from "expo-router";
import { getDishById } from "@/assets/data/restaurant";
import Colors from "@/constants/Colors";
import Animated, { FadeIn, FadeInLeft } from "react-native-reanimated";
import * as Haptics from 'expo-haptics'; 
import useBasketStore from "@/store/basketStore";

const Dish = () => {
    const { id } = useLocalSearchParams();
    const item = getDishById(+id)!;
    const router = useRouter();
    const {addProduct} = useBasketStore();

    const addToCart = () => {
        addProduct(item)
        Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Success
        )
        router.back()     
    }

    return (
        <View style={styles.container}>
            <Animated.Image 
            entering={FadeIn.duration(400).delay(200)}
            source={item?.img} style={styles.image} />
            <View style={{ padding: 20 }}>
                <Animated.Text 
                entering={FadeInLeft.duration(400).delay(200)}
                style={styles.textName}>{item?.name}</Animated.Text>
                <Animated.Text 
                entering={FadeInLeft.duration(400).delay(200)} style={styles.textInfo}>{item?.info}</Animated.Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.fullButton} onPress={addToCart}>
                    <Text style={styles.buttonText}>Add to cart ${item?.price}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    image: {
        width: "100%",
        height: 300,
    },
    textName: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8
    },
    textInfo: {
        fontSize: 16,
        color: Colors.mediumDark
    },
    footer: {
        bottom: 0,
        backgroundColor: "#fff",
        left: 0,
        width: "100%",
        position: "absolute",
        padding: 10,
        marginBottom: 30,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        paddingTop: 20
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#fff"
    },
    fullButton: {
        alignItems: "center",
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary
    }
})

export default Dish