import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  ImageBackground,
} from 'react-native';
import Card from '../components/Card';
import {CATEGORIES} from '../data/category';
import Category from '../models/Category';

const FoodCategories = (props) => {
  const renderItem = (item: ListRenderItemInfo<Category>) => {
    return (
      <Card
        onPress={() => {
          props.navigation.navigate({
            routeName: 'Options',
            params: {
              id: item.item.id,
            },
          });
        }}
        style={{
          elevation: 10,
          justifyContent: 'flex-end',
          borderRadius: 10,
          overflow: 'hidden',
          aspectRatio: 1
        }}
      >
        <ImageBackground source={item.item.color} style={styles.tileBackground}>
          <Text style={{...styles.tileText, color: item.item.tint}}>{item.item.name}</Text>
        </ImageBackground>
      </Card>
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
      columnWrapperStyle={{justifyContent: 'center'}}
        numColumns={2}
        horizontal={false}
        data={CATEGORIES}
        renderItem={(item) => renderItem(item)}
      />
    </View>
  );
};

FoodCategories.navigationOptions = {
  title: 'Food Categories',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  tileText: {
    alignSelf: 'flex-start',
    margin: 10,
    fontWeight: '700'
  },
  tileBackground: {
    height: '100%',
    width: '100%',
    flex: 1,
    resizeMode: 'contain',
  }
});

export default FoodCategories;
