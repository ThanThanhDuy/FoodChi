import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  Modal
} from 'react-native'

import React, { useEffect, useRef, useState } from 'react'
//color
import Color from '../Color/Color'
//logo
import Logo from '../Constants/Logo'
//papper UI
import { ActivityIndicator, Button } from 'react-native-paper'
//icon
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
//Formik
import { Formik } from 'formik'
//validate
import * as yup from 'yup'
//keyboad avoid
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper/KeyboardAvoidingWrapper'
//api
import FakeAuth from '../Api/FakeAuth'
//asyncstore
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSetRecoilState } from 'recoil'
import { userAuthState, userState } from '../Store/User/User'
//encode password
import { SHA256 } from '../Utils/SHA256'
const schema = yup.object({
  email: yup
    .string()
    .required('Oops! You must enter Email')
    .email("Oops! Email isn't valid"),
  password: yup
    .string()
    .required('Please enter Password')
    .min(6, 'Password length must be more than 6')
})

const Login = ({ navigation }) => {
  const setUser = useSetRecoilState(userState)
  const refInput2 = useRef()
  const [modalVisible, setModalVisible] = useState(false)
  // handleSubmit form login
  const handleSubmitLogin = async (values, actions) => {
    setModalVisible(true)
    const { email, password } = values
    const account = await FakeAuth.loginApi(
      email.trim(),
      SHA256(password.trim())
    )
    if (account) {
      try {
        const { user } = account.payload
        const jsonAccount = JSON.stringify(account)
        await AsyncStorage.setItem('@account', jsonAccount)
        setUser(user)
        setModalVisible(false)
        Keyboard.dismiss()
        actions.resetForm()
        navigation.navigate('Auth')
      } catch (e) {}
    } else {
      Alert.alert(
        'Sign in Failed',
        'Please check again your Email or Password',
        [
          {
            text: 'OK',
            onPress: () => {
              setModalVisible(false)
            }
          }
        ]
      )
    }
  }

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.loginBoxRoot}>
        <View style={styles.loginBox}>
          <View>
            <Image style={styles.loginLogo} source={Logo} />
          </View>
          <View>
            <Text style={styles.loginTitle}>
              F<Text style={styles.titleO1}>o</Text>
              <Text style={styles.titleO2}>o</Text>dChi
            </Text>
          </View>
          <View>
            <Text style={styles.LoginSignIn}>Sign in</Text>
          </View>
          {/* login with other */}
          <View style={styles.LoginBoxOther}>
            <TouchableOpacity activeOpacity={0.8}>
              <Button
                mode="contained"
                uppercase={false}
                color={Color.$btnOrange}
                style={styles.loginBtnGoogle}
                labelStyle={styles.loginBtnGoogleLabel}
              >
                <AntDesign name="google" size={17} color="white" />{' '}
                <Text style={styles.loginBtnOtherText}>With Google</Text>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <Button style={styles.loginBtnSocial}>
                <FontAwesome
                  style={styles.loginBtnSocialIcon}
                  name="facebook-f"
                  size={17}
                  color="black"
                />
              </Button>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <Button style={styles.loginBtnSocial}>
                <Ionicons
                  name="ios-logo-twitter"
                  style={styles.loginBtnSocialIcon}
                  size={17}
                  color="black"
                />
              </Button>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.loginTextEmail}>Or with Email</Text>
          </View>
          {/* login with email */}
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={schema}
            onSubmit={(values, actions) => {
              handleSubmitLogin(values, actions)
            }}
          >
            {({ handleChange, values, handleSubmit, touched, errors }) => (
              <View style={styles.loginForm}>
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
                <Text style={styles.errors}>
                  {touched.email && errors.email}
                </Text>
                <TextInput
                  style={styles.inputText}
                  placeholder="Password"
                  keyboardType="default"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  ref={refInput2}
                  onSubmitEditing={handleSubmit}
                />
                <Text style={styles.errors}>
                  {touched.password && errors.password}
                </Text>
                <TouchableOpacity activeOpacity={0.5}>
                  <Button
                    style={styles.btnLogin}
                    labelStyle={styles.btnLoginLabel}
                    mode="contained"
                    onPress={handleSubmit}
                    uppercase={false}
                  >
                    Sign in
                  </Button>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          {/* Register */}

          <View style={styles.regiterWrapper}>
            <Text style={styles.regiterUser}>New User?</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <Text
                onPress={() => navigation.navigate('Register')}
                style={styles.regiterSignup}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* modal loading */}
        <Modal transparent={true} animationType="fade" visible={modalVisible}>
          <View style={styles.modal}>
            <ActivityIndicator
              animating={true}
              color={Color.$textBasicLight}
              size={35}
            />
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnLogin: {
    marginTop: 25,
    backgroundColor: Color.$btnGreen,
    borderRadius: 15,
    justifyContent: 'center'
  },
  btnLoginLabel: {
    fontFamily: 'Poppins-medium',
    fontSize: 17,
    paddingVertical: 1
  },
  errors: {
    height: 15,
    marginVertical: 1,
    paddingLeft: 10,
    color: '#ff4d4f',
    fontSize: 11
  },
  loginBoxRoot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.$backgroundLight
  },
  loginBox: {
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
  LoginBoxOther: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  loginBtnSocial: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Color.$textBasicLight,
    minWidth: 50,
    marginLeft: 15
  },
  loginBtnSocialIcon: {
    color: Color.$textBasicLight
  },
  loginBtnGoogle: {
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2
  },
  loginBtnGoogleLabel: {
    color: Color.$textBasicWhite,
    fontFamily: 'Poppins-medium'
  },
  loginBtnOtherText: {
    fontSize: 13
  },
  loginForm: {
    marginTop: 25
  },
  loginLogo: {
    width: 120,
    height: 120,
    overflow: 'visible'
  },
  loginTitle: {
    fontSize: 40,
    fontFamily: 'Poppins-medium',
    color: Color.$textBasicLight
  },
  LoginSignIn: {
    fontSize: 30,
    fontFamily: 'Poppins-bold',
    color: Color.$textBasicLight,
    marginTop: 20
  },
  loginTextEmail: {
    fontFamily: 'Poppins-regular',
    color: Color.$textBasicLight,
    fontSize: 13,
    marginTop: 25
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0,0.2)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    // marginVertical: 5,
    paddingLeft: 10,
    fontSize: 15
  },
  regiterSignup: {
    fontFamily: 'Poppins-medium',
    color: Color.$textGreen
  },
  regiterUser: {
    fontFamily: 'Poppins-medium',
    color: Color.$textBasicLight,
    marginRight: 3
  },
  regiterWrapper: {
    marginTop: 70,
    flexDirection: 'row'
  }
})
