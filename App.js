import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import {DATA} from './Data';
import Row from './Row';

export default function App() {
  
  /*
  function renderItem({item}) {
    return  (<Text>{item.lastname}</Text>);
  }
  

  const renderItem = ({item}) => (
    <Text>{item.lastname}</Text>
  );
  */

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem = {({item}) => (
          <Row person={item} />
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


 /*
 

    renderItem = {({item}) => (
          <Text>{item.lastname}</Text>
        )}
*/