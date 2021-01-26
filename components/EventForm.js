import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'

const EventForm = ({ navigation }) => {

  const handleAddPress = () => {
    navigation.navigate('Home');
  }

  return (
    <View>
      <TouchableHighlight
        onPress={handleAddPress}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Add</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: "rgba(231, 76, 60, 1)",
    borderRadius: 10,
    alignSelf: "center",
    width:"90%",
    margin: "50%",
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,  
    elevation: 5
  }, 
  appButtonText: {
    color: 'rgb(243, 243, 243)',
    fontSize: 30,
    marginTop: -2,
    textAlign: 'center'

  }
});

export default EventForm;