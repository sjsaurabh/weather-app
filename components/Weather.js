import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar,FlatList, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import SearchBar from './SearchBar';
import { haze, rainy, snow, sunny } from '../assets/backgroundImages/index';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function Weather({ weatherData, fetchWeatherData }) {
  const navigation = useNavigation();
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [cityName, setCityName] = useState('');
    const cities = (
    [
      {
        name: 'Bengaluru',
        image: require('../assets/backgroundImages/img/Bangalore.jpg')
        
      },
      {
        name: 'Sydney',
        image: require('../assets/backgroundImages/img/Sydney.jpg')
      },
      {
        name: 'Portugal',
        image: require('../assets/backgroundImages/img/Portugal.jpg')
      },
      {
        name: 'France',
        image: require('../assets/backgroundImages/img/france.jpg')
      },
      {
        name: 'spain',
        image: require('../assets/backgroundImages/img/spain.jpg')
      },
    ]);
    const { weather,
            name,
            main: { temp, humidity },
            wind: { speed }
    } = weatherData;
    const [{ main }] = weather;

    useEffect(() => {
        setBackgroundImage(getBackgroundImg(main));
    }, [weatherData])

    function getBackgroundImg(weather) {
        if(weather === 'Snow') return snow
        if(weather === 'Clear') return sunny
        if(weather === 'Rain') return rainy
        if(weather === 'Haze') return haze
        return haze;   
    }

    let textColor = backgroundImage !== sunny ? 'white' : 'black'

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='darkgray' />
            <ImageBackground 
                source={backgroundImage}
                style={styles.backgroundImg}
                resizeMode='cover'
            >
                <SearchBar fetchWeatherData={fetchWeatherData} />

                <View style={{alignItems: 'center' }}>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold', fontSize: 46 }}>{name}</Text>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold'}}>{main}</Text>
                    <Text style={{ ...styles.headerText, color: textColor,}}>{temp} °C</Text>
                </View>

                <View style={styles.extraInfo}>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Humidity</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{humidity} %</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Wind Speed</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{speed} m/s</Text>
                    </View>

                </View>
              
              <View style={{
                width:"100%",
                height:"50%",
             
                alignSelf:"center",
               
            }}>
            <Text style={{paddingHorizontal:10,color:'white',fontSize:30,}}>favorite Locations</Text>
            
              <FlatList
              data={cities}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item})=>{
                return(
                  <TouchableWithoutFeedback onPress={() => navigation.navigate('App1')}>
                  <View style={{margin:10,padding:10,}}>
                 <Text  style={{fontSize:20,color:'white',paddingLeft:50}}>{item.name}</Text>
                 <Image
                 style={{
                   width:200,
                   height:150,
                   borderWidth:2,
                   borderColor:'#d35647',
                   resizeMode:'contain',
                   margin:8
                  }}
                  
                  source={item.image}
                  />
                  </View>
                  </TouchableWithoutFeedback>
                )
              }}
              />
              </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    headerText: {
        fontSize: 36,
        marginTop: 10,
    },
    extraInfo: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        padding: 10
    },
    info: {
        width: Dimensions.get('screen').width/2.5,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center'
    }
});
