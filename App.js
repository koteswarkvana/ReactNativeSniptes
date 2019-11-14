import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { _getCurrentWatchId } from 'expo-location';


// 
// components and apis
// http://facebook.github.io/react-native/docs/components-and-apis
export default function App() {
  // Hooks can only call inside the function body not inside the class.
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  // Here setEnteredGoal ==> setting the text from taken keyboard.
  // Here enteredGoal ==> finally entered text from the keyboard.
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // uncomment to see entered text in console.
    // console.log(enteredGoal);
    // uncomment when you use scroll view to show data.
    // setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);

    // Maintain key and value pair because to avoid warnings like "same text have children" 
    setCourseGoals(currentGoals => [...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        {/* set value for text input onChangeText={goalInputHandler} */}
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        {/* print text on console while click on button */}
        <Button title="ADD" onPress={addGoalHandler} />

      </View>
      {/* <ScrollView>

        {courseGoals.map((goal) => (
          <View key={goal} style={styles.listItem}>

            <Text>{goal}</Text>

          </View>
        ))}

      </ScrollView> */}

      {/* using flat list because it is loading ui faster than scrollview */}

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    backgroundColor: '#908970',
    borderWidth: 1,
    marginVertical: 10,
    borderColor: 'black'
  }
});
