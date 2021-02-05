import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { FlatList, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import {DATA} from './Data';
import Row from './Row';
import Search from './Search';

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA);
  }, [])


  /*
  function renderItem({item}) {
    return  (<Text>{item.lastname}</Text>);
  }
  

  const renderItem = ({item}) => (
    <Text>{item.lastname}</Text>
  );
  */

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
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
    margin: 10
  },
});


 /*
 

    renderItem = {({item}) => (
          <Text>{item.lastname}</Text>
        )}
*/