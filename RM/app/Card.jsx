import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import React from "react";

const Card = () => {
    
  return (
    <View>
       <Image></Image>
    </View>   
  )
  
}

const cardStyles = StyleSheet.create({
 
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 8,
    alignSelf: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
 
    innerContainer: {
    margin: 15,
    borderWidth: 5,    
    borderColor: 'black',
    alignItems: 'center',
  },
 
  itemText: {
    fontSize: 22,
    padding: 8,
  },
 
})



export default Card;