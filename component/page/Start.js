import React from 'react';
import {
  StyleSheet,
  View,
  Text,

  TouchableOpacity

} from 'react-native';

function Start(props) {
  return (
    <View style={styles.container}>
      <View style={styles.but}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Game')}
        style={styles.but}>
        <Text>Gamestart</Text>
      </TouchableOpacity>

      </View>
      {/* <Text>Gamestart</Text> */}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'

  },
  but :{
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'green'
  }
});

export default Start;
