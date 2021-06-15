import React from 'react'
import { View, StyleSheet } from 'react-native'
import Fields from './Fields'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Fields {...field} key={c} />
        })
        return <View key={r}
            style={{flexDirection: 'row'}}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        backgroundColor: '#EEE'
    }
})