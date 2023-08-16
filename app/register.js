import React from "react";
import { NativeBaseProvider, Stack, Input, Icon, Pressable, Text, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import defaultImg from "../assets/image/login/default.jpg"
import { Link } from "expo-router";
import login from "./login";
import { useNavigation } from "@react-navigation/native";

const register = () => {
    const [show, setShow] = React.useState(false);
    const navigation = useNavigation();

    return (
        <NativeBaseProvider >
            <Stack space={4} w="100%" alignItems="center" justifyContent="center" height="100%" backgroundColor={'#F5F5F5'}> 
                <Text style={{ fontSize: 20, color: '#EFC81A' }}>Let’s Get Started !</Text>
                <Text style={{ fontSize: 13, color: 'grey' }}>Create new account to access all feautures</Text>
                <Input borderRadius={13} backgroundColor={'white'}
                    w={{
                        base: "80%",
                        md: "45%"
                    }}
                    InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}
                    placeholder="Name"
                />
                <Input borderRadius={13} backgroundColor={'white'} 
                    w={{
                        base: "80%",
                        md: "45%"
                    }}
                    InputLeftElement={<Icon as={<MaterialIcons name="mail" />} size={5} ml="2" color="muted.400" />}
                    placeholder="Email"
                />
                <Input borderRadius={13} backgroundColor={'white'}
                    w={{
                        base: "80%",
                        md: "45%"
                    }}
                    keyboardType={'phone-pad'}
                    InputLeftElement={<Icon as={<MaterialIcons name="phone" />} size={5} ml="2" color="muted.400" />}
                    placeholder="Phone Number"
                />
                <Input borderRadius={13} backgroundColor={'white'}
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
                />
                <Input borderRadius={13} backgroundColor={'white'}
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
                    placeholder="Confirm Password"
                />
                <Button size='md' borderRadius={13} w={{
                    base: "80%",
                    md: "25%"
                }} backgroundColor={'#EFC81A'}
                    onPress={() => navigation.navigate('login')}
                >Register
                </Button>

                <Text>
                    Have a account?
                </Text>
                <Link href="/login">
                    <Text color="#EFC81A">
                        Login
                    </Text>
                </Link>
            </Stack>
        </NativeBaseProvider>
    )
}

export default register

