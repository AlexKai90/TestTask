import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import React from "react";

const Card = ({characters}) => {
    
  return (
    <View style={cardStyles.container}>
       <Image source={{uri: this.characters.image}} style={{width: 300, height:300}}/>
       <Text style={cardStyles.itemText}>Name: {this.characters.name}</Text>
       <Text style={cardStyles.itemText}>Status: {this.characters.status.value}</Text>
       <Text style={cardStyles.itemText}>Species: {this.characters.species}</Text>
       <Text style={cardStyles.itemText}>Type: {this.characters.type}</Text>
       <Text style={cardStyles.itemText}>Gender: {this.characters.gender}</Text>
       <Text style={cardStyles.itemText}>Origin: {this.characters.origin.name}</Text>
       <Text style={cardStyles.itemText}>Last location: {this.characters.location.name}</Text>
    </View>   
  )
  
}

const cardStyles = StyleSheet.create({
 
  container: {
    flex: 1,
    flexDirection: 'column',    
    alignItems: 'center',
  },
 
  itemText: {
    fontSize: 22,
    padding: 8,
  },
 
})



export default Card;