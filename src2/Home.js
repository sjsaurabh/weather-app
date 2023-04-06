import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Cards from "./Cards";

export default function Home(props) {
  const [city, setCity] = useState("");

  const cities = [
    {
      name: "Delhi",
      image: require("../assets/backgroundImages/img/france.jpg"),
    },
    {
      name: "France",
      image: require("../assets/backgroundImages/img/Bangalore.jpg"),
    },
    {
      name: "sydney",
      image: require("../assets/backgroundImages/img/Portugal.jpg"),
    },
    {
      name: "London",
      image: require("../assets/backgroundImages/img/spain.jpg"),
    },
    {
      name: "New York",
      image: require("../assets/backgroundImages/img/Sydney.jpg"),
    },
  ];

  return (
    <View>
      <ImageBackground
        source={require("../assets/backgroundImages/img/haze.jpg")}
        style={{ height: "100%", width: "100%" }}
        imageStyle={{ opacity: 0.6, backgroundColor: "black" }}
      />
      <View
        style={{
          position: "absolute",
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
      >
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
            Weather Search by the city name
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 16,
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              value={city}
              onChangeText={(val) => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={{ paddingHorizontal: 10, color: "white", fontSize: 16 }}
            />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("Details", { name: city })
              }
            >
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: "white",
              fontSize: 15,
              paddingHorizontal: 1,
              margin: 8,
            }}
          >
            My Locations
          </Text>
          <View>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
              data={cities}
              renderItem={({ item }) => (
                <View style={{ margin: 5 }}>
                  <Cards
                    name={item.name}
                    image={item.image}
                    navigation={props.navigation}
                  />
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
