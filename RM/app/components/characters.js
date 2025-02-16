import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import React from "react";

const Characters = ( { data } ) => {

    const [characters, setCharacters] = useState([]);
    const [pageNumber, setPageNumber] = useState([1]);
    let { info, results } = characters;
    
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
    
    useEffect(() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json());
          setCharacters(data.results);
        })();}
        , [api]);
    
    let display;
  
    if (results) {
       display = (
          <View style={styles.container}>
            <FlatList 
              data={results}
              keyExtractor={item => item.id}
              renderItem={( { item } ) => 
              <View style={styles.innerContainer}>
                <Image 
                source={{uri: item.image}} 
                style={{width: 300, height: 300}}/>
                <Text style={styles.itemText}>Name: {item.name}</Text>
              </View>} 
            />
          </View>
       );
    } else {
      display= 'No Characters Found'
    }
    return <>{display}</>
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
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
    }
 })

export default Characters;