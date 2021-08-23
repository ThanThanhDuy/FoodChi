import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
//color
import Color from '../Color/Color'
//logo
import Logo from '../Constants/Logo'
//papper UI
import { Button } from 'react-native-paper'
//icon
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
//react hook form
import { useForm, Controller } from 'react-hook-form'
import InputField from '../Components/Form/InputField'
const Login = () => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  })
  const onSubmit = data => {
    console.log(data)
  }

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text
    }
  }

  return (
    <View style={styles.loginBoxRoot}>
      <View style={styles.loginBox}>
        <Image style={styles.loginLogo} source={Logo} />
        <Text style={styles.loginTitle}>
          F<Text style={styles.titleO1}>o</Text>
          <Text style={styles.titleO2}>o</Text>dChi
        </Text>
        <Text style={styles.LoginSignIn}>Sign in</Text>
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
        </View>
        <Text style={styles.loginTextEmail}>Or with Email</Text>
        {/* login with email */}
        {/* <View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => <InputField />}
            name="firstName"
            rules={{ required: true }}
          />
        </View> */}
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
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
    position: 'absolute',
    width: '100%',
    height: '100%'
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
    marginTop: 35
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
  }
})
