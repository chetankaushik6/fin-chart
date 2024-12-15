// BarChartComponent.js
import React from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const BarChartComponent = () => {
  const data = {
    labels: ['Direct', 'Organic Search', 'Paid Search', 'Referral', 'Social'], // X-axis labels
    datasets: [
      {
        data: [18, 49, 9, 5, 19], // Corresponding data values
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Bar color
        strokeWidth: 2, // Optional
      },
    ],
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Website Traffic Sources</Text>
      <BarChart
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
        verticalLabelRotation={30} // Rotate labels if needed
        fromZero={true} // Start the y-axis from zero
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default BarChartComponent;