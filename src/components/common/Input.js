import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export default class Input extends Component {
    render() {
        const { placeholder, handleInput, secureTextEntry, customStyle, onBlur} = this.props
        return (
            <TextInput 
                style={[
                    { 
                    height: 50, 
                    borderRadius: 5, 
                    padding: 10, 
                    borderBottomColor: '#A3B3F9', 
                    borderBottomWidth: 1,
                },
                    customStyle,
                ]}
                placeholder={placeholder}
                onChangeText={handleInput}
                secureTextEntry={secureTextEntry}
                onBlur={onBlur}
            />
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});
