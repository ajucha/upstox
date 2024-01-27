export const PLcalculation = (ltp, quantity, avgprice) => {
    return currentValueCalc(ltp, quantity) - individualCalc(avgprice, quantity)
}

const currentValueCalc = (ltp, quantity) => {
    return ltp * quantity
}

const individualCalc = (avgprice, quantity) => {
    return avgprice - quantity
}
