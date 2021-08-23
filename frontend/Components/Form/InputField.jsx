import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const InputField = () => {
  return <TextInput style={styles.input} placeholder="Email" label="Email" />
}

export default InputField

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row'
  }
})
