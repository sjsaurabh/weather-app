import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
  } from 'react-native';
  import React, {useState} from 'react';
  
  import Icon from 'react-native-vector-icons/Ionicons';
  import Cards from './Cards';
  
  export default function Home(props) {
    const [city, setCity] = useState('');
  
    const cities = [
      {
        name: 'Bangalore',
        image: require('../assets/backgroundImages/img/haze.jpg'),
      },
      {
        name: 'france',
        image: require('../assets/backgroundImages/img/rainy.jpg'),
      },
      {
        name: 'London',
        image: require('../assets/backgroundImages/img/snow.jpg'),
      },
      {
        name: 'spain',
        image: require('../assets/backgroundImages/img/sunny.jpg'),
      },
      {
        name: 'sydeny',
        image: require('../assets/backgroundImages/img/haze.jpg'),
      },
    ];
  
    return (
      <View>
        <ImageBackground
          source={require('../assets/backgroundImages/img/Bangalore.jpg')}
          style={{height: "100%", width: "100%"}}
          imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
        />
        <View
          style={{
            position: 'absolute',
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}>
         
  
          <View style={{paddingHorizontal: 20, marginTop: 100}}>
            <Text style={{fontSize: 40,paddingHorizontal: 80, color: 'white'}}>Weather</Text>
            <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
              Search the city by the name
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: 'white',
                marginTop: 16,
                paddingHorizontal: 10,
              }}>
              <TextInput
                value={city}
                onChangeText={val => setCity(val)}
                placeholder="Search City"
                placeholderTextColor="white"
                style={{paddingHorizontal: 15, color: 'white', fontSize: 16,height:20}}
              />
              <TouchableOpacity onPress={() => props.navigation.navigate('Details', {name: city})}>
                <Icon name="search" size={22} color="white" />
              </TouchableOpacity>
            </View>
  
            <Text style={{color: 'white', fontSize: 25, paddingHorizontal: 10, marginTop: 20, marginBottom: 20}}>
              My Locations
            </Text>
            <FlatList
            horizontal
              data={cities}
              renderItem={({item}) => (
                <Cards name={item.name} image={item.image} navigation={props.navigation} />
              )}
            />
          </View>
        </View>
      </View>
    );
  }