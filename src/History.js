import React from 'react';
import {ScrollView, View, Text } from 'react-native';
import HistoryCard from './HistoryCard';
import DropDownPicker from 'react-native-dropdown-picker';
import EditLog from './EditLog';


class History extends React.Component {

state = {
    filter: '',
    edit: false,
    editBeer: {}
}

editLog = (beer) => {
    this.setState({edit: true, editBeer: beer})
}

render () {
const {userBeers, dbBeers} = this.props
const {filter, edit, editBeer} = this.state
const {editLog} = this

let history = userBeers.map(uBeer => {
    return {
        name: (dbBeers.find(dbBeer => dbBeer.id === uBeer.beer_id).name),
        id: uBeer.id,
        size: uBeer.size,
        time: new Date(uBeer.created_at),
        abv: (dbBeers.find(dbBeer => dbBeer.id === uBeer.beer_id).abv)
        }
    })
if (filter === 'NF') {history.sort((a,b) => (a.time < b.time) ? 1 : -1)}    
if (filter === 'OF') {history.sort((a,b) => (a.time > b.time) ? 1 : -1)}    
if (filter === 'HF') {history.sort((a,b) => (a.abv < b.abv) ? 1 : -1)}    
if (filter === 'LF') {history.sort((a,b) => (a.abv > b.abv) ? 1 : -1)}    

return (
    !edit ? 
    <View>
    <DropDownPicker
    items={[
        {label: 'Newest First', value: 'NF'},
        {label: 'Oldest First', value: 'OF'},
        {label: 'Highest ABV', value: 'HF'},
        {label: 'Lowest ABV', value: 'LF'},
    ]}
    defaultIndex={0}
    placeholder="Filter"
    containerStyle={{height: 40}}
    onChangeItem={item => this.setState({filter: item.value})}
/>
    <Text></Text>    
    <ScrollView>
        {history.map(uBeer => <HistoryCard key={uBeer.id} beer={uBeer} editLog={editLog}/>)}
    </ScrollView>
    </View>
    :
    <EditLog beer={editBeer}/>
);
}
}

export default History;