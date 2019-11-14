import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { _getCurrentWatchId } from 'expo-location';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


// 
// components and apis
// http://facebook.github.io/react-native/docs/components-and-apis
export default function App() {
  // Hooks can only call inside the function body not inside the class.
  
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    // uncomment to see entered text in console.
    // console.log(enteredGoal);
    // uncomment when you use scroll view to show data.
    // setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);

    // Maintain key and value pair because to avoid warnings like "same text have children" 
    setCourseGoals(currentGoals => [...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
       return currentGoals.filter((goal) => goal.id !== goalId); 
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      {/* <ScrollView>

        {courseGoals.map((goal) => (
          <View key={goal} style={styles.listItem}>

            <Text>{goal}</Text>

          </View>
        ))}

      </ScrollView> */}

      {/* using flat list because it is loading ui faster than scrollview */}
      {/* onDelete={() => console.log("clicked on UI")} */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem  onDelete={removeGoalHandler.bind(this, itemData.item.id)} title={itemData.item.value}/>
        )}
      />

      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  
});
