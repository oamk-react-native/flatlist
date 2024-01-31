import React,{useState,useEffect} from 'react';
import { FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {DATA} from './Data';
import Row from './components/Row';
import Search from './components/Search';
import Add from './components/Add';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@persons_key'

export default function App() {
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    //setItems(DATA);
    getData()
  }, [])

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  }

  const select = (id) => {
    setSelectedId(id);
  }

  const storeData = async(value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(STORAGE_KEY,jsonValue)
    } catch (ex) {
      console.log(ex)
    }
  }

  const getData = async(value) => {
    try { 
      const value = await  AsyncStorage.getItem(STORAGE_KEY)
      const json = JSON.parse(value)
      if (json === null) {
        json = []
      }
      console.log(json)
      setItems(json)
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <Add items={items} setItems={setItems} storeData={storeData}/>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        renderItem = {({item}) => (
          <Row person={item} selectedId={selectedId} select={select}/>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    margin: 10,
  },
});
