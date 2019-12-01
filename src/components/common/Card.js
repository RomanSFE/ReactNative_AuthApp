import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Card extends Component {
    render() {
        const {children} = this.props
        return (
            <View style={styles.wrapper}>
                {children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        
        elevation: 5,

        borderColor: '#ddd',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#f9f9f9',
        marginBottom: 20,
        marginHorizontal: 20
    },
  });
