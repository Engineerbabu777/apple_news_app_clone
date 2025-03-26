import NewsListItem from "@/components/ListItems/NewsListItem";
import { FlatList, SectionList, Text, View } from "react-native";
import allNews from "@assets/data/allNews.json";
import { News } from "@/types/types";
import homeNews from "@assets/data/homeNews.json";
import MainNewsCard from "@/components/ListItems/MainNewsCard";

const TITLES = {
  TOP_STORIES: "Top Stories",
  TRENDING: "Trending",
  FOR_YOU: "For You"
};
export default function HomeScreen() {
  const renderSectionHeader = (title: string) => {
    if (title === TITLES.TOP_STORIES) {
      return (
        <View style={{ gap: 5, marginBottom: 10, marginTop: 40 }}>
          <Text style={{ color: "#FC3C44", fontSize: 25, fontWeight: "800" }}>
            Top Stories
          </Text>
          <Text style={{ color: "#AAAAAA" }}>
            Chosen by the Apple News editors.
          </Text>
        </View>
      );
    }

    if (title === TITLES.TRENDING) {
      return (
        <View style={{ marginBottom: 10, marginTop: 40 }}>
          <Text style={{ color: "#EC9706", fontSize: 25, fontWeight: "800" }}>
            Trending Stories
          </Text>
        </View>
      );
    }

    if (title === TITLES.FOR_YOU) {
      return (
        <View style={{ gap: 5, marginBottom: 10, marginTop: 20 }}>
          <Text style={{ color: "#3CB043", fontSize: 25, fontWeight: "800" }}>
            For You
          </Text>
          <Text style={{ color: "#AAAAAA" }}>
            Recommendations based on topics & channels you read.
          </Text>
        </View>
      );
    }

    return null;
  };
  return (
    <View
      style={{
        marginTop: 60,
        margin: 15
      }}
    >
      <SectionList
        sections={homeNews}
        renderItem={({ item }: { item: News }) => (
          <MainNewsCard key={item.id} newsArticle={item} />
        )}
        renderSectionHeader={({ section }) =>
          renderSectionHeader(section?.title)
        }
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
