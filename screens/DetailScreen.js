import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import react from "react";

const DetailScreen = ({ route, navigation }) => {
  const { id, title } = route.params;

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //getData() for get data fron backend
  const getData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.codingthailand.com/api/course/" + id
      );
      // alert(JSON.stringify(res.data.data));
      setDetail(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  react.useLayoutEffect(() => {
    navigation.setOptions({
      // title: "รายละเอียดสินค้า", //set แบบ Static
      title: title, //set แบบ Dynmic
    });
  }, [navigation, title]);

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color={"#f4511e"} size="large" />
      </View>
    );
  }

  const _onRefresh = () => {
    getData(id);
  };
  const itemSeperatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, margin: 5, flexDirection: "row" }}>
          <Text style={styles.thumbnail}>{index + 1}</Text>
          <View style={styles.dataContainer}>
            <View style={styles.dataContent}>
              <Text style={styles.title}>{item.ch_title}</Text>
              <Text>{item.ch_dateadd}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={detail}
        keyExtractor={(item, index) => item.ch_id.toString()}
        ItemSeparatorComponent={itemSeperatorView}
        renderItem={_renderItem}
        refreshing={loading}
        onRefresh={_onRefresh}
      />
    </View>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  dataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 30,
    height: 30,
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
    fontAligh: "center",
  },
  dataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
  },
});
