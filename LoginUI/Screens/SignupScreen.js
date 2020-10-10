import React, { useState } from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity,Image} from 'react-native';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import SocialButton from '../Components/SocialButton';

const SignupScreen = ({navigation}) => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmpassword,setconfirmPassword] = useState();


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create an Account</Text>
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

            <FormInput
            labelValue={confirmpassword}
            placeholderText="ConfirmPassword"
            iconType="md-lock"
            secureTextEntry={true}
            onChangeText={(userconfirmPassword)=> setconfirmPassword(userconfirmPassword)}
            />

            <FormButton
             buttonTitle="Sign UP"
             onPress={() => alert('sign Up clicked')}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>By Registring, you confirm that you acceopt our </Text>
                <TouchableOpacity onPress={() => alert('Teram and services will be added.')}><Text style={styles.color_textPrivate,{color:'#e88832'}}>Terms of services </Text></TouchableOpacity>
                <Text style={styles.color_textPrivate,{color:'#e88832'}}> and Privacy Policy</Text>
            </View>

            <SocialButton
            buttonTitle="Sign Up With Facebook"
            btnType="logo-facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
            />

            <SocialButton
            buttonTitle="Sign Up With Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
            />

            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.navButtonText}>Have an account? Sign In</Text>
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
      
      text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      },
      navButton: {
        marginTop: 15,
      },
      
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
      },
      textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
      },
      color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
      },
});

export default SignupScreen;