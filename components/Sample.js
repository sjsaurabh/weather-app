rnfs
const [city, setCity] = useState('');
const cities = [
    {
      name: 'New Delhi',
      image: require('../weatherApp/assets/backgroundImages/img/haze.jpg'),
    },
    {
      name: 'New York',
      image: require('../weatherApp/assets/backgroundImages/img/rainy.jpg'),
    },
    {
      name: 'London',
      image: require('../weatherApp/assets/backgroundImages/img/snow.jpg'),
    },
    {
      name: 'San Francisco',
      image: require('../weatherApp/assets/backgroundImages/img/sunny.jpg'),
    },
    {
      name: 'New Jersey',
      image: require('../weatherApp/assets/backgroundImages/img/haze.jpg'),
    },
  ];

  <View>
  <Text style={{color: 'white', fontSize: 25, paddingHorizontal: 10, marginTop: 220, marginBottom: 20}}>
My Locations
</Text>
<FlatList
horizontal
data={cities}
renderItem={({item}) => (
   <View>
    <Text>{item.name}</Text>
   </View>
  
)}
/>
  </View>