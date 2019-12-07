
import React, { Component } from 'react';
 import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native';
 import * as firebase from 'firebase';
 
 
 class ProfileScreen extends Component {
    static navigationOptions = {
        title: " My Profile ",
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#333',
        headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'left'
        },   
    }

     componentDidMount() {
         let userId = firebase.auth().currentUser.uid;
 
 
         return firebase
             .database()
             .ref('/users/' + userId)
             .on('value', snapshot => {
                 console.log(snapshot.val());
                 this.setState({
                     currentUser: snapshot.val(),
                 });
             });
     }
 
 
     constructor(props) {
         super(props);
         this.state = {
             email: '',
             firstName: '',
             lastName: '',
             age: '',
             gender: '',
             currentUser: '',
         };
     }
 
 
     render() {
         const { currentUser } = this.state;
         console.log('currentUser ', currentUser);
         return (
             <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                 <Image
                     style={{ height: '45%', width: '45%', borderRadius: 5 }}
                     source={require('../components/images/profile.jpg')}
                 />
                 <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                     <Text style={{ color: 'blue', fontSize: 20, fontWeight: 'bold'}}>{currentUser.firstName} {currentUser.lastName}</Text>
                     <Text style={{ color: '#000' }}>{currentUser.email}</Text>
                     <Text style={{ color: '#000' }}>{currentUser.age}</Text>
                     <Text style={{ color: '#000' }}>{currentUser.gender}</Text>
                 </View>
             </View>
         );
     }
 }
 export default ProfileScreen;