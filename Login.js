import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, TextInput, TouchableHighlight, ActivityIndicator} from 'react-native'
import { color } from 'react-native-reanimated';
import buffer from 'buffer';
import Logo from './logo.png';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            showProgress: false,
        }
    }
    
    render(){
        var errorCtrl = <View />;
        if(!this.state.success && this.state.badCredentials){
            errorCtrl = <Text style={styles.error}>
                The username and password did not work
            </Text>;
        }
        if(!this.state.success && this.state.unknownError){
            errorCtrl = <Text style={styles.error}>
                We experienced and unexpected issue
            </Text>;
        }
        
        return(
            <View style={styles.container}>
                <Image style={styles.logo}
                source={Logo}/>
                <Text style={styles.heading}>
                    Let your family know you're safe
                </Text>
                <TextInput style={styles.input}
                onChange={(text)=> this.setState({ username : text})}
                placeholder="Username"/>
                <TextInput style={styles.input}
                onChange={(text)=> this.setState({ password : text})}
                placeholder="Password"
                secureTextEntry={true}/>
                <TouchableHighlight
                onPress={this.onLoginPressed.bind(this)}
                style={styles.button}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableHighlight>

                {errorCtrl}
                
                <ActivityIndicator
                animating={this.state.showProgress}
                size='large'
                style={styles.loader}/>

            </View>
        );
    }
    onLoginPressed(){
        console.log('Attemptig to login');
        this.setState({showProgress: true});
        var b = new buffer.Buffer(this.state.username + ':' + this.state.password);
        var encodedAuth = b.toString('base64');
        console.log(b.toString('base64'))
        fetch('https://api.github.com/user',{
            headers: {
                'Authorization' : 'Basic ' + encodedAuth
            }
        })
        .then(()=>{
            if(response.status >= 200 && response.status < 300){
                return response
            }
            throw {
                badCredentials : response.status == 401,
                unknownError : response.status != 401
            }
        })
        .then((response) =>{
            return response.json();
        })
        .then((result) =>{
            console.log(result);
            this.setState({ success : true})
        })
        .catch((err)=> {
            this.setState(err);
        })
        .finally(()=>{
            this.setState({showProgress: false});
        })
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

    },
    loader : {
        marginTop : 20,
    },
    error : {
        color : 'red',
        paddingTop : 10
    }
})