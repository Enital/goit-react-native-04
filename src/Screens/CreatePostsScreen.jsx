import { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const CreatePostsScreen = () => {
  const [photoName, setPhotoName] = useState(null);
  const [place, setPlace] = useState(null);

  const handleSubmit = () => {
    console.log(photoName, place);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Pressable style={styles.cameraIcon}>
              <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
            </Pressable>
          </View>
          <Text style={styles.photoText}>Завантажте фото</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
              value={photoName}
              onChangeText={setPhotoName}
            ></TextInput>
          </View>
          <View style={[styles.inputContainer, { marginBottom: 32 }]}>
            <Feather name="map-pin" size={24} color="#BDBDBD" />
            <TextInput
              style={[styles.input, { marginLeft: 4 }]}
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
              value={place}
              onChangeText={setPlace}
            ></TextInput>
          </View>

          <Pressable style={styles.publishBtn}>
            <Text style={styles.publishBtnText} onPress={handleSubmit}>
              Опубліковати
            </Text>
          </Pressable>
          <Pressable style={styles.deleteBtn}>
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 240,
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
    marginBottom: 8,
  },
  cameraIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  photoText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    alignSelf: "flex-start",
    marginBottom: 32,
  },
  inputContainer: {
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  input: {
    height: 50,
    width: "100%",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
  },
  publishBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 51,
    fontStyle: "Roboto-Regular",
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    marginBottom: 80,
  },
  publishBtnText: {
    fontSize: 16,
    color: "#BDBDBD",
  },
  deleteBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
});
