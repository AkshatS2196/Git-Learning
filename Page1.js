import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
class Page1 extends Component {
   state = {
     userData:{
      email: '',
      password: ''
   }}
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "mail-Id(last1)"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
              onChangeText={ text =>
              this.setState({
                userData: { ...this.state.userData,email:text}
              })
            }
            />

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Pass(Word)"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText={ text =>
               this.setState({
                 userData: { ...this.state.userData,password:text}
               })
             }
             />

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {this.props.update(this.state.userData);
               }}>
               <Text style = {styles.submitButtonText}> Submit</Text>
            </TouchableOpacity>
<Text> {this.props.abc.email} </Text>
            </View>
      );
   }
}
const mapStateToProps = state => ({
  abc: state.detailReducer.data,
});
const mapDispatchToProps = dispatch => ({
  update: userData =>
  dispatch({
    type: 'Update',
    payload:{
      data: userData,
    }
  })
 });
export default connect (
mapStateToProps,
   mapDispatchToProps,
)(Page1);

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})
