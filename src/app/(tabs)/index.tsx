import NewsListItem from "@/components/ListItems/NewsListItem";
import { SafeAreaView, SectionList, Text, View } from "react-native";
import homeNews from "@assets/data/homeNews.json";
import MainNewsCard from "@/components/ListItems/MainNewsCard";
import TrendingListItem from "@/components/ListItems/TrendingListItem";
import { AntDesign } from "@expo/vector-icons";
const TITLES = {
  TOP_STORIES: "Top Stories",
  TRENDING: "Trending",
  FOR_YOU: "For You"
};
export default function HomeScreen() {
  const date = new Date();
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

  const renderItem = ({ item, index, section }) => {
    switch (section.title) {
      case TITLES.TOP_STORIES:
        return index === 0 ? (
          <MainNewsCard newsArticle={item} />
        ) : (
          <NewsListItem newsArticle={item} />
        );
      case TITLES.TRENDING:
        return <TrendingListItem newsArticle={item} index={index + 1} />;
      case TITLES.FOR_YOU:
        return <NewsListItem newsArticle={item} />;
      default:
        return null;
    }
  };
  return (
    <SafeAreaView
      style={{
        marginHorizontal: 10
      }}
    >
      <SectionList
        ListHeaderComponent={
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="apple1" size={24} color={"black"} />
              <Text style={{ fontSize: 27, fontWeight: "800" }}>News</Text>
            </View>
            <Text
              style={{
                fontSize: 27,
                fontWeight: "800",
                color: "grey"
              }}
            >
              {date.toLocaleString("default", {
                month: "long",
                day: "numeric"
              })}
            </Text>
          </View>
        }
        sections={homeNews}
        renderItem={renderItem}
        renderSectionHeader={({ section }) =>
          renderSectionHeader(section?.title)
        }
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
