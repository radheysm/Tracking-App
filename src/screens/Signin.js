import React,{useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';

const Signin = ()=>{
     const {state, signin, clearErrorMessage} = useContext(Context);
    
    return (
        <View style={styles.container}>
            <NavigationEvents
            //   onWillFocus={()=>{}}
            //   onDidFocus={()=>{}}
              onWillBlur={clearErrorMessage}
            //   onDidBlur={()=>{}}
            />
        <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
        />
        <NavLink
          routeName="Signup"
          text="Don't have account? Sign up here! "
        />
        </View>
    );
};

Signin.navigationOptions=()=>{
    return{
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       marginBottom:100 
    }
});


export default Signin;