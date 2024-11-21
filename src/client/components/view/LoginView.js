import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import { commonStyles, DEFAULT_COLOURS } from '../../styles/commonStyles';
import SubmitButton from '../common/SubmitButton';
import SecondaryButton from '../common/SecondaryButton';

const LoginView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [incorrectPassword, setIncorrectPassword] = useState(false);

    return (
        <View style={commonStyles.container}>
          <Text style={commonStyles.header}>{`Login to Plutos`}</Text>
          <View style={styles.loginContainer}>
            <TextInput
                placeholder="Email/Phone Number"
                style={commonStyles.input}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                placeholderTextColor={DEFAULT_COLOURS.secondary}
            />
            <TextInput
              placeholder="Password"
              style={commonStyles.input}
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              secureTextEntry={true}
              placeholderTextColor={DEFAULT_COLOURS.secondary}
            />
          </View>

          <SubmitButton label="Continue" />
          {incorrectPassword && (
            <Text style={commonStyles.errorText}>Incorrect password</Text>
          )}

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <View>
              <Text style={{paddingHorizontal: "10%"}}>or</Text>
            </View>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.loginContainer}>
            <View style={styles.alternateSignInContainer}>
                <Image style={{width: 50, height: 50, marginTop: 15}} source={require("../../assets/google_icon.png")} alt="google" />
                <SecondaryButton buttonStyle={{flex: 1}} textStyle={{fontWeight: "bold"}} label="Continue with Google" />
            </View>

            <View style={styles.alternateSignInContainer}>
                <Image style={
                    {
                        width: 30,
                        height: 30,
                        marginTop: 25,
                        marginRight: 10,
                        marginLeft: 10
                    }
                } source={require("../../assets/microsoft_icon.png")} alt="microsoft" />
                <SecondaryButton buttonStyle={{flex: 1}} textStyle={{fontWeight: "bold"}} styles={{marginLeft: 10}} label="Continue with Microsoft" />
            </View>

            <View style={styles.alternateSignInContainer}>
                <Image style={
                    {
                        width: 33,
                        height: 33,
                        marginTop: 15,
                        marginRight: 10,
                        marginLeft: 10
                    }
                } source={require("../../assets/apple_icon.png")} alt="microsoft" />
                <SecondaryButton buttonStyle={{flex: 1}} textStyle={{fontWeight: "bold"}} label="Continue with Apple" />
            </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  loginContainer: {
    display: 'block',
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    width: "90%"
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    width: "80%"
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  alternateSignInContainer: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    width: "75%",
    justifyContent: "flex-start",
    marginTop: 5,
    marginBottom: 5,
  }
});

export default LoginView;