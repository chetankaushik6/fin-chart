// ListChartComponent.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListChartComponent = () => {
  const data = [
    {
      name: 'Direct',
      population: 18,
      color: '#ff6384',
    },
    {
      name: 'Organic Search',
      population: 49,
      color: '#36a2eb',
    },
    {
      name: 'Paid Search',
      population: 9,
      color: '#ffce56',
    },
    {
      name: 'Referral',
      population: 5,
      color: '#4bc0c0',
    },
    {
      name: 'Social',
      population: 19,
      color: '#9966ff',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={[styles.colorBox, { backgroundColor: item.color }]} />
      <Text style={styles.text}>{item.name}: {item.population}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Website Traffic Sources</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  colorBox: {
    width: 120,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default ListChartComponent;
