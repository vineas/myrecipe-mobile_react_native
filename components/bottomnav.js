import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Flex, NativeBaseProvider } from 'native-base';

const BottomNav = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.bottomNav}>
        <Flex direction="row">
          <View>
            <Text>Halo</Text>
          </View>
          <View>
            <Text>Halo</Text>
          </View>
          <View>
            <Text>Halo</Text>
          </View>
          <View>
            <Text>Halo</Text>
          </View>
        </Flex>
      </View>
    </NativeBaseProvider>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: '8%', // Space for bottom navigation bar
  },
  bottomNav: {
    width: '100%',
    height: '8%',
    backgroundColor: 'yellow',
    position: 'absolute',
    bottom: 0,
  },
});
