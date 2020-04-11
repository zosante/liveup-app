import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, TextInput, TouchableHighlight} from 'react-native'
import { color } from 'react-native-reanimated';
import Logo from './logo.png';

class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.logo}
                source={Logo}/>
                <Text style={styles.heading}>
                    Let your family know you're safe
                </Text>
                <TextInput style={styles.input}
                placeholder="Username"/>
                <TextInput style={styles.input}
                placeholder="Password"
                secureTextEntry={true}/>
                <TouchableHighlight
                style={styles.button}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableHighlight>

            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#F5FCFF',
        flex: 1,
        paddingTop: 40,
        alignItems: "center",
        padding : 10
    },
    logo : {
        
    },
    heading : {
        fontSize : 20,
        marginTop : 5
    },
    input : {
        height : 50,
        width : 200,
        marginTop : 20,
        paddingTop : 10,
        padding : 4,
        fontSize : 18,
        borderWidth : 1,
        borderColor : '#48bbec'
    },
    button : {
        height : 50,
        backgroundColor : '#48BBEC',
        marginTop : 20,
        alignSelf : 'stretch',
        justifyContent : 'center',


    },
    buttonText : {
        fontSize : 22,
        color : '#FFF',
        alignSelf : 'center'

    }
})