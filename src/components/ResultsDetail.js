import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.cardStyle}>
      <Image style={styles.imgStyle} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.reviews}>
        {result.rating} Stars, {result.review_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: 200,
    height: 120,
    borderRadius: 5
  },
  name: {
    fontWeight: "bold"
  },
  cardStyle: {
    margin: 10,
    alignContent: "center"
  }
});

export default ResultsDetail;
