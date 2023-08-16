import React from "react";
import { Box, FlatList, HStack, VStack, Text, NativeBaseProvider, View, Heading, Flex } from "native-base";
import { Image, TouchableOpacity } from "react-native";
import list from "../assets/image/listHome/list-2.png"
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";


const List = () => {
  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Pecel Lele",
    timeStamp: "Spicy",
    recentText: "Fast food",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Nasi Goreng",
    timeStamp: "Spicy",
    recentText: "Fast food",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Mie Ayam",
    timeStamp: "Spicy",
    recentText: "Fast food",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
  }
  // , {
  //   id: "68694a0f-3da1-431f-bd56-142371e29d72",
  //   fullName: "Aniket Kumar",
  //   timeStamp: "8:56 PM",
  //   recentText: "All the best",
  //   avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
  // }, {
  //   id: "28694a0f-3da1-471f-bd96-142456e29d72",
  //   fullName: "Kiara",
  //   timeStamp: "12:47 PM",
  //   recentText: "I will call today.",
  //   avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  // },
  // {
  //   id: "28694a0f-3da1-471f-bd96-142456e29d72",
  //   fullName: "Kiara ",
  //   timeStamp: "12:47 PM",
  //   recentText: "I will call today.",
  //   avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  // },
  // {
  //   id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //   fullName: "Aafreen Khan",
  //   timeStamp: "12:47 PM",
  //   recentText: "Good Day!",
  //   avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  // }, {
  //   id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //   fullName: "Sujitha Mathur",
  //   timeStamp: "11:11 PM",
  //   recentText: "Cheer up, there!",
  //   avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
  // }, {
  //   id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //   fullName: "Anci Barroco",
  //   timeStamp: "6:22 PM",
  //   recentText: "Good Day!",
  //   avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
  // }, {
  //   id: "68694a0f-3da1-431f-bd56-142371e29d72",
  //   fullName: "Aniket Kumar",
  //   timeStamp: "8:56 PM",
  //   recentText: "All the best",
  //   avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
  // }, {
  //   id: "28694a0f-3da1-471f-bd96-142456e29d72",
  //   fullName: "Kiara",
  //   timeStamp: "12:47 PM",
  //   recentText: "I will call today.",
  //   avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  // },
  // {
  //   id: "28694a0f-3da1-471f-bd96-142456e29d72",
  //   fullName: "Kiara ",
  //   timeStamp: "12:47 PM",
  //   recentText: "I will call today.",
  //   avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  // }


  ];

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('popular');
  };
  return (
    <NativeBaseProvider>
      <Box>
        <Heading fontSize="xl" marginLeft={10}>
          Popular for you
        </Heading>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <HStack space={3} marginTop={5} marginLeft={10}>
              <TouchableOpacity onPress={onPress}>
                <Flex direction="row" mb="2.5" mt="1.5">
                  <View>
                    <Image size="lg" source={list} />
                  </View>
                  <View 
                  style={{ marginLeft: 10 }}
                  >
                    <Text style={{ fontSize: 20 }}>{item.fullName}</Text>
                    <View>
                      <Text>{item.recentText}</Text>
                    </View>
                    <View>
                      <Text>{item.timeStamp}</Text>
                    </View>
                  </View>
                </Flex>
              </TouchableOpacity>
            </HStack>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </NativeBaseProvider>
  )
}

export default List

// const styles = StyleSheet.create({})