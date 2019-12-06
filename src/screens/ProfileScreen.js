import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native'
import * as firebase from 'firebase'

class ProfileScreen extends Component {
    componentDidMount() {
        let userId = firebase.auth().currentUser.uid

        return firebase
        .database().ref('/users/'+ userId)
        .on('value', function(snapshot){
            console.log(snapshot.val())
        })
    }

    constructor(props){
        super(props) 
            this.state = {
                email: '',
                firstName: '',
                lastName: '',
                age: '',
                gender: ''
            }
    }

    render() {
        const {currentUser} = this.state
        return (
            <View style={{justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{height: '45%', width: '45%', borderRadius: 5}} 
                source={require('../components/images/bbg1.jpg')}
                />
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{color: '#000'}}>{currentUser.firstName}</Text>
                    <Text style={{color: '#000'}}>Your Email</Text>
                    <Text style={{color: '#000'}}>Your Age</Text>
                    <Text style={{color: '#000'}}>Your Gender</Text>
                </View>
            </View>
        )
    }
}
export default ProfileScreen
