import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Snackbar } from "react-native-paper";

import { TextField } from "../Elements/Fields";
import { CreateContainer } from "../Layouts/CreateContainer";

const createGoal = ({ navigation, createNew }) => {
  const [selectedValue, setSelectedValue] = useState("Daily");
  const [textValue, updateSelectedText] = useState("");
  const [cadenceValue, updateCadenceValue] = useState("");
  const [warning, updateWarning] = useState(false);

  let data = [
    {
      value: "Daily"
    },
    {
      value: "Weekly"
    },
    {
      value: "Monthly"
    }
  ];

  function pressNextSubmit() {}

  return (
    <React.Fragment>
      <CreateContainer
        title="New Goal"
        subtitle="Let's push"
        back={() => navigation.navigate("Home")}
        nextLabel="Create"
        next={pressNextSubmit}
        onSubmitEditing={createNew}
        first
        {...{ navigation }}
      >
        <TextField
          style={styles.textInput}
          placeholder="Title"
          keyboardType="default"
          maxLength={20}
          autoCapitalize="words"
          returnKeyType="next"
          onChangeText={text => updateSelectedText(text)}
          value={textValue}
          contrast
        />
        <TextField
          style={styles.textInput}
          placeholder="Frequency Count"
          keyboardType="numeric"
          autoCapitalize="none"
          returnKeyType="next"
          onChangeText={text => updateCadenceValue(text)}
          value={cadenceValue}
          contrast
        />
      </CreateContainer>
      <Snackbar
        visible={warning}
        onDismiss={() => updateWarning(false)}
        style={styles.snackbar}
        action={{
          label: "OK",
          onPress: () => updateWarning(false)
        }}
      >
        All fields must be filled in
      </Snackbar>
    </React.Fragment>
  );
};
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    borderColor: "black",
    borderBottomWidth: 2,
    height: 30,
    marginTop: 25,
    marginBottom: 30,
    height: 40
  },
  snackbar: {
    position: "absolute",
    bottom: 25,
    left: width * 0.1,
    width: width * 0.8
  }
});

export default createGoal;
