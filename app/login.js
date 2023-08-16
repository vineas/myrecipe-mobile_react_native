import React from "react";
import { NativeBaseProvider, Stack, Input, Icon, Pressable, Avatar, Text, Button, View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import defaultImg from "../assets/image/login/default.jpg"
import { Link } from "expo-router";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const [show, setShow] = useState(false);
    const navigation = useNavigation();

    return (
        <NativeBaseProvider>
            <Stack space={4} w="100%" alignItems="center" justifyContent="center" height="100%">
                <Avatar size="xl" source={defaultImg} key="avatar" />
                <Text style={{ fontSize: 20, color: '#EFC81A' }} key="welcome-text">Welcome!</Text>
                <Text style={{ fontSize: 13, color: 'grey' }} key="info-text">Log in to your existing account.</Text>

                <Input backgroundColor={'#F5F5F5'}
                    borderRadius={13}
                    w={{
                        base: "80%",
                        md: "45%"
                    }}
                    InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}
                    placeholder="Name"
                    key="name-input"
                />
                <Input backgroundColor={'#F5F5F5'}
                    borderRadius={13}
                    w={{
                        base: "80%",
                        md: "45%"
                    }}
                    type={show ? "text" : "password"}
                    InputLeftElement={
                        <Icon as={<MaterialIcons name="lock" />} size={5} ml="2" color="muted.400" /> // Replace "lock" with the icon name you want
                    }
                    InputRightElement={
                        <Pressable onPress={() => setShow(!show)}>
                            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                        </Pressable>
                    }
                    placeholder="Password"
                    key="password-input"
                />
                <Text key="forgot-password">
                    Forgot Password?
                </Text>
                <Button
                    size='md'
                    borderRadius={13}
                    w={{
                        base: "80%",
                        md: "25%"
                    }}
                    backgroundColor={'#EFC81A'}
                    onPress={() => navigation.navigate('main')}
                    key="login-button"
                >
                    Login
                </Button>
                <Text key="no-account">
                    Don't have an account?
                </Text>
                <Link href="/register" key="register-link">
                    <Text color="#EFC81A">
                        Register
                    </Text>
                </Link>
            </Stack>
        </NativeBaseProvider>
    );
}