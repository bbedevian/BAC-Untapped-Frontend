import React from 'react';
import {connect} from 'react-redux'
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import {LineChart} from "react-native-chart-kit";
import QuickLog from './quick-log.component';

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
    const {currentUser, dbBeers, userBeers, addNewBeer} = this.props
    let bacLog = []
    let beerLog = []
        if (currentUser) {
            gender = currentUser.male
            weight = currentUser.weight
            beerLog = userBeers.map(uBeer => {
                return {
                    name: (dbBeers.find(dbBeer => dbBeer.id === uBeer.beer_id).name),
                    img: (dbBeers.find(dbBeer => dbBeer.id === uBeer.beer_id).img_url),
                    id: (dbBeers.find(dbBeer => dbBeer.id === uBeer.beer_id).id),
                    size: uBeer.size,
                    time: new Date(uBeer.created_at).getTime(),
                    abv: (dbBeers.find(dbBeer => dbBeer.id === uBeer.beer_id).abv)
                    }
                }) // end of declare beerLog
            beerLog = beerLog.filter(log => log.time > (today.getTime() - 64800000)) // filter only todays beers
            beerLog = beerLog.filter(beer => this.bac(beer.size, beer.abv, this.calcHours(beer)) > 0)
            bacLog = beerLog.map(beer => this.bac(beer.size, beer.abv, this.calcHours(beer)))
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
    let chartData = bacLog.map(beer => {return total+=beer})
    if (total > .2) {alert("You should probably just grab and uber n go home")}

    let calories = 0
    beerLog.forEach(beer => calories += (beer.size*beer.abv*2.5))
    
    let TTS = ((total/.016)) //gives you hours until sober
    let soberHour = (today.getHours() + Math.round(TTS))
    if (soberHour >= 24) {soberHour = soberHour-24} // converts to the next day
    
    if (today.getMinutes() < 10) {chartLabels.push(soberHour+":0"+today.getMinutes())}
    else {chartLabels.push(soberHour+":"+today.getMinutes())}

    // let firstLabel = (chartLabels[0].split(":")[0]-1)+":"+chartLabels[0].split(":")[1]
    // chartLabels.unshift(firstLabel)
    chartData.push(0)
    // chartData.unshift(0)

    let bgcolor = "#00ff00"
    if (total > .08) {bgcolor = "#ffff00"}
    if (total > .15) {bgcolor = "#ff3300"}
    let dotColor = chartData[-1] ? 'white' : bgcolor

    return (
        <>
        <View style={styles.factBox}>
        <Text>Your current BAC is: {Math.round((total + Number.EPSILON) * 1000) / 1000}</Text>
        <Text>Expect to be sober in around: {Math.round((((total/.016)) + Number.EPSILON))} hours</Text>
        <Text> {calories} calories from beer</Text>
        </View>
        {bacLog.length > 0 ? 
        <>
        <View style={styles.graph}>
            <LineChart
            data={{
            labels: chartLabels,
            datasets: [{data: chartData}]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={300}
            yAxisInterval={.01}
            chartConfig={{
                withShadow: false,
            withInnerLines: false,
            withOuterLines: false,
            backgroundColor:  "#fb8c00",
            backgroundGradientFrom: bgcolor, 
            backgroundGradientTo: bgcolor,
            decimalPlaces: 2, 
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
                borderRadius: 8,
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: dotColor
            }
            }}
        />
        </View> 

        <View style={styles.quickLog}>
        <QuickLog beer={beerLog[beerLog.length-1]} addNewBeer={addNewBeer}/>
        {beerLog.length >= 2 ? <QuickLog beer={beerLog[beerLog.length-2]} addNewBeer={addNewBeer}/> : null}
        {beerLog.length >= 3 ? <QuickLog beer={beerLog[beerLog.length-3]} addNewBeer={addNewBeer}/> : null}
        </View>
        </>
        // dont show graph when loading
        : <View style={styles.soberBox}>
            <Text style={styles.soberText}>Log a beer once youve finished drinking it to begin tracking.</Text>
            <Image style={styles.beergif} source={{uri: 'https://media.giphy.com/media/WodWN12m0ACQp7uaAW/giphy.gif'}}/>
        </View>  }
        </>
    )
        }
}

const msp = ({user, dbBeers}) => ({
    currentUser: user.currentUser,
    dbBeers: dbBeers.dbBeers
  })

export default connect(msp)(Visualizer);

const styles = StyleSheet.create({
    factBox: {
        marginTop: 8,
        height: "auto",
        width: "100%",
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        backgroundColor: '#fff',
        paddingLeft: 5
    },
    graph: {
        flex: 3,
        marginTop: 10,
    },
    quickLog: {
        flex: 1,
        top: 25,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    soberText: {
        fontSize: 25,
        textAlign: 'center'
    },
    soberBox: {
        
    },
    beergif: {
        height: 300,
        // resizeMode: 'contain',
    }
  
})