import { View, Text, FlatList, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Cards = ( { results }) => {
  console.log(results);
    return (  
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    data={results}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.item} key={item.id}>
                                <Text style={styles.title}>{item.name}</Text>
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    )}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default Cards;