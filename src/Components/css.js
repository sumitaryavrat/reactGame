import {StyleSheet}  from 'react-native';


export default StyleSheet.create({
    container: {
        flex:1,
       // justifyContent: '',
      //  alignItems: 'center',
        backgroundColor: '#fff',
      },
      wholeConatainer:{
        flex: 1,
        height:"75%",
        width:"100%",
        // justifyContent: '',
       //  alignItems: 'center',
         backgroundColor: 'rgb(128,127,102)',
    },textStyle:
    {
      alignSelf:'center',
    fontSize:20,
    fontWeight:'900',
    color:"#3C1E1B"
    },
      topView:
      {
    height:60,
    width:'100%',
    flexDirection:'row',
    marginTop:10,
    padding:15,
    justifyContent: 'space-between',
    
      },hole:{height:80,width:100,overflow: 'hidden',borderRadius:40, justifyContent: 'center', alignItems: 'center'},
            mole:{
          height:80,
          width:80,
          borderRadius:20,
            justifyContent: 'flex-end',
            alignItems: 'center'},
            logo:{height:"100%",
                width:"100%",
                borderRadius:20,
                  justifyContent: 'center',
                  alignItems: 'center'},
      holeView:{
        height:"16%",
        flexDirection:'row',
        marginTop:1,
        paddingRight:20,
        paddingLeft:20,
        justifyContent: 'space-between',
        
      },
      gamebtn:{height:50,width:150, justifyContent: 'center',alignSelf:'center'},
       holeMask:
      {height:40,
        width:100,
        borderRadius:20,
          justifyContent: 'center',
          alignItems: 'center'},
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },moleTouch:{height:80,width:100,borderRadius:40, justifyContent: 'center',           alignItems: 'center'},
           
    })
    