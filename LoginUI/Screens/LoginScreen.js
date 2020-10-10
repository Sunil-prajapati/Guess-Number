import React, { useState } from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity,Image} from 'react-native';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import SocialButton from '../Components/SocialButton';

const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    return (
        <View style={styles.container}>
            <Image 
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={styles.logo}
            />
            <Text style={styles.text}>RN Social App</Text>
            <FormInput
            labelValue={email}
            placeholderText="Email"
            iconType="md-user"
            keyboardType='email-address'
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(userEmail)=> setEmail(userEmail)}
            />

            <FormInput
            labelValue={password}
            placeholderText="Password"
            iconType="md-lock"
            secureTextEntry={true}
            onChangeText={(userPassword)=> setPassword(userPassword)}
            />

            <FormButton
             buttonTitle="Sign in"
             onPress={() => alert('sign')}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
              <Text style={styles.navButtonText}>Forget Password</Text>
            </TouchableOpacity>

            <SocialButton
            buttonTitle="Sign in With Facebook"
            btnType="logo-facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
            />

            <SocialButton
            buttonTitle="Sign in With Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      logo: {
        height: 100,
        width: 100,
        resizeMode: 'cover',
      },
      text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      },
      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 25,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
      },
});

export default LoginScreen;