import { Link, Redirect } from 'expo-router';
import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator, StatusBar, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { Pressable, Linking } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Card from './Card';

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState('https://rickandmortyapi.com/api/character');
  const [filteredCharacters, setFilterCharacters] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  const fetchNextPage = async () => {
    if (loading) {
      return;
    }
    
    setLoading(true);
    const response = await fetch(nextPage);
    const responseJson = await response.json();
    console.log(JSON.stringify(responseJson));
      
    setCharacters((existingCharacters) => {
      return [...existingCharacters, ...responseJson.results];
      });
      setFilterCharacters((existingFilterCharacters) => {
      return [...existingFilterCharacters, ...responseJson.results];
      });
    setNextPage(responseJson.info.next);

    setLoading(false);
  }

  useEffect(() => {
    fetchNextPage();
  }, []);

  useEffect(() => {
    let filtered;
    if (selectedCategory === 'All') {
      setFilterCharacters(characters);
    } else if(selectedCategory === 'Alive') {
      filtered = characters.filter(character => character.status === selectedCategory);
      setFilterCharacters(filtered);
    } else if(selectedCategory === 'Dead') {
      filtered = characters.filter(character => character.status === selectedCategory);
      setFilterCharacters(filtered);
    } else if(selectedCategory === 'unknown') {
      filtered = characters.filter(character => character.status === selectedCategory);
      setFilterCharacters(filtered);
    } else if(selectedCategory === 'Alien') {
      filtered = characters.filter(character => character.species === selectedCategory);
      setFilterCharacters(filtered);
    } else if(selectedCategory === 'Human') {
      filtered = characters.filter(character => character.species === selectedCategory);
      setFilterCharacters(filtered);
    }
  }, [selectedCategory, characters]);

  // i am not sure, how a user should be taken to a screen with detailed info, tried many various props, nothing worked out for me

   const onPress = () => <Card characters={characters}/>; 
  
  return (
    
    <View style={homeStyles.container}> 
      <Text style={homeStyles.title}>Rick and Morty character list</Text>

      <View style={homeStyles.picker}>                         
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) =>
            setSelectedCategory(itemValue)
          }>
          <Picker.Item label="All" value="All" />
          <Picker.Item label="status: alive" value='Alive'/>
          <Picker.Item label="status: dead" value="Dead" />
          <Picker.Item label="status: unknown" value="unknown" />
          <Picker.Item label="species: alien" value="Alien" />
          <Picker.Item label="species: human" value="Human" />
        </Picker>
      </View>
      
      <View style={homeStyles.flatList}>
        <FlatList 
          data={filteredCharacters}
          keyExtractor={item => item.id}
          renderItem={( { item } ) => 
          <TouchableOpacity style={homeStyles.innerContainer} onPress={onPress}>
            <Image 
            source={{uri: item.image}} 
            style={{width: 300, height:300}}/>
            <Text style={homeStyles.itemText}>Name: {item.name}</Text>
          </TouchableOpacity>} 
          onEndReached={fetchNextPage}
          onEndReachedThreshold={4}
          ListFooterComponent={() =>(
            <View>{loading && <ActivityIndicator />}</View>)}
        />
      </View>
      
    
   
    </View>
   
   
  )
  
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

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

  flatList: {
    flex: 1,
  },


  button: {
    fontSize: 22,
    padding: 7,
    color: 'white',
  },
 
})

export default Index;


