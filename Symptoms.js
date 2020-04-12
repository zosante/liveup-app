import React, { Component } from 'react';
import {Text, View, StyleSheet, FlatList, SafeAreaView, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Fever',
      rate : '2',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Cough',
      rate : '3',
    },
    {
      id: '58694a0f-d456-471f-bd96-145571e29d72',
      title: 'Headache',
      rate : '4',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Flu',
        rate : '2',
      },
      {
        id: '58694a0f-f678-471f-bd96-145571e29d72',
        title: 'Pain',
        rate: '1'
      },
  ];
  function Item({ title, rate }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <StarRating
                    disabled={false}
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                    rating={rate}
                    fullStarColor={'red'}
                />
      </View>
    );
  }

const TabIcon = (props) => (
  <Ionicons
    name={'md-home'}
    size={35}
    color={props.focused ? 'blue' : 'gray'}
  />
)
const deviceWidth = Dimensions.get('window').width;

class Symptoms extends Component{

    static navigationOptions = {
        tabBarIcon: TabIcon
      };
      
    
    render(){
        return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Your Symptoms</Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} rate={item.rate} />} 

                keyExtractor={item => item.id}
            />
      </SafeAreaView>
        );
    }
}

export default Symptoms;

const styles = StyleSheet.create({

    container : {
        backgroundColor : '#F5FCFF',
        flex: 1,
        alignItems: "center",
        width: deviceWidth
    },
    text : {
        fontSize : 30,
        color: '#191970',
        marginTop : 30
    },
    item: {
        backgroundColor: '#e6e6fa',
        padding: 20,
        marginTop: 10,
        width: deviceWidth
      },
      title: {
        fontSize: 32,
      },
        
});