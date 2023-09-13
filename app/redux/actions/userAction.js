import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
import { Alert } from "react-native";
// import { useNavigation } from '@react-navigation/native';
import { useNavigation } from "expo-router";


export const userRegister = (data, navigation) => async (dispatch) => {
    // const navigate = useNavigation();
    try {
        const response = await axios.post(`http://192.168.1.5:7474/users/register`, data);

        if (response.status === 201) {
            Alert.alert(
                "Register Added",
                "New account has been created",
                [
                    {
                        text: "OK",
                        onPress: () => {
                            navigation.navigate("login");
                        },
                    },
                ],
                { cancelable: false }
            );
        } else {
            const datas = response.data;

            datas.forEach((res) => {
                console.log(res.message);
                Alert.alert("Error", res.message, [{ text: "OK" }], {
                    cancelable: false,
                });
            });
        }

        dispatch({ type: "CREATE_USER", payload: data });
    } catch (err) {
        if (err.response && err.response.status === 404) {
            Alert.alert("Warning", err.response.data.message, [{ text: "OK" }], {
                cancelable: false,
            });
            console.log(err);
        }
    }
};

export const loginUser = (data, navigation) => async (dispatch) => {
    try {
        const response = await axios.post(`http://192.168.1.5:7474/users/login`, data);

        console.log(response.data.data);

        if (response.data.status === "success") {
            await AsyncStorage.setItem("users_id", response.data.data.users_id);
            await AsyncStorage.setItem("users_id_profile", response.data.data.users_id);
            await AsyncStorage.setItem("token", response.data.data.token_user);
            const storedUsersId = await AsyncStorage.getItem("users_id");
            console.log("Stored users_id:", storedUsersId);

            Alert.alert(
                "Login Success",
                "Your account has been successfully logged in",
                [
                    {
                        text: "OK",
                        onPress: () => {
                            navigation.navigate("main");
                        },
                    },
                ],
                { cancelable: false }
            );

            dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
        } else if (response.data.status === "error" && response.data.message === "Email not found") {
            Alert.alert("Login Error", "The email you entered was not found.", [{ text: "OK" }], {
                cancelable: false,
            });
        } else {
            console.log(response.data.message);
            Alert.alert("Login Error", response.data.message, [{ text: "OK" }], {
                cancelable: false,
            });
        }
    } catch (error) {
        console.log(error);
    }
};
