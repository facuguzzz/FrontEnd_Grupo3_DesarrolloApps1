import React from 'react';
import { View, Text, Pressable } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { styles } from './BottomNavBar.styles';
import { colors } from '../../../constants/colors';
import { iconsName } from '../../../constants/icons';

export type TabName = 'Inicio' | 'Explorar' | 'Favoritos' | 'Perfil';

export interface BottomNavBarProps {
  /** The currently active tab */
  activeTab?: TabName;
  /** Callback fired when a tab is pressed */
  onTabPress?: (tab: TabName) => void;
}

interface TabItemProps {
  label: TabName;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  isActive: boolean;
  onPress: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ label, iconName, isActive, onPress }) => (
  <Pressable 
    onPress={onPress}
    style={styles.tabContainer}
    accessibilityRole="tab"
    accessibilityState={{ selected: isActive }}
  >
    <View style={[styles.contentWrapper, isActive && styles.contentWrapperActive]}>
      <MaterialCommunityIcons 
        name={iconName} 
        size={22} 
        color={isActive ? colors.primary : colors.button_gray}
        style={{ marginBottom: 2 }}
      />
      <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
        {label}
      </Text>
    </View>
  </Pressable>
);

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab = 'Favoritos',
  onTabPress,
}) => {
  return (
    <View style={styles.navBarContainer}>
      <TabItem 
        label="Inicio" 
        iconName={iconsName.Home} 
        isActive={activeTab === 'Inicio'} 
        onPress={() => onTabPress?.('Inicio')} 
      />
      <TabItem 
        label="Explorar" 
        iconName={iconsName.Explore} 
        isActive={activeTab === 'Explorar'} 
        onPress={() => onTabPress?.('Explorar')} 
      />
      <TabItem 
        label="Favoritos" 
        iconName={iconsName.Favorites} 
        isActive={activeTab === 'Favoritos'} 
        onPress={() => onTabPress?.('Favoritos')} 
      />
      <TabItem 
        label="Perfil" 
        iconName={iconsName.Person} 
        isActive={activeTab === 'Perfil'} 
        onPress={() => onTabPress?.('Perfil')} 
      />
    </View>
  );
};
