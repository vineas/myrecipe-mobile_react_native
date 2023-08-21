import React from "react";
import { NativeBaseProvider, Stack, Input, Icon, Pressable, Text, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { userRegister } from "./redux/actions/userAction";
import { useState } from "react";
import { useDispatch } from "react-redux";

const register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const [data, setData] = useState({
        users_name: "",
        users_email: "",
        users_phone: "",
        users_password: "",
        users_confirmpassword: "",
    });

    const onChange = (name, value) => {
        setData({
            ...data,
            [name]: value,
        });
    };

    const navigation = useNavigation();
    const onClick = () => {
        dispatch(userRegister(data, navigation));
    };
    return (
        <NativeBaseProvider >
            <Stack space={4} w="100%" alignItems="center" justifyContent="center" height="100%" backgroundColor={'#F5F5F5'}>
                <Text style={{ fontSize: 20, color: "#EFC81A" }}>Let’s Get Started !</Text>
                <Text style={{ fontSize: 13, color: "grey" }}>Create new account to access all features</Text>
                <Input
                    borderRadius={13}
                    backgroundColor="white"
                    w="80%"
                    InputLeftElement={
                        <Icon
                            as={<MaterialIcons name="person" />}
                            size={5}
                            ml="2"
                            color="muted.400"
                        />
                    }
                    placeholder="Name"
                    onChangeText={(value) => onChange("users_name", value)}
                />
                <Input borderRadius={13} backgroundColor={'white'}
                    w={{
                        base: "80%",
                        md: "45%"
                    }}
                    InputLeftElement={<Icon as={<MaterialIcons name="mail" />} size={5} ml="2" color="muted.400" />}
                    placeholder="Email"
                    onChangeText={(value) => onChange("users_email", value)}
                />

                <Input borderRadius={13} backgroundColor={'white'}
                    w={{
                        base: "80%",
                        md: "45%"
                    }}
                    keyboardType={'phone-pad'}
                    InputLeftElement={<Icon as={<MaterialIcons name="phone" />} size={5} ml="2" color="muted.400" />}
                    placeholder="Phone Number"
                    onChangeText={(value) => onChange("users_phone", value)}
                />

                <Input
                    borderRadius={13}
                    backgroundColor="white"
                    w="80%"
                    type={showPassword ? "text" : "password"}
                    InputLeftElement={
                        <Icon
                            as={<MaterialIcons name="lock" />}
                            size={5}
                            ml="2"
                            color="muted.400"
                        />
                    }
                    InputRightElement={
                        <Pressable onPress={() => setShowPassword(!showPassword)}>
                            <Icon
                                as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />}
                                size={5}
                                mr="2"
                                color="muted.400"
                            />
                        </Pressable>
                    }
                    placeholder="Password"
                    onChangeText={(value) => onChange("users_password", value)}
                />

                <Input borderRadius={13} backgroundColor={'white'}
                    w={{
                        base: "80%",
                        md: "45%"
                    }}
                    type={showPassword ? "text" : "password"}
                    InputLeftElement={
                        <Icon as={<MaterialIcons name="lock" />} size={5} ml="2" color="muted.400" /> // Replace "lock" with the icon name you want
                    }
                    InputRightElement={

                        <Pressable onPress={() => setShowPassword(!showPassword)}>
                            <Icon
                                as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />}
                                size={5}
                                mr="2"
                                color="muted.400"
                            />
                        </Pressable>
                    }
                    placeholder="Confirm Password"
                    onChangeText={(value) => onChange("users_confirmpassword", value)}
                />

                <Button
                    size="md"
                    borderRadius={13}
                    w="80%"
                    backgroundColor="#EFC81A"
                    onPress={onClick}
                >
                    Register
                </Button>
                <Text>Have an account?</Text>
                <Link href="login">
                    <Text color="#EFC81A">Login</Text>
                </Link>
            </Stack>
        </NativeBaseProvider>
    )
}

export default register

