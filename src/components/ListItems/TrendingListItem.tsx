import { View, Text, Image } from "react-native";
import React from "react";
import { News } from "@/types/types";
import NewsListItemFooter from "../NewsListItemFooter";

type Props = {
  newsArticle: News;
};

const TrendingListItem = ({ newsArticle }: Props) => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 20, gap: 15 }}>
      <View
        style={{
          backgroundColor: "#FA8128",
          height: 35,
          width: 35,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          1
        </Text>
      </View>
      <View
        style={{
          gap: 25,
          flex: 1,
          borderBottomWidth: 0.5,
          borderBlockColor: "lightgrey",
          paddingBottom: 10
        }}
      >
        <View style={{ gap: 5 }}>
          <Image
            source={require("@assets/black-logo.png")}
            style={{ width: 50, height: 20 }}
            resizeMode="contain"
          />
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {newsArticle.title}
          </Text>
        </View>

        <NewsListItemFooter
          publishedDate={newsArticle.created_at}
          author={newsArticle.author}
        />
      </View>
    </View>
  );
};

export default TrendingListItem;
