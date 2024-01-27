import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { stockCalculator } from '../utils/util'

const StockInfo = ({ stock_details }) => {
    const stockCalculator = (param) => {
        return stock_details?.reduce((curr, next) => {
            if (param == 'current_sum') {
                return curr + (next.ltp * next.quantity)

            }
            else if (param == 'total_investment') {
                return curr + (next.avgPrice - next.quantity)
            }
        }, 0)
    }
    return (
        <ScrollView>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', backgroundColor: '#fff', padding: 12, marginHorizontal: 10 }} >
                <View>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: 'black', marginTop: 10, }} >CurrentValue:</Text>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: 'black', marginTop: 10 }} >Total Investment:</Text>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: 'black', marginTop: 10 }} >Today's Profit & Loss:</Text>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: 'black', marginTop: 15 }} >Profit & Loss:</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500', marginTop: 10, alignSelf: 'flex-end' }} >₹{stockCalculator('current_sum')?.toFixed(2)}</Text>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500', marginTop: 10, alignSelf: 'flex-end' }} >₹{stockCalculator('total_investment')?.toFixed(2)}</Text>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500', marginTop: 10, alignSelf: 'flex-end' }} >₹0000</Text>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500', marginTop: 15, alignSelf: 'flex-end' }} >₹{stockCalculator('current_sum')?.toFixed(2) - stockCalculator('total_investment')?.toFixed(2)}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default StockInfo