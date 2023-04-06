import { View, ImageBackground, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";

export default function Details(props) {
  const [data, setData] = useState();
  const { name } = props.route.params;
  const API_KEY = "1a83a897cacaa5567f589fdceaaaf4de";
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
      
  }, []);
  
  const Data = ({ title, value }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "gray", fontSize: 22 }}>{title}</Text>
      <Text style={{ color: "white", fontSize: 22 }}>{value}</Text>
    </View>
  );

  return (
    <View>
      <ImageBackground
        source={require("../assets/backgroundImages/img/background.avif")}
        style={{ height: "100%", width: "100%" }}
        imageStyle={{ opacity: 1, backgroundColor: "black" }}
      />
      <View
        style={{
          position: "absolute",
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        {data ? (
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: 550,
            }}
          >
            <View>
              <Text style={{ color: "white", fontSize: 40 }}>{name}</Text>
              <Text
                style={{ fontSize: 22, color: "white", textAlign: "center" }}
              >
                {data["weather"][0]["main"]}
              </Text>
            </View>

            <Text style={{ color: "white", fontSize: 64 }}>
              {(data["main"]["temp"] - 273).toFixed(2)}&deg; C
            </Text>

            <View>
              <Text style={{ color: "white", fontSize: 22, marginBottom: 16 }}>
                Weather Details
              </Text>
              <View style={{ width: 380 }}>
                <Data value={data["wind"]["speed"]} title="Wind" />
                <Data value={data["main"]["pressure"]} title="Pressure" />
                <Data value={`${data["main"]["humidity"]}%`} title="Humidity" />
                <Data value={data["visibility"]} title="Visibility" />
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}
