import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import AppNavigation from './src/AppNavigation'
import * as firebase from 'firebase'

export default class App extends Component {
  componentWillMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyAZ0G6xd7TsGGtfmtdU2qNZbEo6uP0_j9Y",
      authDomain: "reactnative-authapp-37b6a.firebaseapp.com",
      databaseURL: "https://reactnative-authapp-37b6a.firebaseio.com",
      projectId: "reactnative-authapp-37b6a",
      storageBucket: "reactnative-authapp-37b6a.appspot.com",
      messagingSenderId: "830371344143",
      appId: "1:830371344143:web:2335f7bdd84f0400ee187a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
        <AppNavigation />   
    )
  }
}
