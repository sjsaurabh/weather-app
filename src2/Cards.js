import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";

export default function Cards({ name, image, navigation }) {
  return (
    <TouchableOpacity
      style={{ marginHorizontal: 10 }}
      onPress={() => navigation.navigate("Details", { name })}
    >
      <ImageBackground
        source={image}
        style={{ height: 100, width: 100 }}
        imageStyle={{ borderRadius: 16 }}
      />
      <View style={{ position: "absolute", height: "100%", width: "100%" }}>
        <Text
          style={{
            fontSize: 20,
            width: "100%",
            height: "100%",
            textAlign: "center",
            textAlignVertical: "center",
            color: "blue",
            fontWeight:"600"
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
