import React from 'react';
import {View,Button,StyleSheet,Image,TouchableOpacity,Text} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
    return(
        <View style={{
            width:5,
            height:5,
            marginHorizontal:3,
            backgroundColor,
        }}>
        </View>

    );
};

// const Skip = ({...props}) => {
//     return (
//         <Button 
//         title="Skip"
//         // color="#000000"
//         backgroundColor="none"
//         {...props}
//         />
//     );
// };

// const Next = ({...props}) => {
//     return (
//         <Button 
//         title="Next"
//         // color="#000000"
//         {...props}
//         />
//     );
// };

const Done = ({...props}) => {
    return(
        <TouchableOpacity 
        style={{marginHorizontal:10}}
        {...props}
        >
            <Text style={{fontSize:16}}>Done</Text>
        </TouchableOpacity>
    );
}

const OnBoardingScreen = ({navigation}) => {
    return (
        <Onboarding
        // SkipButtonComponent={Skip}
        // NextButtonComponent={Next}
        DoneButtonComponent = {Done}
        DotComponent = {Dots}
        onSkip = {() => navigation.replace('Login')}
        onDone = {() => navigation.navigate('Login')}

            pages={[
            {
                backgroundColor: '#a6e4d0',
                image: <Image source={require('../assets/circle.jpg')}  style={styles.image}/>,
                title: 'Connect to the World',
                subtitle: 'A new way to connect with the world',
            },
            {
                backgroundColor: '#fdeb93',
                image: <Image source={require('../assets/download.jpg')} style={styles.image}/>,
                title: 'Share your favorites',
                subtitle: 'Share your thoughts with similar kind of people',
            },
            {
                backgroundColor: '#e9bcde',
                image: <Image source={require('../assets/friend.jpg')} style={styles.image}/>,
                title: 'Become the star',
                subtitle: 'Let the spot light capture you',
            },
            ]}
        />
    );
};



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        width:250,
        height:250,
        display:'flex'
    }
});

export default OnBoardingScreen;