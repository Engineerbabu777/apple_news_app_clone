import NewsListItem from "@/components/NewsListItem";
import { FlatList, Text, View } from "react-native";
import allNews from "@assets/data/allNews.json";
import { News } from "@/types/types";

export default function HomeScreen() {
  return (
    <View
      style={{
        marginTop: 60
      }}
    >
      <FlatList
        data={allNews}
        renderItem={({ item }: { item: News }) => (
          <NewsListItem key={item.id} newsArticle={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
