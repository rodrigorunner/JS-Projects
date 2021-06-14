import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import MineField from './src/components/MineField'
import { createMinedBoard } from './src/functions'
import Mine from './src/components/Mine';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }
  
  minesAmount = () => {
    const cols = params.getColunmsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColunmsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciado o Mines</Text>
        <Text style={styles.introdoction}>Tamanho da grade: 
         {params.getColunmsAmount()} x {params.getRowsAmount()} </Text>

         <View style={styles.board}>
            <MineField board={this.state.board} />
         </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
