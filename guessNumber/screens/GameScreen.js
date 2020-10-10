import React ,{useState,useRef,useEffect} from "react";
import {View,Text,StyleSheet,Alert,ScrollView, FlatList,Dimensions} from  "react-native";
import NumberContainer from  "../components/NumberContainer";
import Card from "../components/Card";
import DefaultStyles from "./constants/DefaultStyles";
import MainButton from '../components/MainButton';
import {Ionicons} from '@expo/vector-icons';
import {ScreenOrientation} from 'expo';
import BodyText from '../components/BodyText';

const genrateRandomBetween = (min,max,exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max -min)) + min;
    if(rndNum === exclude){
        return genrateRandomBetween(min,max,exclude);
    }
    else{
        return rndNum;
    }
    
};
const renderListItem = (listLength,itemData) => (
    <View  style={styles.listItem}>
         <BodyText>#{listLength - itemData.index}</BodyText>
         <BodyText>{itemData.item}</BodyText>
    </View>
);
const GameScreen = props => {
    const intialGuess = genrateRandomBetween(1,100,props.userChoice);
    const [currentGuess,setCurrentGuess] = useState(intialGuess);
    const [pastGuesses,setPastGusses] = useState([intialGuess.toString()]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const {userChoice,onGameOver} = props;  //for the below code
    useEffect(() =>{
        if(currentGuess === props.userChoice){
            onGameOver(pastGuesses.length);
        }
    },[currentGuess,userChoice,props.onGameOver]);

    const nextGuessHandler = direction =>{
        if((direction === "lower" && currentGuess < props.userChoice) ||
         (direction === "greater" && currentGuess > props.userChoice)){
            Alert.alert('Don\'t lie','You know that this is wrong...',[
                {text:'Sorry!',styel:"cancel"}
            ]);
            return;
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = genrateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(nextNumber);
        //setRounds(curRounds => curRounds + 1);
        setPastGusses(curtPastGuess => [nextNumber.toString(),...curtPastGuess])
    };
        return <View style={styles.screen}>
            <Text style={DefaultStyles.bodyText}>Opponent's Guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card style={styles.buttonContainer}>
                    <MainButton onPress={nextGuessHandler.bind(this,'lower')}><Ionicons name="md-remove" size={24} color="white"/></MainButton>
                    <MainButton onPress={nextGuessHandler.bind(this,'greater')} ><Ionicons name="md-add" size={24} color="white"/></MainButton>
                </Card>
                <View style={styles.list}>
                    {/* <ScrollView>
                        {pastGuesses.map((guess,index) => renderListItem(guess, index + 1))}
                    </ScrollView> */}
                    <FlatList keyExtractor={(item) => item} data={pastGuesses} renderItem={renderListItem.bind(this, pastGuesses.length)}/>
                </View>
        </View>
        
        
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:Dimensions.get('window').height > 600 ? 30 :5,
        width:300,
        maxWidth:"90%",
    },
    listItem:{
        borderColor:"#ccc",
        padding:15,
        marginVertical:10,
        backgroundColor:'white',
        borderWidth:1,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    list:{
        width:'80%',
        flex:1,
    }
});

export default GameScreen; 