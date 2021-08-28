import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useEffect, useRef } from 'react'
//color
import Color from '../Color/Color'
//logo
// import Logo from '../Constants/Logo'
const Logo = require('../assets/Logo/logo.png')
//papper UI
import { Button } from 'react-native-paper'
//icon
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
//Formik
import { Formik } from 'formik'
//keyboad avoid
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper/KeyboardAvoidingWrapper'
import { useRecoilValue } from 'recoil'
import { userState } from '../Store/User/User'
const Register = ({ navigation }) => {
  // handleSubmit form register
  const handleSubmitRegister = values => {
    console.log(values)
  }
  //ref to next input
  const refInput2 = useRef()
  const refInput3 = useRef()

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.registerBoxRoot}>
        <View style={styles.registerBox}>
          <View>
            <Image style={styles.registerLogo} source={Logo} />
          </View>
          <View>
            <Text style={styles.registerTitle}>
              F<Text style={styles.titleO1}>o</Text>
              <Text style={styles.titleO2}>o</Text>dChi
            </Text>
          </View>
          <View>
            <Text style={styles.registerSignIn}>Sign up</Text>
          </View>
          {/* register with other */}
          <View style={styles.registerBoxOther}>
            <TouchableOpacity activeOpacity={0.8}>
              <Button
                mode="contained"
                uppercase={false}
                color={Color.$btnOrange}
                style={styles.registerBtnGoogle}
                labelStyle={styles.registerBtnGoogleLabel}
              >
                <AntDesign name="google" size={17} color="white" />{' '}
                <Text style={styles.registerBtnOtherText}>With Google</Text>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <Button style={styles.registerBtnSocial}>
                <FontAwesome
                  style={styles.registerBtnSocialIcon}
                  name="facebook-f"
                  size={17}
                  color="black"
                />
              </Button>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <Button style={styles.registerBtnSocial}>
                <Ionicons
                  name="ios-logo-twitter"
                  style={styles.registerBtnSocialIcon}
                  size={17}
                  color="black"
                />
              </Button>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.registerTextEmail}>Or with Email</Text>
          </View>
          {/* register with email */}
          <Formik
            initialValues={{ email: '', password: '', repassword: '' }}
            onSubmit={values => {
              handleSubmitRegister(values)
            }}
          >
            {({ handleChange, values, handleSubmit }) => (
              <View style={styles.registerForm}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  onSubmitEditing={() => {
                    refInput2.current.focus()
                  }}
                />
                <TextInput
                  style={styles.inputText}
                  placeholder="Password"
                  keyboardType="default"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  ref={refInput2}
                  onSubmitEditing={() => {
                    refInput3.current.focus()
                  }}
                />
                <TextInput
                  style={styles.inputText}
                  placeholder="Re-Password"
                  keyboardType="default"
                  secureTextEntry={true}
                  onChangeText={handleChange('repassword')}
                  value={values.repassword}
                  ref={refInput3}
                  onSubmitEditing={handleSubmit}
                />
                <TouchableOpacity activeOpacity={0.5}>
                  <Button
                    style={styles.btnRegister}
                    labelStyle={styles.btnRegisterLabel}
                    mode="contained"
                    onPress={handleSubmit}
                    uppercase={false}
                  >
                    Sign up
                  </Button>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          {/* Register */}

          <View style={styles.loginWrapper}>
            <Text style={styles.loginUser}>Aready a Member?</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <Text
                onPress={() => navigation.navigate('Login')}
                style={styles.loginSignin}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnRegister: {
    marginTop: 15,
    backgroundColor: Color.$btnGreen,
    borderRadius: 15,
    justifyContent: 'center'
  },
  btnRegisterLabel: {
    fontFamily: 'Poppins-medium',
    fontSize: 17,
    paddingVertical: 1
  },
  registerBoxRoot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.$backgroundLight
  },
  registerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.$backgroundLight,
    // position: 'absolute',
    // width: '100%',
    // height: '100%',
    paddingHorizontal: 50
    // bottom: 150
  },
  registerBoxOther: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  registerBtnSocial: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Color.$textBasicLight,
    minWidth: 50,
    marginLeft: 15
  },
  registerBtnSocialIcon: {
    color: Color.$textBasicLight
  },
  registerBtnGoogle: {
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2
  },
  registerBtnGoogleLabel: {
    color: Color.$textBasicWhite,
    fontFamily: 'Poppins-medium'
  },
  registerBtnOtherText: {
    fontSize: 13
  },
  registerForm: {
    marginTop: 25
  },
  registerLogo: {
    width: 120,
    height: 120,
    overflow: 'visible'
  },
  registerTitle: {
    fontSize: 40,
    fontFamily: 'Poppins-medium',
    color: Color.$textBasicLight
  },
  registerSignIn: {
    fontSize: 30,
    fontFamily: 'Poppins-bold',
    color: Color.$textBasicLight,
    marginTop: 20
  },
  registerTextEmail: {
    fontFamily: 'Poppins-regular',
    color: Color.$textBasicLight,
    fontSize: 13,
    marginTop: 25
  },
  titleO1: {
    fontFamily: 'Poppins-bold',
    color: Color.$textOrange
  },
  titleO2: {
    fontFamily: 'Poppins-bold',
    color: Color.$textGreen
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Color.$textBasicLight
  },
  inputText: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Color.$textBasicLight,
    minWidth: '100%',
    minHeight: 45,
    borderRadius: 15,
    fontFamily: 'Poppins-medium',
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 15
  },
  loginSignin: {
    fontFamily: 'Poppins-medium',
    color: Color.$textGreen
  },
  loginUser: {
    fontFamily: 'Poppins-medium',
    color: Color.$textBasicLight,
    marginRight: 3
  },
  loginWrapper: {
    marginTop: 50,
    flexDirection: 'row'
  }
})
