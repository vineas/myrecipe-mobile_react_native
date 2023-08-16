import { SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Avatar, Icon, NativeBaseProvider, Stack, View, Text, Flex } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";
import defaultImg from "../assets/image/login/default.jpg"
import { useNavigation } from 'expo-router';
import panah from '../assets/image/profile/shape.png'

const Profile = ({onPressLike, onPressEditProfile, onPressMyRecipe, onPressSaved }) => {
  // const navigation = useNavigation();
  // const onPressLike = () => {
  //   navigation.navigate('likeds');
  // };
  // const onPressEditProfile = () => {
  //   navigation.navigate('editprofile');
  // };
  // const onPressMyRecipe = () => {
  //   navigation.navigate('myrecipe');
  // };
  // const onPressSaved = () => {
  //   navigation.navigate('saved');
  // };

  return (
    <SafeAreaView style={{ backgroundColor: "#EEC302", height: 306 }}>
      <NativeBaseProvider>
        <Stack space={4} w="100%" alignItems="center" justifyContent="center" height="100%" marginTop={10}>
          <Avatar w={'34%'} h={'40%'} source={defaultImg} />
          <Text style={{ fontSize: 22, color: 'white' }}>Mareta Lapodia</Text>
        </Stack>
        <View backgroundColor={'white'} h='200%' w='90%' paddingLeft={6} marginTop={'-60'} borderRadius={20} marginLeft={'5%'}>

          <TouchableOpacity onPress={onPressEditProfile}>
            <Flex direction="row" mb="2.5" mt="4" marginTop={5}>
              <View>
                {<Icon as={MaterialIcons} color="#EFC81A" size={8} name="person" />}
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text fontSize={19}>Edit Profile</Text>
              </View>
              <View style={{ marginLeft: 'auto', marginRight: 26, marginTop: 5 }}>
                <Image size="lg" source={panah} />
              </View>
            </Flex>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressMyRecipe}>
            <Flex direction="row" mb="2.5" mt="4">
              <View>
                {<Icon as={MaterialIcons} color="#EFC81A" size={8} name="list" />}
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text fontSize={19}>My Recipe</Text>
              </View>
              <View style={{ marginLeft: 'auto', marginRight: 26, marginTop: 5 }}>
                <Image size="lg" source={panah} />
              </View>
            </Flex>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressSaved}>
            <Flex direction="row" mb="2.5" mt="4">
              <View>
                {<Icon as={MaterialIcons} color="#EFC81A" size={8} name="bookmark" />}
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text fontSize={19}>Saved Recipe</Text>
              </View>
              <View style={{ marginLeft: 'auto', marginRight: 26, marginTop: 5 }}>
                <Image size="lg" source={panah} />
              </View>
            </Flex>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressLike}>
            <Flex direction="row" mb="2.5" mt="4">
              <View>
                {<Icon as={MaterialIcons} color="#EFC81A" size={8} name="thumb-up" />}
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text fontSize={19}>Liked Recipe</Text>
              </View>
              <View style={{ marginLeft: 'auto', marginRight: 26, marginTop: 5 }}>
                <Image size="lg" source={panah} />
              </View>
            </Flex>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressLike}>
            <Flex direction="row" mb="2.5" mt="4">
              <View>
              <Icon as={MaterialIcons} size={8} name="logout" color="#FF0000" />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text fontSize={19} color="#FF0000">Logout</Text>
              </View>
              <View style={{ marginLeft: 'auto', marginRight: 26, marginTop: 5 }}>
                <Image size="lg" source={panah} />
              </View>
            </Flex>
          </TouchableOpacity>

        </View>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

export default Profile;

const styles = {
  container: {
    flex: 1
  },
};