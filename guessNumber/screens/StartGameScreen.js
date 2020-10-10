import React, {useState} from "react";
import {View, Text, StyleSheet, Button, TouchableWithoutFeedback,Keyboard,Alert,Dimensions} from "react-native";

import Card from "../components/Card";

import Colors from "./constants/Colors";

import Inputs from "../components/Inputs";

import BodyText from '../components/BodyText';

import NumberContainer from "../components/NumberContainer";

import TitleText from "../components/TitleText";

import MainButton from '../components/MainButton';

const StartGameScreen = props => {

    const [enteredValue,setEnteredValue] = useState('');
    const [confirmed,setConfirmed] = useState(false);
    const [selectedNumber,setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    }; 

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chooseNumber = parseInt(enteredValue);
        if(isNaN(chooseNumber)  || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert(
                'Invalid Number!','Number has to be between 1 and 99.',
                [{text:'Okay',style:'destructive',onPress:resetInputHandler}]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chooseNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if(confirmed){
        confirmedOutput = 
        <Card styel={styles.summayContainer}>
            <BodyText>Your Selected</BodyText>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton color="white"  onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButton>
        </Card>
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style = {styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <BodyText>Select a Number</BodyText>
                <Inputs style={styles.input}
                 style={styles.input}
                  blurOnSubmit
                  autoCapitalize="none"
                  autoCorrect={false}
                  maxLength={2}
                  keyboardType="number-pad"
                  onChangeText={numberInputHandler}
                  value={enteredValue}
                  />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.primary} /></View>
                    <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.secondary}/></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:"center",
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    inputContainer:{
        width:"80%",
        minWidth:300,
        maxWidth:"95%",
        alignItems:'center',
    },
    title:{
        fontSize:20,
        marginVertical:10,
        fontFamily:'open-sans-bold'
    },
    button:{
        // width:100,
        width:Dimensions.get('window').width / 4
    },
    input:{
        width:"25%",
        height:30,
        borderBottomColor:"gray",
        borderBottomWidth:1,
        marginVertical:10,
        textAlign:"center",
        alignItems:"center",
    },
    summayContainer:{
        marginTop:20,
    }

});  

export default StartGameScreen;