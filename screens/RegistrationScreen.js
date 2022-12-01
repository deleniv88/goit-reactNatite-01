import { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground, TextInput, Button, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard } from 'react-native';


const widthFormInput = '90%';

const initialState = {
    login: '',
    email: '',
    password: ''
}
export default function RegistrationScreen() {

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        setState(initialState);
        console.log(state);
    }

    const [isShowKeyboadr, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <View style={styles.registrationContainer}>

                    <Text style={styles.regitrationTitle}>Registration</Text>

                    <View style={{ ...styles.form, marginBottom: isShowKeyboadr ? 20 : 50 }}>
                        <View style={{ marginTop: 30 }}>
                            <TextInput style={styles.input}
                                placeholder="Login"
                                onFocus={() => setIsShowKeyboard(true)}
                                value={state.login}
                                onChangeText={(value) => setState((prevState) => ({ ...prevState, login: value }))}></TextInput>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TextInput style={styles.input}
                                placeholder="Email"
                                onFocus={() => setIsShowKeyboard(true)}
                                value={state.email}
                                onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}></TextInput>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TextInput style={styles.input}
                                placeholder="Password"
                                secureTextEntry={true}
                                onFocus={() => setIsShowKeyboard(true)}
                                value={state.password}
                                onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}></TextInput>
                        </View>
                        <TouchableOpacity
                            onPress={() => keyboardHide()}
                            activeOpacity={0.8}
                            style={styles.btnSignUp}>
                            <Text style={styles.btnTextSignUp}>Sign Up</Text>
                        </TouchableOpacity>
                        <Text style={styles.login}>
                            Already have an account? Login.
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    registrationContainer: {
        // marginTop: topPos,
        justifyContent: "center",
        width: 425,
        height: 649,
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1
    },
    regitrationTitle: {
        // fontWeight: 0.5,
        fontSize: 30
    },
    input: {
        borderWidth: 1,
        borderColor: "#E8E8E8",
        backgroundColor: "#F6F6F6",
        height: 50,
        borderRadius: 6,
        color: "#BDBDBD",
        fontSize: 16,
        paddingLeft: 10
    },
    form: {
        marginHorizontal: 40,
        width: widthFormInput,
    },
    btnSignUp: {
        height: 50,
        backgroundColor: "#FF6C00",
        color: "white",
        marginTop: 30,
        borderRadius: 20,
        fontSize: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    btnTextSignUp: {
        color: "white",
        fontSize: 16
    },
    login: {
        color: "#1B4371",
        textAlign: "center",
        fontSize: 16,
        marginTop: 10
    }
})