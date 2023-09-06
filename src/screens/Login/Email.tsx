import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import LoginEmailSVG from "../logo/LoginEmail.svg";
import AnimatedRing from "../../transformer/AnimatedRing";
import EmailSVG from "../logo/email.svg";
import PasswordSVG from "../logo/password.svg";
import EyeShowSVG from "../logo/EyeShow.svg";
import EyeHideSVG from "../logo/EyeHide.svg";

type Props = {};

const Email = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LoginEmailSVG width={169.21} height={187.69} />
      </View>
      <View style={styles.containerContent}>
        <View style={styles.containerAnimatedRing}>
          <AnimatedRing />
        </View>
        <View style={styles.containerLogin}>
          <Text style={styles.titleText}>تسجيل الدخول الى حسابك</Text>
          <View style={styles.form}>
            <View
              style={[
                styles.contentInputContainer,
                styles.contentInputContainerFirst,
              ]}
            >
              <Text style={styles.textInput}>البريد الالكتروني</Text>
              <View style={styles.inputContainer}>
                <View style={styles.styleSVG}>
                  <EmailSVG />
                </View>
                <TextInput
                  placeholder="البريد الالكتروني"
                  style={styles.input}
                />
              </View>
            </View>
            <View style={styles.contentInputContainer}>
              <Text style={styles.textInput}>كلمة المرور</Text>
              <View style={styles.inputContainer}>
                <View style={styles.styleSVG}>
                  <PasswordSVG />
                </View>
                <TextInput
                  placeholder="كلمة المرور"
                  style={styles.input}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  style={styles.styleSVGShowEye}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeShowSVG width={20} height={20} />
                  ) : (
                    <EyeHideSVG width={20} height={20} color="red" />
                  )}
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.textForgotPassword}>
                  هل نسيت كلمة المرور؟
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.textTouch}>تسجيل الدخول</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.createAccountContainer}>
        <Text style={styles.textCreateOne}>
          ليس لديك حساب؟ 
          <Text style={styles.textCreateTow}>حساب جديد</Text>
        </Text>
      </View>
    </View>
  );
};

export default Email;

const Questv1 = "Questv1-Regular";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ECF2FC",
  },
  logoContainer: {
    marginTop: 40,
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
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 28,
    color: "#312858",
  },
  form: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    zIndex: 1,
  },
  contentInputContainer: {
    width: "100%",
  },
  contentInputContainerFirst: {
    marginBottom: 20,
  },
  textInput: {
    fontSize: 15,
    color: "#8CACC1",
    marginBottom: 4,
    marginRight: 5,
  },
  inputContainer: {
    backgroundColor: "#EEF3F6",
    borderRadius: 31,
    height: 52,
    flexDirection: "row-reverse",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  styleSVG: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    textAlign: "right",
  },
  styleSVGShowEye: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4,
  },
  forgotPassword: {
    marginTop: 7,
    marginRight: 5,
  },
  textForgotPassword: {
    fontSize: 17,
    color: "#8CACC1",
  },
  touchable: {
    backgroundColor: "#A1D858",
    height: 60,
    textAlign: "center",
    marginBottom: 20,
    width: "100%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  textTouch: {
    fontSize: 20,
    color: "#fff",
    fontFamily: Questv1,
    fontWeight: "700",
  },
  containerContent: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    zIndex: 1,
    justifyContent: "center",
    marginBottom: 40,
  },
  createAccountContainer: {
    height: 48.01,
    backgroundColor: "#fff",
    width: "80%",
    borderTopRightRadius: 11,
    borderTopLeftRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  textCreateOne: {
    fontSize: 15,
    color: "#312858",
    alignItems: 'center'
  },
  textCreateTow: {
    fontSize: 15,
    color: "#A1D858",
    fontWeight: "bold",
  },
});
