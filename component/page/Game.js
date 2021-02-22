import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity

} from 'react-native';
 import Countup from 'react-native-countup'
import Bird from '../Bird'
import Obstacles from '../Obstacles';
const Game = () => {

  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth / 2 + 30)
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0)
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0)
  const [score,setScore] = useState(0)
  const obstacleWidth = 60
  const obstacleHeight = 300
  const gap = 200
  const gravity = 3
  let gameTimerId 
  let obstaclesLeftTimerId
  let obstaclesLeftTimerIdTwo
const  [isGameOver,setIsGameOver] = useState(false)

  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity)
      }, 30)

      return () => {
        clearInterval(gameTimerId)
      }
    }
  }, [birdBottom])
  console.log(birdBottom) 

//jump 

  const jump = () => {
    if(!isGameOver && (birdBottom <screenHeight)){
      setBirdBottom(birdBottom => birdBottom + 50)
      console.log('jumped')
    }
  }

  //start first obstacles

  useEffect(() => {
    if (obstaclesLeft > -obstacleWidth) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
      }, 30)
      return () => {
        clearInterval(obstaclesLeftTimerId)
      }
    } else {
      setObstaclesLeft(screenWidth)
      setObstaclesNegHeight(-Math.random() * 100)
      setScore(score => score +1)
    }


  }, [obstaclesLeft])

  //start second obstacles

  useEffect(() => {
    if (obstaclesLeftTwo > -obstacleWidth) {
      obstaclesLeftTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
      }, 30)
      return () => {
        clearInterval(obstaclesLeftTimerIdTwo)
      }
    } else {
      setObstaclesLeftTwo(screenWidth)
      setObstaclesNegHeightTwo(-Math.random() * 100)
      setScore(score => score +1)
    }
  }, [obstaclesLeft])

  //check for collisions

  useEffect(() => {
    if (
      ((birdBottom < (obstaclesNegHeight + obstacleHeight + 30) ||
        birdBottom > (obstaclesNegHeight + obstacleHeight + gap -30)) &&
        (obstaclesLeft > screenWidth/2 -30 && obstaclesLeft < screenWidth/2 + 30)
      )
      ||
      ((birdBottom < (obstaclesNegHeightTwo + obstacleHeight + 30) ||
        birdBottom > (obstaclesNegHeightTwo + obstacleHeight + gap -30)) &&
        (obstaclesLeftTwo > screenWidth/2 -30 && obstaclesLeftTwo < screenWidth/2 + 30)
      ))
    {
       console.log('game over')
      // alert('game over')
      gameOver()
      
    }
  })


  const gameOver = () => {
    clearInterval(gameTimerId)
    clearInterval(obstaclesLeftTimerId)
    clearInterval(obstaclesLeftTimerIdTwo)
    setIsGameOver(true)
  }

  // const gameStart =() =>{
  //   gameOver()
  // }


  return (
    <TouchableWithoutFeedback onPress={jump }>
    <View style={styles.container}>
    {/* <Countup value={100000}/>  */}
   {isGameOver && <Text>{score}</Text>}
      <Bird
        birdBottom={birdBottom}
        birdLeft={birdLeft}
      />
      <Obstacles
        color={'yellow'}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        gap={gap}
        obstaclesLeft={obstaclesLeft}
        randomBottom={obstaclesNegHeight}
      />
      <Obstacles
        color={'green'}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        gap={gap}
        obstaclesLeft={obstaclesLeftTwo}
        randomBottom={obstaclesNegHeightTwo}
      />
     
    </View>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Game;
