import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import useBasketStore from "@/store/basketStore";
import Colors from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import ConfettiCannon from 'react-native-confetti-cannon';
import { Link } from "expo-router";
import SwipeableRow from "@/constants/components/SwipeableRow";


const Basket = () => {
    const { products, total, clearCart, reduceProduct } = useBasketStore()
    const [order, setOrder] = useState(false)
    const FEES = {
        service: 2.99,
        delivery: 5.99,
    }

    const startCheckOut = () => {
        setOrder(true)
        clearCart()
    }

    return (
        <>
            {order && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fallSpeed={2500} fadeOut={true} autoStart={true} />}
            {order &&
                <View style={{ marginTop: "50%", padding: 20, alignItems: "center" }}>
                    <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>Thank you for order!</Text>
                    <Link href={"/"} asChild>
                        <TouchableOpacity style={styles.orderBtn}>
                            <Text style={styles.footerText}>
                                New Order
                            </Text>
                        </TouchableOpacity>
                    </Link>
                </View>}
            {
                !order &&
                <>
                    <FlatList data={products}
                        ListHeaderComponent={<Text style={styles.section}>Items</Text>}
                        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: Colors.grey }} />}
                        renderItem={({ item }) =>
                            <SwipeableRow onDelete={() => reduceProduct(item)} >
                                <View style={styles.row}>
                                    <Text style={{ color: Colors.primary, fontSize: 18 }}>{item.quantity}x</Text>
                                    <Text style={{ flex: 1, fontSize: 18 }}>{item.name}</Text>
                                    <Text style={{ fontSize: 18 }}>${item.price * item.quantity}</Text>
                                </View>
                            </SwipeableRow>
                        }
                        ListFooterComponent={
                            <View>
                                <View style={{ height: 1, backgroundColor: Colors.grey }} />
                                <View style={styles.totalRow}>
                                    <Text style={styles.total}>
                                        Subtotal
                                    </Text>
                                    <Text style={{ fontSize: 18 }}>
                                        ${total}
                                    </Text>
                                </View>

                                <View style={styles.totalRow}>
                                    <Text style={styles.total}>
                                        Service fee
                                    </Text>
                                    <Text style={{ fontSize: 18 }}>
                                        ${FEES.service}
                                    </Text>
                                </View>
                                <View style={styles.totalRow}>
                                    <Text style={styles.total}>
                                        Delivery fee
                                    </Text>
                                    <Text style={{ fontSize: 18 }}>
                                        ${FEES.delivery}
                                    </Text>
                                </View>
                                <View style={styles.totalRow}>
                                    <Text style={styles.total}>
                                        Order Total
                                    </Text>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                        ${(FEES.delivery + total + FEES.service).toFixed(2)}
                                    </Text>
                                </View>
                            </View>
                        }
                    />
                    <View style={styles.footer}>
                        <SafeAreaView style={{ backgroundColor: "#fff" }}>
                            <TouchableOpacity style={styles.fullButton} onPress={startCheckOut}>
                                <Text style={styles.footerText}>Order now</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </View>
                </>
            }
        </>
    )
}

const styles = StyleSheet.create({
    orderBtn: {
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary,
        alignItems: "center",
        width: 250,
        height: 50,
        justifyContent: "center",
        marginTop: 20
    },
    fullButton: {
        alignItems: "center",
        borderRadius: 8,
        paddingHorizontal: 16,
        backgroundColor: Colors.primary,
        flex: 1,
        height: 50,
        justifyContent: "center"
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
    footerText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 12,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    row: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 10,
        gap: 20,
        alignItems: "center"
    },
    section: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 16,
    },
    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#fff"
    },
    total: {
        color: Colors.medium,
        fontSize: 18,

    }
})

export default Basket