import React ,{} from "react";
import {View,Text,StyleSheet,Image,Dimensions,ScrollView} from  "react-native";

import BodyText from '../components/BodyText';

import Colors from './constants/Colors';

import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return ( <ScrollView>
    <View style={styles.screen}>
                <BodyText>The Game is Over!</BodyText>
                <View style={styles.imageContainer}>
                    <Image 
                        source={require("../assets/success.png")} 
                        //source={{uri:'' }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.resultText}>
                    <BodyText style={styles.result}>
                        Your Phone needed:<Text style={styles.highlight}>{props.rouundsNumber}</Text>
                            round to guess the number: <Text style={styles.highlight}>{props.userNumber}
                        </Text>
                    </BodyText>
                </View>
                <MainButton color="white" onPress={props.onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

    },
    image:{
        width:"100%",
        height:'100%',
        borderRadius:5,
      },
    imageContainer:{
        width:Dimensions.get('window').width * 0.7,
        height:Dimensions.get('window').width * 0.7,
        borderRadius:Dimensions.get('window').width * 0.7 / 2,
        borderWidth:3,
        borderColor:"black",
        overflow:"hidden",
        marginVertical:Dimensions.get('window').height / 30,
    },
    highlight:{
        color:Colors.primary,
    },
    resultText:{
        marginHorizontal:30,
        marginVertical:Dimensions.get('window').height / 60,
    },
    result:{
        textAlign:"center",
        fontSize:Dimensions.get("window").height < 400 ? 16 :20
    }
});

export default GameOverScreen;