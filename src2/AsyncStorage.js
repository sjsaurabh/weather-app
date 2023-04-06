import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function AsyncStorageApp() {
    const [user,setUser]=useState('')
    const setData=async()=>{
       await AsyncStorage.setItem("name",'sany')
    }
    const getData=async()=>{
     const name=   await AsyncStorage.getItem("name")
     console.log(name);
     
    }
    const removeData=async()=>{
        await AsyncStorage.removeItem('user');
        setUser('')
        console.log('data removed');
    }
  return (
    <View style={{margin:30}}>
      <Text>AsyncStorage |{user}</Text>
      <Button title='setData' onPress={setData}/>
      <Button title='getData'onPress={getData}/>
      <Button title='Remove'onPress={removeData}/>
    </View>
  )
}

const styles = StyleSheet.create({})