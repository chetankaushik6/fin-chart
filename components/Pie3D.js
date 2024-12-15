import React, { useState } from "react";
import FusionCharts from 'react-native-fusioncharts';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Pie3D = () => {
    const Data =[
        {
            "chart": {
              "caption": "Recommended Portfolio Split",
              "subCaption": "For a net-worth of $1M",
              "showValues": "1",
              "showPercentInTooltip": "0",
              "numberPrefix": "$",
              "enableMultiSlicing": "1",
              "theme": "candy"
            },
            "data": [
              {
                "label": "Equity",
                "value": "300000"
              },
              {
                "label": "Debt",
                "value": "230000"
              },
              {
                "label": "Bullion",
                "value": "180000"
              },
              {
                "label": "Real-estate",
                "value": "270000"
              },
              {
                "label": "Insurance",
                "value": "20000"
              }
            ]
          }
    ]
  const [type] = useState('pie3d');
  const [width] = useState('100%');
  const [height] = useState('100%');
  const [dataFormat] = useState('json');
  const [dataSource] = useState({/* see data tab */});

  const libraryPath = Platform.select({
    android: { uri: 'file:///android_asset/fusioncharts.html' },
    ios: require('./assets/fusioncharts.html')
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>A 3D Pie Chart</Text>
      <View style={styles.chartContainer}>
        <FusionCharts
          type={type}
          width={width}
          height={height}
          dataFormat={dataFormat}
          dataSource={dataSource}
          libraryPath={libraryPath} // set the libraryPath property
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 16
  },
  chartContainer: {
    height: 400,
    borderColor: '#000',
    borderWidth: 2
  }
});

export default Pie3D;
