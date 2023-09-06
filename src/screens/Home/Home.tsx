import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AnimatedRing from "../../transformer/AnimatedRing";
import LogoSVG from "../logo/Logo.svg";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type Props = {}

const Questv1 = "Questv1-Regular";

const Login = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View>
        <LogoSVG />
      </View>
      <AnimatedRing />
      <View
        style={[
          {
            width: "100%",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textTouch}>تسجيل الدخول</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.textTouch}>انشئ حساب</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ECF2FC",
    width: "100%",
  },
  touchable: {
    textAlign: "center",
    backgroundColor: "#fff",
    marginBottom: 20,
    width: "80%",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textTouch: {
    fontSize: 20,
    color: "#312858",
    fontFamily: Questv1,
    fontWeight: "700",
  },
});

export default Login;
