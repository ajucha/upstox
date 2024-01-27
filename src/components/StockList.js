import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { PLcalculation } from '../utils/util'
import StockInfo from './StockInfo'

const StockDetails = ({ stock_details }) => {
  const renderItem = ({ item }) => <><View style={styles.listContainer}>
    <View >
      <Text style={styles.title}>{item.symbol}</Text>
      <Text style={styles.quantity}>{item.quantity}</Text>
    </View>
    <View>
      <Text style={styles.ltp}>LTP: <Text style={{ fontSize: 18, fontWeight: '700', }}> ₹{item.ltp}</Text></Text>
      <Text style={styles.pl}>P/L: <Text style={{ fontSize: 18, fontWeight: '700' }}>{PLcalculation(item.ltp, item.quantity, item.avgPrice)}</Text></Text>
    </View>

  </View>
    <View style={{ backgroundColor: 'lightgrey', height: 1 }}></View>
  </>
  return (
    <View>
      <FlatList data={stock_details} renderItem={renderItem} />
      <View style={styles.greyContainer} />
    </View>

  )
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    marginHorizontal: 10
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: 'black'
  },
  quantity: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    fontWeight: '500'
  },
  ltp: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    alignSelf: 'flex-end'
  },
  pl: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    fontWeight: '500',
    alignSelf: 'flex-end'
  },
  greyContainer: {
    backgroundColor: 'lightgrey',
    padding: 100
  }
})

export default StockDetails