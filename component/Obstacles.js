import React from 'react';
import {
 
  View,
  Image,
ImageBackground
 
} from 'react-native';

const Obstacles = ({randomBottom,color,obstaclesLeft,obstacleWidth,obstacleHeight,gap}) => {

return(
<>

{/* <View style={{
   position:'absolute',
   backgroundColor:color,
width:obstacleWidth,
height:obstacleHeight,
left:obstaclesLeft,
bottom:randomBottom + obstacleHeight + gap,

}}/> */}
 <ImageBackground  style={{ flex: 1,
 width:50,
 height:50,
   // resizeMode: "cover",
   //  justifyContent: "center"
   }}
     source={require('./image/BG.png')}>
    <Image 
    style={{
        position:'absolute',
        backgroundColor:color,
     width:obstacleWidth,
     height:obstacleHeight,
     left:obstaclesLeft,
     bottom:randomBottom + obstacleHeight + gap,}}
    
    source={require('./image/C1.png')}/>
{/* <View style={{
   position:'absolute',
   backgroundColor:color,
width: obstacleWidth,
height: obstacleHeight,
left: obstaclesLeft,
bottom:randomBottom,

}}

/> */}
    <Image style={{
   position:'absolute',
//    backgroundColor:color,
width: obstacleWidth,
height: obstacleHeight,
left: obstaclesLeft,
bottom:randomBottom, }} source={require('./image/T7.png')}/>
</ImageBackground>
</>
)

}
export default Obstacles