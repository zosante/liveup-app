import React, { Component } from 'react';
import {Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native'
import Inbox from './inbox.png';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Fever',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Cough',
    },
    {
      id: '58694a0f-d456-471f-bd96-145571e29d72',
      title: 'Headache',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Flu',
      },
      {
        id: '58694a0f-f678-471f-bd96-145571e29d72',
        title: 'Pain',
      },
  ];
  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
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
                renderItem={({ item }) => <Item title={item.title} />}
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
        paddingTop: 40,
        alignItems: "center",
        padding : 10,
        justifyContent: 'center',
        alignContent: 'center',
    },
    welcome : {
        fontSize : 20,
        textAlign : 'center',
        margin : 10
    },
    flex : {
        flex: 1,
        flexDirection: 'column', 
        backgroundColor : 'gray',
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
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
        
});