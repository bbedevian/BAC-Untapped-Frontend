import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import {LineChart} from "react-native-chart-kit";
// import { render } from 'react-dom';

let today = new Date();

class Visualizer extends React.Component {

bac = (oz, abv, hours) => {
    let adb;
    gender ? adb = .75 : adb = .66
    let x = (((oz * (abv/100) * 5.14) / (weight * adb)) - (hours * 0.015))
    if (x > 0) {return x} else {return 0}
}

calcHours = (beer) => {
   return (today.getTime() - beer.time)/3600000
}
    
render() {
    const {currentUser, dbBeers, userBeers} = this.props
    let bacLog = []
    let beerLog = []
        if (currentUser) {
            gender = currentUser.male
            weight = currentUser.weight
            beerLog = userBeers.map(uBeer => {
                return {
                    size: uBeer.size,
                    time: new Date(uBeer.created_at).getTime(),
                    abv: (dbBeers.find(dbBeer => dbBeer.id === uBeer.beer_id).abv)
                    }
                }) // end of declare beerLog
                beerLog = beerLog.filter(
                    log => log.time > (today.getTime() - 86400000)
                    ) // end of filter to only todays beers

                bacLog = beerLog.map(beer => 
                    this.bac(beer.size, beer.abv, this.calcHours(beer))
                    )
                } // end of if 

   let chartLabels = beerLog.map(beer => {
       let x = new Date(beer.time)
       let hours = x.getHours()
       let minutes = x.getMinutes()
       minutes < 10 ? minutes = `0${minutes}` : minutes
    //    hours > 12 ? hours = hours - 12 : hours
       return `${hours}:${minutes}`
    })
    let total = 0
    let chartData = bacLog.map(beer => {
        return total+=beer 
    })
    
    let TTS = ((total/.016)) //gives you hours until sober
    let soberHour = (today.getHours() + Math.round(TTS))
    if (soberHour > 24) {soberHour = soberHour-24} // converts to the next day
    
    chartLabels.push(soberHour+":"+today.getMinutes())
    let firstLabel = (chartLabels[0].split(":")[0]-1)+":"+chartLabels[0].split(":")[1]
    chartLabels.unshift(firstLabel)
    chartData.push(0)
    chartData.unshift(0)

    let bgcolor = "#00ff00"
    if (total > .1) {bgcolor = "#ffff00"}
    if (total > .2) {bgcolor = "#ff3300"}

    return (
        bacLog.length > 0 ? 
        <>
        <View style={styles.factBox}>
        <Text>Your current BAC is: {Math.round((total + Number.EPSILON) * 1000) / 1000}</Text>
        <Text>Expect to be sober in around: {Math.round((((total/.016)) + Number.EPSILON))} hours</Text>
        </View>
        <View style={styles.graph}>
            <LineChart
            data={{
            labels: chartLabels,
            datasets: [
                {
                data: chartData
                }
            ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={300}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={.01}
            chartConfig={{
            backgroundColor:  "#fb8c00",
            backgroundGradientFrom: "#fb8c00", //this should be background color
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, 
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
            }
            }}
        />
        </View> 
        </>
        : 
        null // while it loads dont show the graph or box
    )
        }
}

export default Visualizer;

const styles = StyleSheet.create({
    factBox: {
        marginTop: 8,
        height: "auto",
        width: "100%",
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: '#fff',
    },
    graph: {
        marginTop: 25
    }
})