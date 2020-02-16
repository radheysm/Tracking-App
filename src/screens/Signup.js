import React ,{useContext}from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
const Signup = ({navigation})=>{
    const {state, signup, clearErrorMessage} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <NavigationEvents
               onWillBlur={clearErrorMessage}
            />
            <AuthForm
              headerText="SignUp for Tracker"
              errorMessage={state.errorMessage}
              submitButtonText="Sign Up"
              onSubmit={({email,password}) => signup({email,password})}
            />
            <NavLink
            routeName="Signin"
               text="Already have an account? Sing in instead"
            />
        
        </View>
    );
};

Signup.navigationOptions=()=>{
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


export default Signup;