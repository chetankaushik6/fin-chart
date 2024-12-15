
import React, { useState } from 'react';
import { View, Text, Button, Dimensions, SafeAreaView, FlatList } from 'react-native';
import { PieChart, BarChart } from 'react-native-chart-kit';

// Sample data for the charts
const data = [
  {
    name: 'Laptops',
    population: 215000,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15
  },
  {
    name: 'Mobile Phones',
    population: 130000,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15
  },
  {
    name: 'Tablets',
    population: 98000,
    color: 'rgba(251, 118, 67, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15
  }
];

const graphData = {
  labels: ['Laptops', 'Mobile Phones', 'Tablets'],
  datasets: [
    {
      data: [215000, 130000, 98000]
    }
  ]
};

const ChartExample = () => {
  const [chartType, setChartType] = useState('pie'); // State for selected chart type

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Select Chart Type</Text>

      {/* Buttons to toggle between Pie Chart, Bar Chart, and List Chart */}
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <Button
          title="Pie Chart"
          onPress={() => setChartType('pie')}
        />
        <Button
          title="Bar Chart"
          onPress={() => setChartType('bar')}
        />
        <Button
          title="List Chart"
          onPress={() => setChartType('list')}
        />
      </View>

      {/* Show Pie Chart, Bar Chart, or List Chart based on the selected chart type */}
      {chartType === 'pie' && (
        <PieChart
          data={data}
          width={Dimensions.get('window').width - 50}
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      )}

      {chartType === 'bar' && (
        <BarChart
          data={graphData}
          width={Dimensions.get('window').width - 50}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#1e5128',
            backgroundGradientTo: '#1cc910',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726'
            }
          }}
          verticalLabelRotation={30}
        />
      )}

      {chartType === 'list' && (
        <View style={{ marginTop: 30, width: '100%' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Data List</Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                <Text>{item.name}</Text>
                <Text>{item.population}</Text>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ChartExample;


// ====================================

// import React, { useState } from 'react';
// import { View, Text, Button, Dimensions, SafeAreaView } from 'react-native';
// import { PieChart, BarChart } from 'react-native-chart-kit';

// // Initial data for the charts (This data will be shared)
// const initialData = [
//   {
//     name: 'Laptops',
//     population: 215000,
//     color: 'rgba(131, 167, 234, 1)',
//     legendFontColor: '#7F7F7F',
//     legendFontSize: 15
//   },
//   {
//     name: 'Mobile Phones',
//     population: 130000,
//     color: '#F00',
//     legendFontColor: '#7F7F7F',
//     legendFontSize: 15
//   },
//   {
//     name: 'Tablets',
//     population: 98000,
//     color: 'rgba(251, 118, 67, 1)',
//     legendFontColor: '#7F7F7F',
//     legendFontSize: 15
//   }
// ];

// const ChartExample = () => {
//   const [showPieChart, setShowPieChart] = useState(true); // Toggle state for chart view
//   const [chartData, setChartData] = useState(initialData); // Shared data state

//   // Graph data for BarChart (converted from PieChart data)
//   const graphData = {
//     labels: chartData.map(item => item.name),
//     datasets: [
//       {
//         data: chartData.map(item => item.population)
//       }
//     ]
//   };

//   // Function to update data (syncs both charts)
//   const updateData = () => {
//     // Example of modifying the population data
//     const updatedData = chartData.map(item => ({
//       ...item,
//       population: item.population + 10000 // Increment population by 10,000 for demonstration
//     }));

//     // Update the shared state
//     setChartData(updatedData);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 24, marginBottom: 20 }}>Chart Sync Example</Text>

//       {/* Button to toggle between Pie Chart and Graph */}
//       <Button
//         title={showPieChart ? "Switch to Graph" : "Switch to Pie Chart"}
//         onPress={() => setShowPieChart(!showPieChart)}
//       />

//       {/* Button to update data (Syncs data for both charts) */}
//       <Button
//         title="Update Data"
//         onPress={updateData}
//         style={{ marginVertical: 20 }}
//       />

//       {/* Show Pie Chart or Graph based on the state */}
//       {showPieChart ? (
//         <PieChart
//           data={chartData}
//           width={Dimensions.get('window').width - 50}
//           height={220}
//           chartConfig={{
//             backgroundColor: '#e26a00',
//             backgroundGradientFrom: '#fb8c00',
//             backgroundGradientTo: '#ffa726',
//             decimalPlaces: 2,
//             color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             style: {
//               borderRadius: 16
//             }
//           }}
//           accessor="population"
//           backgroundColor="transparent"
//           paddingLeft="15"
//         />
//       ) : (
//         <BarChart
//           data={graphData}
//           width={Dimensions.get('window').width - 50}
//           height={220}
//           chartConfig={{
//             backgroundColor: '#1cc910',
//             backgroundGradientFrom: '#1e5128',
//             backgroundGradientTo: '#1cc910',
//             decimalPlaces: 0,
//             color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             style: {
//               borderRadius: 16
//             },
//             propsForDots: {
//               r: '6',
//               strokeWidth: '2',
//               stroke: '#ffa726'
//             }
//           }}
//           verticalLabelRotation={30}
//         />
//       )}
//     </SafeAreaView>
//   );
// };

// export default ChartExample;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React, { useState } from 'react';
// import { View, Text, Button, Dimensions, SafeAreaView } from 'react-native';
// import { PieChart, BarChart } from 'react-native-chart-kit';

// // Sample data for the charts
// const data = [
//   {
//     name: 'Laptops',
//     population: 215000,
//     color: 'rgba(131, 167, 234, 1)',
//     legendFontColor: '#7F7F7F',
//     legendFontSize: 15
//   },
//   {
//     name: 'Mobile Phones',
//     population: 130000,
//     color: '#F00',
//     legendFontColor: '#7F7F7F',
//     legendFontSize: 15
//   },
//   {
//     name: 'Tablets',
//     population: 98000,
//     color: 'rgba(251, 118, 67, 1)',
//     legendFontColor: '#7F7F7F',
//     legendFontSize: 15
//   }
// ];

// const graphData = {
//   labels: ['Laptops', 'Mobile Phones', 'Tablets'],
//   datasets: [
//     {
//       data: [215000, 130000, 98000]
//     }
//   ]
// };

// const ChartExample = () => {
//   const [showPieChart, setShowPieChart] = useState(true); // Toggle state for chart view

//   return (
//     <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 24, marginBottom: 20 }}>Chart Switch</Text>

//       {/* Button to toggle between Pie Chart and Graph */}
//       <Button
//         title={showPieChart ? "Switch to Graph" : "Switch to Pie Chart"}
//         onPress={() => setShowPieChart(!showPieChart)}
//       />

//       {/* Show Pie Chart or Graph based on the state */}
//       {showPieChart ? (
//         <PieChart
//           data={data}
//           width={Dimensions.get('window').width - 50}
//           height={220}
//           chartConfig={{
//             backgroundColor: '#e26a00',
//             backgroundGradientFrom: '#fb8c00',
//             backgroundGradientTo: '#ffa726',
//             decimalPlaces: 2,
//             color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             style: {
//               borderRadius: 16
//             }
//           }}
//           accessor="population"
//           backgroundColor="transparent"
//           paddingLeft="15"
//         />
//       ) : (
//         <BarChart
//           data={graphData}
//           width={Dimensions.get('window').width - 50}
//           height={220}
//           chartConfig={{
//             backgroundColor: '#1cc910',
//             backgroundGradientFrom: '#1e5128',
//             backgroundGradientTo: '#1cc910',
//             decimalPlaces: 0,
//             color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             style: {
//               borderRadius: 16
//             },
//             propsForDots: {
//               r: '6',
//               strokeWidth: '2',
//               stroke: '#ffa726'
//             }
//           }}
//           verticalLabelRotation={30}
//         />
//       )}
//     </SafeAreaView>
//   );
// };

// export default ChartExample;



// --------------------------------------------------------------