import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import featuredMagazines from "@assets/data/featuredMagazines.json";
import MagazineListItem from "@/components/ListItems/MagazineListItem";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const NewPlusScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <FlatList
        data={featuredMagazines}
        renderItem={({ item }) => <MagazineListItem magazine={item}/>}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default NewPlusScreen;

const styles = StyleSheet.create({});
