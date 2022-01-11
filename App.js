import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';

export default function App() {
  console.log("app excuted");
  const handlePress = ()=> console.log("text pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello world!</Text>
      <TouchableHighlight onPress={()=> console.log("image pressed")}>
        <Image source={require('./assets/favicon.png')}/>
      </TouchableHighlight>
      <Button color="orange"
              title="click me" 
              onPress={() => Alert.alert("My title", "My message",[
                {text:"Yes", onPress:() =>console.log("yes")},
                {text:"No", onPress: () => console.log("No")}
              ])}
      />
     
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
   
  },
});
