import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import ResultsDetail from "../components/ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, results, navigation }) => {
  // using a Flatlist we shall use it to display data that we need to be following horizontally.
  if (!results.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        data={results}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { id: item.id })}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10
  }
});

export default withNavigation(ResultList);
