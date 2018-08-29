import React, {Component} from 'react';
import {Platform, StyleSheet, Text,TouchableOpacity, View,ImageBackground,Image,Dimensions,Animated} from 'react-native';
import PopupDialog, { DialogTitle, ScaleAnimation, SlideAnimation } from 'react-native-popup-dialog';
const scaleAnimation = new ScaleAnimation();
const slideAnimation = new SlideAnimation({ slideFrom: 'left' });
const {width,height} =Dimensions.get('window')
import styles from './css'
var isHidden = true;
console.disableYellowBox = true;
import Hole from './Hole'
export default class Home extends Component{
    constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(100),  //This is the initial position of the subview
      buttonText: "Show Subview",
      timer:null,
      timer2:null,
      randomNumber: 0,
      check:0,
      check2:2,
    
      
      
      
      
    };
    
      }
     
    
  componentDidMount() {
    this.popupDialogStart.show()
 
    let timer = setInterval(()=>{this._toggleSubview(),this.props.checkNameInput(this.getRandomInt(10))}, 1800);
    
    let timer2 = setInterval(()=>{ if(this.props.seconds>59)
      {
        this.props.minutesInput( this.props.minutes+1)
        this.props.secondsInput(0)
        
      }
      else{
     this.props.secondsInput(this.props.seconds+1)}
    if(this.props.minutes==1)
    { 
     
      this.popupDialogTimeUp.show()
    }}, 1000);
   
    this.setState({timer2});
   
  }
  // heandlerTime(){adb install -r ./app/build/outputs/apk/app-debug.apk
  // this._toggleSubview()}
  componentWillUnmount() {
    this.clearInterval(this.state.timer);
    this.clearInterval(this.state.timer2);
   
  }
   getRandomInt(max) {
    var value = Math.floor(Math.random() * Math.floor(max));
 var n = this.props.check2/2
 this.props.check2NameInput(this.props.check2+1)
 
    return isHidden?0:value
  }
  


  // generateRandomNumber(){
  //   setTimeout(() => {
  //     this.setState({randomNumber:this.props.check})  
  //   }, 1800)
  // }
    _toggleSubview() {    
    this.setState({
      buttonText: !isHidden ? "Show Subview" : "Hide Subview"
    });

    var toValue = 100;

    if(isHidden) {
      this.props.minutes==0?this.props.decInput(true):this.props.decInput(false)
      toValue = 0;
    }
    else{
      this.props.check!=0&&this.props.dec?this.props.changeNameInput(this.props.change-3):null
    }
     
    //This will animate the transalteY of the subview between 0 & 100 depending on its current state
    //100 comes from the style below, which is the height of the subview.
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: toValue,
        velocity: 3,
        tension: 2,
        friction: 8,
      }
    ).start();

    isHidden = !isHidden;
  }

  render() {
    
   
    //changeNameInput
    
    return (
  <View style={styles.container}>
    <View style={{height:"25%"}}>
     <ImageBackground
          resizeMode={'stretch'}
          style={{height:"100%",width:"100%"}} 
          source={require("./images/game-screen-top.png")}
        >
      <View style={styles.topView}>
        <ImageBackground
         resizeMode={'stretch'}
         style={styles.gamebtn}
         source={require("./images/gameBtn.png")}
       >
            <Text style={styles.textStyle}>{this.props.change}</Text>
        </ImageBackground>
    <ImageBackground
       resizeMode={'stretch'}
       style={styles.gamebtn}
        source={require("./images/gameBtn.png")}
      >
        <Text style={styles.textStyle}>{this.props.minutes}:{this.props.seconds}</Text>
      </ImageBackground></View></ImageBackground>
  </View>
    <View style={styles.wholeConatainer}>
        <View style={styles.holeView}>
          <Hole holeNumber={1} bounceValue={this.state.bounceValue} check={this.props.check} _toggleSubview={()=>this._toggleSubview()} changeNameInput={(n)=>{this._toggleSubview(),this.props.decInput(false),this.props.dec?this.props.changeNameInput(this.props.change+n):null }}/>
          <Hole holeNumber={2} bounceValue={this.state.bounceValue} check={this.props.check} _toggleSubview={()=>this._toggleSubview()} changeNameInput={(n)=>{this._toggleSubview(),this.props.decInput(false),this.props.dec?this.props.changeNameInput(this.props.change+n):null }}/>
        </View>
        <View style={styles.holeView} justifyContent= 'center'alignItems= 'center'>
          <Hole holeNumber={3} bounceValue={this.state.bounceValue} check={this.props.check} _toggleSubview={()=>this._toggleSubview()} changeNameInput={(n)=>{this._toggleSubview(),this.props.decInput(false),this.props.dec?this.props.changeNameInput(this.props.change+n):null }}/>
       </View>
       <View style={styles.holeView}>
          <Hole holeNumber={4} bounceValue={this.state.bounceValue} check={this.props.check} _toggleSubview={()=>this._toggleSubview()} changeNameInput={(n)=>{this._toggleSubview(),this.props.decInput(false),this.props.dec?this.props.changeNameInput(this.props.change+n):null}}/>
          <Hole holeNumber={5} bounceValue={this.state.bounceValue} check={this.props.check} _toggleSubview={()=>this._toggleSubview()} changeNameInput={(n)=>{this._toggleSubview(),this.props.decInput(false),this.props.dec?this.props.changeNameInput(this.props.change+n):null}}/>
       </View>
       <View style={styles.holeView} justifyContent= 'center'alignItems= 'center'>
          <Hole holeNumber={6} bounceValue={this.state.bounceValue} check={this.props.check} _toggleSubview={()=>this._toggleSubview()} changeNameInput={(n)=>{this._toggleSubview(),this.props.decInput(false),this.props.dec?this.props.changeNameInput(this.props.change+n):null}}/>
       </View>
       <View style={styles.holeView}>
          <Hole holeNumber={7} bounceValue={this.state.bounceValue} check={this.props.check} _toggleSubview={()=>this._toggleSubview()} changeNameInput={(n)=>{this._toggleSubview(),this.props.decInput(false),this.props.dec?this.props.changeNameInput(this.props.change+n):null}}/>
          <Hole holeNumber={8} bounceValue={this.state.bounceValue} check={this.props.check} _toggleSubview={()=>this._toggleSubview()} changeNameInput={(n)=>{this._toggleSubview(),this.props.decInput(false),this.props.dec?this.props.changeNameInput(this.props.change+n):null}}/>
       </View>
       <View style={styles.holeView} justifyContent= 'center'alignItems= 'center'>
          <Hole holeNumber={9} bounceValue={this.state.bounceValue} check={this.props.check} _toggleSubview={()=>this._toggleSubview()} changeNameInput={(n)=>{this._toggleSubview(),this.props.decInput(false),this.props.dec?this.props.changeNameInput(this.props.change+n):null}}/>
       </View>
    </View>

 
  <PopupDialog
        ref={(popupDialog) => { this.popupDialogStart = popupDialog; }}
        width={'100%'}
        dismissOnTouchOutside={false}
        height={"100%"}
        overlayBackgroundColor={'rgb(21,26,8)'}
        dialogStyle={{ justifyContent: 'center' }}>
           <View style={{borderBottomWidth:1,borderBottomColor:'rgb(225, 222, 222)',justifyContent: 'center',flex:1, alignItems: 'center'}}>
              <ImageBackground
                resizeMode={'stretch'}
                style={styles.logo} 
                source={require("./images/mole.png")}
              ><ImageBackground
                resizeMode={'stretch'}
                style={styles.gamebtn}
                source={require("./images/gameBtn.png")}
              ><TouchableOpacity style={styles.gamebtn}
            onPress={()=>{this.props.changeNameInput(0),this.props.secondsInput(0),this.props.minutesInput(0),this.popupDialogStart.dismiss()}} >
            <Text style={styles.textStyle}>Start</Text></TouchableOpacity>
              </ImageBackground></ImageBackground>
          </View>
  </PopupDialog>
<PopupDialog
        ref={(popupDialog) => { this.popupDialogTimeUp = popupDialog; }}
        width={'100%'}
        dismissOnTouchOutside={false}
        height={"100%"}
        overlayBackgroundColor={'rgb(21,26,8)'}
       dialogStyle={{ justifyContent: 'center' }}>
 
      <ImageBackground
          resizeMode={'stretch'}
          style={styles.logo} 
          source={require("./images/game-screen-top.png")}
        >
        <View style={styles.topView} justifyContent='center'><ImageBackground
       resizeMode={'stretch'}
       style={styles.gamebtn}
        source={require("./images/gameBtn.png")}
      ><Text style={styles.textStyle}>Game Over</Text></ImageBackground></View><View style={styles.topView} justifyContent='center'><ImageBackground
       resizeMode={'stretch'}
       style={styles.gamebtn}
        source={require("./images/gameBtn.png")}
      ><Text style={styles.textStyle}>Score:{this.props.change}</Text></ImageBackground></View>
      
      <ImageBackground
       resizeMode={'stretch'}
       style={styles.gamebtn}
        source={require("./images/gameBtn.png")}
      ><TouchableOpacity style={{alignSelf:'center',justifyContent:'center'}} onPress={()=>{this.props.changeNameInput(0),this.props.secondsInput(0),this.props.minutesInput(0),this.popupDialogTimeUp.dismiss()}} ><Text style={styles.textStyle}>Replay</Text></TouchableOpacity></ImageBackground></ImageBackground>
  </PopupDialog>
  </View>
    );
  }
}
