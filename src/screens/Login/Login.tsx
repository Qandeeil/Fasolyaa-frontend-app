import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AnimatedRing from "../../transformer/AnimatedRing";
import LogoSVG from "../logo/logoLogin.svg";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {};

type RootStackParamList = {
    LoginEmail: undefined
  };

const Login = (props: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoSVG />
      </View>
      <View style={styles.containerAnimatedRing}>
        <AnimatedRing />
      </View>
      <View style={styles.containerLogin}>
        <Text style={styles.titleText}>الدخول عن طريق الهاتف</Text>
        <View style={styles.form}>
          <TouchableOpacity style={styles.touchable}>
            <Text style={styles.textTouch}>الهاتف</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate("LoginEmail")}>
            <Text style={styles.textTouch}>البريد الالكتروني</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const Questv1 = "Questv1-Regular";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ECF2FC",
  },
  logoContainer: {
    position: "absolute",
    top: 0,
  },
  containerAnimatedRing: {
    position: "absolute",
    zIndex: -1,
    alignSelf: "center",
  },
  containerLogin: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 26,
    paddingVertical: 30,
    alignItems: "center",
  },
  titleText: {
    fontSize: 28,
    color: "#312858",
  },
  form: {
    marginTop: 35,
    alignItems: 'center',
    width: '100%'
  },
  touchable: {
    backgroundColor: '#A1D858',
    height: 60,
    textAlign: "center",
    marginBottom: 20,
    width: "80%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textTouch: {
    fontSize: 20,
    color: "#fff",
    fontFamily: Questv1,
    fontWeight: "700",
  },
});
