import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type InitScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Init'>;

interface Props {
  navigation: InitScreenNavigationProp;
}

export const InitScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Splash');
    }, 1000); // 1 second in black screen

    return () => clearTimeout(timer);
  }, [navigation]);

  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
