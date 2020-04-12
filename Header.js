import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import Logo from './logo2.png';
const Header = () => {
  return (
    <Image style={styles.logo}
                source={Logo}/>
  )
};
const styles = StyleSheet.create({
  viewStyles: {
    margin: 9,
    marginTop: 20,
    padding: 9,
    fontSize: 32,
    shadowColor: '#ddd',
    backgroundColor: '#f8f8f8',
    paddingTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderColor: '#fff',
    borderBottomWidth: 4,
  }
})
export default Header;