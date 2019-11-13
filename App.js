import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  // Hooks can only call inside the function body not inside the class.
    return (
      <View style={styles.container}>
        <Text>{outputText}</Text>

        <Button title="Change Text Content" 
        onPress= {() => setOutputText("Hello world text changed.")}/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
