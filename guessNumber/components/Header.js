import React from "react";
import {View, Text, StyleSheet,Platform } from "react-native";

import Colors from '../screens/constants/Colors';
import TitleText from "./TitleText";

const Header = props => {
    return (
        <View style={{
            ...styles.headerBase,
             ...Platform.select({
                 ios:styles.headerIos,
                 android:styles.headerAndroid
                 })
            }}
        >
            <TitleText style={styles.title}>{props.title}</TitleText>
        </View>
    );
};
const styles = StyleSheet.create({
    headerBase:{
        width:"100%",
        height:90,
        paddingTop:36,
        alignItems:"center",
        justifyContent:"center",
        
    },
    headerAndroid:{
        backgroundColor: Colors.primary ,
    },
    headerIos:{
        borderBottomColor:'#ccc',
        borderBottomWidth:1 ,
        backgroundColor: Colors.primary ,
    },
    title:{
        color:Platform.OS =="ios" ? Colors.primary : 'white',
    }
});

export default Header; 