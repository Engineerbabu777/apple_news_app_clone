import NewsListItem from "@/components/NewsListItem";
import { Text, View } from "react-native";
import allNews from "@assets/data/allNews.json";

export default function HomeScreen() {
  return (
    <View
      style={{
        marginTop: 60
      }}
    >
      <NewsListItem newsArticle={allNews[0]} />
      <NewsListItem newsArticle={allNews[1]} />
      <NewsListItem newsArticle={allNews[2]} />
      <NewsListItem newsArticle={allNews[3]} />
    </View>
  );
}
