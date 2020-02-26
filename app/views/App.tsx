/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image
} from "react-native";

import ImagePicker, { ImagePickerOptions } from "react-native-image-picker";

import { Header, Colors } from "react-native/Libraries/NewAppScreen";

const options: ImagePickerOptions = {
  title: "Select a photo",
  mediaType: "photo",
  storageOptions: {
    skipBackup: true
  }
};

const App = () => {
  const [photo, setPhoto] = useState<string>(
    "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  );
  const usingHermes =
    typeof HermesInternal === "object" && HermesInternal !== null;

  const ChoosePhoto = (): void => {
    ImagePicker.launchImageLibrary(options, (response): any => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const { uri } = response;
        setPhoto(uri);
      }
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {!usingHermes ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>GG</Text>
            </View>
          )}
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}>
            <Button title="Choose Photo" onPress={ChoosePhoto}></Button>
          </View>
        </ScrollView>
        <Image
          source={{
            uri: photo
          }}
          style={styles.photo}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  },
  photo: {
    marginTop: 10,
    width: "100%",
    height: 300
  }
});

export default App;
