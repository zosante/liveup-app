import React, { Component, useState } from 'react';
import {Text, View, StyleSheet, Picker, Dimensions} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';

const TabIcon = (props) => (
  <Ionicons
    name={'ios-add-circle-outline'}
    size={35}
    color={props.focused ? 'blue' : 'gray'}
  />
)

const deviceWidth = Dimensions.get('window').width;

class AddSymptoms extends Component{
    constructor(props){
        super(props)
            this.state = {
                symptom: '',
                starCount: 0,
                wordCount: ''
                
        }
    }

    static navigationOptions = {
        tabBarIcon: TabIcon
      };

      onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
        if(rating >= 1 || rating <= 3){
            this.setState({
                wordCount: 'fair'
            })
        }
        if(rating == 3){
            this.setState({
                wordCount: 'bad'
            })
        }
        if(rating >= 4){
            this.setState({
                wordCount: 'worse'
            })
        }
      }
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Add new symptom</Text>
                <Picker
                    style={{width: 300}}
                    selectedValue={this.state.symptom}
                    onValueChange={(set) => this.setState({symptom: set})}>
                    <Picker.Item label="Cough" value="Cough" />
                    <Picker.Item label="Fever" value="Fever" />
                    <Picker.Item label="Headache" value="Headache" />
                    <Picker.Item label="tiredness" value="tiredness" />
                    <Picker.Item label="difficulty breathing" value="difficulty breathing" />
                </Picker>
                <StarRating
                    disabled={false}
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                    rating={this.state.starCount}
                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                    fullStarColor={'red'}
                />
                <Text style={styles.text}>
                    Selected: {this.state.symptom}
                </Text>
                <Text style={styles.text}>
                    RatingInNum: {this.state.starCount}
                </Text>
                <Text style={styles.text}>
                    RatingInText: {this.state.wordCount}
                </Text>
            </View>
        );
    }
}

export default AddSymptoms;

const styles = StyleSheet.create({

    container : {
        backgroundColor : '#F5FCFF',
        flex: 1,
        paddingTop: 40,
        alignItems: "center",
        padding : 10,
        width: deviceWidth

    },
    welcome : {
        fontSize : 20,
        textAlign : 'center',
        margin : 10
    },
    text : {
        fontSize : 30,
        color: '#191970',
        marginTop: 30
    }
    
        
});