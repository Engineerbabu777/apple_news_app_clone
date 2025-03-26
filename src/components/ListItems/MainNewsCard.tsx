import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { News } from "@/types/types";
import NewsListItemFooter from "../NewsListItemFooter";

type Props = {
  newsArticle: News;
};

const MainNewsCard = ({ newsArticle }: Props) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginBottom: 15,
        borderRadius: 10
      }}
    >
      <Image source={{ uri: newsArticle?.image }} style={styles.mainImage} />

      <View style={{ padding: 10 }}>
        <Image
          source={require("@assets/black-logo.png")}
          style={{
            width: 60,
            height: 20,
            marginBlock: 5
          }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 20, fontWeight: "bold",marginBottom:25 }}>
          {newsArticle?.title}
        </Text>

        <NewsListItemFooter
          author={newsArticle.author}
          publishedDate={newsArticle.created_at}
        />
      </View>
    </View>
  );
};

export default MainNewsCard;

const styles = StyleSheet.create({
  mainImage: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }
});
