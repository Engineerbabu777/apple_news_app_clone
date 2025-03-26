import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { News } from "@/types/types";
import NewsListItemFooter from "../NewsListItemFooter";

type Props = {
  newsArticle: News;
};

const MainNewsCard = ({ newsArticle }: Props) => {
  return (
    <View>
      <Image
        source={{ uri: newsArticle?.image }}
        style={{
          width: "100%",
          aspectRatio: 4 / 3
        }}
      />
      <Image
        source={require("@assets/black-logo.png")}
        style={{
          width: 60,
          height: 20,
          marginBottom: 5
        }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        {newsArticle?.title}
      </Text>

      <NewsListItemFooter
        author={newsArticle.author}
        publishedDate={newsArticle.created_at}
      />
    </View>
  );
};

export default MainNewsCard;

const styles = StyleSheet.create({});
