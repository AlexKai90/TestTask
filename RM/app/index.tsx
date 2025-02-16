import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import React from "react";



const Index = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState('https://rickandmortyapi.com/api/character');
       

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
    setNextPage(responseJson.info.next);

    setLoading(false);
  }

  useEffect(() => {
    fetchNextPage();
  }, []);

  return (
    <SafeAreaView>
      <Text style={indexStyles.title}>Rick and Morty character list</Text>
      <FlatList 
        data={characters}
        keyExtractor={item => item.id}
        renderItem={( { item } ) => 
        <View style={indexStyles.innerContainer}> 
          <Image 
          source={{uri: item.image}} 
          style={{width: 300, height:300}}/>
          <Text style={indexStyles.itemText}>Name: {item.name}</Text>
        </View>} 
        onEndReached={fetchNextPage}
        onEndReachedThreshold={4}
        ListFooterComponent={() =>(
          <View>{loading && <ActivityIndicator />}</View>)}
      />
    </SafeAreaView>   
  )
  
}

const indexStyles = StyleSheet.create({
 
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 8,
    alignSelf: 'center',
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



export default Index;