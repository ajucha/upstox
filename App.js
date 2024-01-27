import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from './node_modules/axios/index'
import StockDetails from './src/components/StockList'
import StockInfo from './src/components/StockInfo'

const App = () => {
  const [stock_details, setStockDetails] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    holdingDetails()
  }, [])


  //API call for stock details 
  const holdingDetails = async () => {
    try {
      let result = await axios.get('https://run.mocky.io/v3/4a76b093-b79d-49f5-9757-a709031c539d')
      if (result.status == 200) {
        setLoading(false)
        setStockDetails(result?.data?.userHolding)
      }
      else {
        setLoading(false)
        console.log('Error in Data API')
      }
    } catch (error) {
      setLoading(false)
      console.log("Error", error)
    }
  }

  return (
    <View style={styles.card}>
      <Text style={styles.headerText}>Upstox Holding</Text>
      {
        loading ?
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:22,color:'black'}} >Loading...</Text>
          </View>
          :
          <>
            <StockDetails stock_details={stock_details} /> 
            <StockInfo stock_details={stock_details} />
          </>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    backgroundColor: 'purple',
    padding: 15,
    fontSize: 20,
    fontWeight: "600",
    paddingLeft: 20,
    color: 'white'
  }
})

export default App