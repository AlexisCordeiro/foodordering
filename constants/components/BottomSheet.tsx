import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'
import React, {forwardRef, useCallback, useMemo} from "react";
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';

import Colors from '../Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
    const snapPoints = useMemo(() => ["55%"], []);
    const renderBackdrop = useCallback((props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}/>, [])
    const {dismiss} = useBottomSheetModal();
    return(
        <BottomSheetModal handleIndicatorStyle={{display: 'none'}} backgroundStyle={{borderRadius:0, backgroundColor: Colors.lightGrey}} overDragResistanceFactor={0} backdropComponent={renderBackdrop} ref={ref} snapPoints={snapPoints}>
            <View style={styles.contentContainer}>
                <View style={styles.toggle}>
                    <TouchableOpacity style={styles.toggleActive}>
                        <Text style={styles.activeText}>
                            Delivery
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toggleInactive}>
                        <Text style={styles.inactiveText}>
                            Pickup
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subheader}>
                    Your Location
                </Text>
                <Link href={'/(modal)/location-search'} asChild>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <Ionicons name='location-outline' size={20} color={Colors.medium}/>
                            <Text style={{ flex: 1}}>
                                Current Location
                            </Text>
                            <Ionicons name='chevron-forward' size={20} color={Colors.primary}/>
                        </View>
                    </TouchableOpacity>
                </Link>
                <Text style={styles.subheader}>
                    Arrival time
                </Text>
                <TouchableOpacity>
                        <View style={styles.item}>
                            <Ionicons name='stopwatch-outline' size={20} color={Colors.medium}/>
                            <Text style={{ flex: 1}}>
                                Now
                            </Text>
                            <Ionicons name='chevron-forward' size={20} color={Colors.primary}/>
                        </View>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </BottomSheetModal>
    )
});

const styles = StyleSheet.create({
    contentContainer:{
        flex: 1,
    },
    buttonText:{
        color: "#ffff",
        fontWeight: "bold"
    },
    toggle:{
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        marginBottom: 32
    },
    toggleActive:{
        backgroundColor: Colors.primary,
        borderRadius: 32,
        padding: 8,
        paddingHorizontal: 30,
    },
    activeText:{
        color: "#ffff",
        fontWeight: "700",
    },
    toggleInactive:{
        borderRadius: 32,
        padding: 8,
        paddingHorizontal: 30,
    },
    inactiveText:{
        color: Colors.primary,
        fontWeight: "700",
    },
    subheader:{
        fontSize: 16,
        fontWeight: "600",
        margin: 16
    },
    item:{
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        backgroundColor: "#ffff",
        padding: 16,
        borderColor: Colors.grey,
    },
    button:{
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 4,
        margin: 16,
        alignItems: "center"

    }
})


export default BottomSheet;