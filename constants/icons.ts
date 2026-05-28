import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const icons = {
  // Generales
  ArrowForward: 'arrow-forward',
  ArrowBack: 'arrow-back',
  AddLocationAlt: 'add-location-alt',
  CalendarToday: 'calendar-today',
  CalendarMonth: 'calendar-month',
  RocketLaunch: 'rocket-launch',
  FavoriteOutline: 'favorite-border', // favorite (borde)
  FavoriteFilled: 'favorite', // favorite (filled)
  Star: 'star',
  Keep: 'bookmark', // Equivalente común para guardar/keep
  Schedule: 'schedule',
  PhotoCamera: 'photo-camera',
  Lock: 'lock',
  Logout: 'logout',
  Visibility: 'visibility',
  VisibilityOff: 'visibility-off',

  // Activities Icons
  Landscape: 'landscape',
  Hiking: 'hiking',
  Restaurant: 'restaurant',
  Museum: 'museum',
  Nightlife: 'nightlife',
  ShoppingBag: 'shopping-bag',

  // Topbar
  DarkMode: 'dark-mode',
  LightMode: 'light-mode',

  // Navbar
  Home: 'home',
  Explore: 'explore',
  Person: 'person',
} as const;

// Tipos para asegurar autocompletado en tus componentes
export type AppIconKey = keyof typeof icons;
export type MaterialIconName = keyof typeof MaterialIcons.glyphMap;
