import { View, Text } from "react-native";
import React from "react";
import { News } from "@/types/types";

type Props = {
  newsArticle: News;
};

const TrendingListItem = ({ newsArticle }: Props) => {
  return (
    <View>
      <Text>Trending</Text>
    </View>
  );
};

export default TrendingListItem;
