import React from "react";
import { NativeBaseProvider, Stack, Input, Icon, Pressable, Text, Button, TextArea } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import defaultImg from "../assets/image/login/default.jpg"
import { Link } from "expo-router";
import login from "./login";
import { useNavigation } from "@react-navigation/native";

const AddRecipe = () => {
    const [show, setShow] = React.useState(false);
    const navigation = useNavigation();

    return (
        <NativeBaseProvider >
            <Stack space={4} w="100%" alignItems="center" height="100%" backgroundColor={'#F5F5F5'} >
                <Text style={{ color: '#EFC81A', fontSize: 22, fontWeight:'bold' }} marginTop={20}>Add Your Recipe</Text>
                <Input borderRadius={13} backgroundColor={'white'}
                    w={{
                        base: "80%",
                        md: "45%"
                    }}
                    InputLeftElement={<Icon as={<MaterialIcons name="book" />} size={5} ml="2" color="muted.400" />}
                    placeholder="Title"
                />
                <TextArea borderRadius={13} backgroundColor={'white'}
                    w={{
                        base: "80%",
                        md: "45%"
                    }}
                    h={40}
                    placeholder="Description"
                />
                <Input borderRadius={13} backgroundColor={'white'}
                    w={{
                        base: "80%",
                        md: "45%"
                    }}
                    InputLeftElement={<Icon as={<MaterialIcons name="image" />} size={5} ml="2" color="muted.400" />}
                    placeholder="Add Picture"
                />
                <Input borderRadius={13} backgroundColor={'white'}
                    w={{
                        base: "80%",
                        md: "45%"
                    }}
                    InputLeftElement={<Icon as={<MaterialIcons name="videocam" />} size={5} ml="2" color="muted.400" />}
                    placeholder="Add Video"
                />

                <Button size='md' borderRadius={13} w={{
                    base: "80%",
                    md: "25%"
                }} backgroundColor={'#EFC81A'}
                    // onPress={() => navigation.navigate('')}
                >Create
                </Button>


            </Stack>
        </NativeBaseProvider>
    )
}

export default AddRecipe

// const styles = StyleSheet.create({})