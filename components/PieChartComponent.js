// PieChartComponent.js
import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const PieChartComponent = () => {
  const data = [
   {
     name: 'Direct',
      population: 18,
      color: '#ff6384',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Organic Search',
      population: 49,
      color: '#36a2eb',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Paid Search',
      population: 9,
      color: '#ffce56',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Referral',
      population: 5,
      color: '#4bc0c0',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Social',
      population: 19,
      color: '#9966ff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Website Traffic Sources</Text>
      <PieChart
        data={data}
        width={300} // Adjust the width as needed
        height={220} // Adjust the height as needed
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute // If you want to show the values as absolute numbers
      />


      
    </View>
  );
};

export default PieChartComponent;
