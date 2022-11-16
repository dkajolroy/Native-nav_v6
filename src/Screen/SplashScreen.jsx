import { View, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import logo from "../Assets/logo.png"

export default function Splash({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Drawer")
        }, 3000)
    }, [])

    return (
        <View style={style.container}>
            <Image style={style.logo} source={logo} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#FFC312",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 200,
        height: 250,
        resizeMode: 'stretch'
    }

})

