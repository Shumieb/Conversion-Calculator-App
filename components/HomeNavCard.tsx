import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Link } from "expo-router";
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface PropTypes {
    title: string,
    extraPadding?: boolean,
    icon: string,
}

const HomeNavCard = ({ title, extraPadding = false, icon, }: PropTypes) => {

    return (
        <View style={styles.card}>
            <View style={[styles.iconContainer, extraPadding ? styles.extraPadding : null]}>
                {
                    icon == "length" ?
                        <FontAwesome5 name='tape' color="#fff" size={20} /> :
                        icon == "temp" ?
                            <FontAwesome5 name='thermometer-full' color="#fff" size={20} /> :
                            icon == "weight" ?
                                <MaterialCommunityIcons name='weight' color="#fff" size={20} /> :
                                null
                }
            </View>
            {
                icon == "length" ?
                    <Link style={styles.link} href="/LengthConversions">{title}</Link> :
                    icon == "temp" ?
                        <Link style={styles.link} href="/TempConversions">{title}</Link> :
                        icon == "weight" ?
                            <Link style={styles.link} href="/WeightConversions">{title}</Link> :
                            null
            }
            <FontAwesome6 name="arrow-right" size={18} color="#e64459" />
        </View>
    )
}

export default HomeNavCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fcfdfe",
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 16,
        borderRadius: 5,
        marginBottom: 15,
        elevation: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    iconContainer: {
        backgroundColor: "#e64459",
        padding: 6,
        borderRadius: "50%"
    },
    link: {
        color: "#e64459",
        fontSize: 17,
        textAlign: "center",
        fontWeight: "bold",
    },
    extraPadding: {
        paddingHorizontal: 12
    },
})