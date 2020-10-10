import React from "react";
import {View, StyleSheet} from "react-native";

const Card = props => {
    return <View style={{...styles.Card, ...props.style}}>{props.children}</View>;

};

const styles = StyleSheet.create({
    Card:{
        shadowColor:'black',
        shadowRadius:3,
        shadowOpacity:0.26,
        backfaceVisibility:"hidden",
        elevation:8,
        shadowRadius:4,
        padding:20,
        borderRadius:10,
    },
}); 

export default Card;