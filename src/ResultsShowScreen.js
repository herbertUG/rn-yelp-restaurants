import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "./api/yelp";
import { Header } from "react-native/Libraries/NewAppScreen";

const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const [business, setBusiness] = useState(null);

  console.log(business);

  const getBusiness = async id => {
    const response = await yelp.get(`/${id}`);
    setBusiness(response.data);
  };

  useEffect(() => {
    getBusiness(id);
  }, []);

  if (!business) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{business.name}</Text>
      <FlatList
        data={business.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imgStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: 300,
    height: 250,
    marginTop: 10,
    borderRadius: 5,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: 10
  }
});

export default ResultShowScreen;
