import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { formatDistanceToNow } from "date-fns";
import { MaterialCommunityIcons } from "@expo/vector-icons";
type Props = {
  newsArticle: any;
};

const NewsListItem = ({ newsArticle }: Props) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        gap: 10,
        margin: 10,
        borderRadius: 10
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexShrink: 1,
            marginRight: 15,
            gap: 5
          }}
        >
          <Image
            source={require("@assets/black-logo.png")}
            style={{
              width: 50,
              height: 20
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold"
            }}
          >
            {newsArticle.title}
          </Text>
        </View>

        <Image
          source={{ uri: newsArticle.image }}
          style={{
            width: 100,
            aspectRatio: 1,
            borderRadius: 10,
            marginLeft: "auto"
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 5
        }}
      >
        <Text>
          {formatDistanceToNow(newsArticle.created_at, { addSuffix: true })}
        </Text>
        <Text>&#x2022;</Text>
        <Text>{newsArticle.author.name}</Text>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={22}
          color="grey"
          style={{ marginLeft: "auto" }}
        />
      </View>
    </View>
  );
};

export default NewsListItem;

const styles = StyleSheet.create({});
