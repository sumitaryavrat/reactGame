import React, {Component} from 'react';
import {Platform, StyleSheet, Text,TouchableOpacity, View,ImageBackground,Image,Dimensions,Animated} from 'react-native';
import PopupDialog, { DialogTitle, ScaleAnimation, SlideAnimation } from 'react-native-popup-dialog';
const scaleAnimation = new ScaleAnimation();
const slideAnimation = new SlideAnimation({ slideFrom: 'left' });
const {width,height} =Dimensions.get('window')
import styles from './css'
export default class Hole extends Component{
    check(){
        
    }
    render(){
      return(<ImageBackground
        resizeMode={'stretch'}
         style={styles.hole} 
          source={require("./images/hole.png")}
        ><Animated.View
        style={[styles.subView,
          {transform: [{translateY: this.props.bounceValue}]}]}
      >{this.props.check==this.props.holeNumber?<View style={{ justifyContent: 'center', alignItems: 'center'}} ><TouchableOpacity  style={styles.moleTouch}  onPress={()=>{console.log("click"),this.props._toggleSubview,this.props.changeNameInput(10)}}><ImageBackground
      resizeMode={'stretch'}
      style={styles.mole} 
      source={require("./images/mole.png")}
      ><ImageBackground
      resizeMode={'stretch'}
      style={styles.holeMask} 
      source={require("./images/holeMask.png")}
    ></ImageBackground></ImageBackground></TouchableOpacity></View>:null}</Animated.View></ImageBackground>)
    }
  }
  