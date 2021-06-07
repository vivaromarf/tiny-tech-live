import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Content } from "native-base";
import Text from "../Elements/Text";
import Button from "../Elements/Button";
import Theme from "../Elements/Theme";
import Container from "../Elements/Container";
import LoadingIndicator from "../Elements/LoadingIndicator";
const SignUpContainer = ({ title, subtitle, next, children, nextLabel, back, snackbar, loading, navigation }) => {
  if (loading) {
    return (
      <Container gutter={1}>
        <LoadingIndicator />
      </Container>
    );
  } else {
    return (
      <Container gutter={1}>
        <Content style={styles.content}>
          <View style={styles.innerContent}>
            <Text type="large">{subtitle}</Text>
            <Text type="header2" gutterBottom>
              {title}
            </Text>
            <View>{children}</View>
            <Button
              label={nextLabel || "Next"}
              onPress={next}
              full
              white
              style={{ backgroundColor: Theme.palette.buttonTheme, borderRadius: 32 }}
            />
            <Button label="Back" onPress={back} full />
            {navigation.state.routeName === "Login" && (
              <Button
                label="Forgot Password?"
                onPress={() => navigation.navigate("ForgotPassword")}
                full
                style={{ marginTop: 50 }}
                textStyle={{ textDecorationLine: "underline" }}
              />
            )}
          </View>
        </Content>
        {snackbar}
      </Container>
    );
  }
};

const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  content: {
    padding: Theme.spacing.base
  },
  innerContent: {
    height: height - Theme.spacing.base * 4,
    justifyContent: "center"
  }
});

export default SignUpContainer;
