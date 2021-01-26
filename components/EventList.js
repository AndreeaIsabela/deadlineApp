import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

import EventCard from "./EventCard";

const EventList = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsList = require("../db.json").events.map(e => ({
      ...e,
      date: new Date(e.date),
    }));
    setEvents([...eventsList]);

    const intervalId = setInterval(() => {
      setEvents( 
        [...eventsList.map(evt => (
          {
          ...evt,
          timer: Date.now()
          }
        ))]
      );
    }, 1000);
    
    return () => {
      clearInterval(intervalId);
    }

  }, []);

  const handleAddEvent = () => {
    navigation.navigate('Add Event');
  }

  return [
      <FlatList
        key="flatlist"
        style={styles.list}
        data={events}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={(item) => item.id}
      />,
      <TouchableOpacity key="fab" onPress={handleAddEvent} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>+</Text>
      </TouchableOpacity>
  ];
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#F3F3F3",
  },
  appButtonContainer: {
    backgroundColor: "rgba(231, 76, 60, 1)",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignSelf: "flex-end",
    marginBottom: "10%",
    marginRight: "10%",
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,  
    elevation: 5
  }, 
  appButtonText: {
    fontWeight: 'bold',
    color: 'rgb(243, 243, 243)',
    fontSize: 40,
    marginTop: -2,
    textAlign: 'center'
  }
});

export default EventList;
