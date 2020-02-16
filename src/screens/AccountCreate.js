import React,{useContext}from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements'; 
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import {SafeAreaView} from 'react-navigation';
const AccountCreate = ()=>{
    const {signout} = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Spacer>
            <Text>Your Account</Text>
            </Spacer>
            <Spacer/>
            <Button
            title = "Sign Out"
            onPress={signout}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       marginBottom:100 
    }
});


export default AccountCreate;