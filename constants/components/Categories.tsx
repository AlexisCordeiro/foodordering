import {View, Text, ScrollView, StyleSheet, Image} from "react-native";
import React from "react";
import { categories } from "@/assets/data/home";

const Categories = () => {
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            padding: 15,

        }}>
            {categories.map((category, index) => (
              <View style={styles.categoryCard} key={index}>
                <Image source={category.img} />
                <Text style={styles.categoryText}>{category.text}</Text>
              </View>  
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {},
    categoryCard:{
        width:100,
        height:100,
        backgroundColor: "#ffff",
        marginEnd: 10,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.09,
        borderRadius: 4,
    },
    categoryText:{
        fontSize: 14,
        padding: 6,
        fontWeight: "bold",
    }
})

export default Categories