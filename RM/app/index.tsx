import { View, Text, Image, StyleSheet, FlatList, StatusBar } from "react-native";
import { useEffect, useState } from "react";
import React from "react";



const Index = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, [])

  const getCharacters = () => {
    let api = `https://rickandmortyapi.com/api/character`;
    
    fetch(api)
    .then((res) => {
      return res.json();
    }).then(data=>{
      setCharacters(data.results)
      console.log(data.results)
    }) 
  };

  return (
    
      <View style={indexStyles.container}>
        <Text style={indexStyles.title}>Rick&Morty Character List</Text>
        <FlatList 
          data={characters}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={( { item } ) => 
          <View style={indexStyles.innerContainer}>
            <img src={item.image} />
            <Text>{item.name}</Text>
          </View>} 
        />
      </View>
    
  );
};

const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
  },

  innerContainer: {
    margin: 15,

  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },

})

export default Index;