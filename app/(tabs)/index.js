import { View, Text } from 'react-native'
import React from 'react'
import Hello from '../../components/Hello';
import BarChartComponent from '../../components/BarChartComponent'; 
// import Pie3D from '../../components/Pie3D';
import PieChartComponent from '../../components/PieChartComponent';
import ListChartComponent from '../../components/ListChartComponent';
import ChartExample from '../../components/ChartExample';
import Check from '../../components/Check';

export default function index() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>index</Text> */}
      {/* <Hello/> */}
      {/* <Pie3D/> */}
      
      {/* <PieChartComponent /> */}
      {/* <BarChartComponent /> */}
      {/* <ListChartComponent/> */}
      <Check/>
    <ChartExample/>
    </View>
  )
}