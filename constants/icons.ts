export const iconsName = {
  // Generales
  AddItinerary: 'add-location-alt',
  EmptyCalendar: 'calendar-today',
  FullCalendar: 'calendar-month',
  RocketLaunch: 'rocket-launch',
  Save: 'bookmark', 
  Schedule: 'schedule',
  PhotoCamera: 'photo-camera',
  Logout: 'logout',
  Location: 'place',
  CloudOffline: 'cloud-off',
  Download: 'file-download',
  Pin: 'push-pin',
  Compass: 'explore',

  //Contraseña
  Lock: 'lock',
  Visibility: 'visibility',
  VisibilityOff: 'visibility-off',
  Save: 'save',
  CloudOffline: 'cloud-off',
  Compass: 'compass',
  Location: 'location-on',
  Download: 'download',
  Pin: 'push-pin',
  Edit: 'edit',
  Delete: 'delete',
  'chevron.right': 'keyboard-arrow-right',
  'chevron.left.forwardslash.chevron.right': 'code',

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
  Favorite: 'favorite',
} as const;

// Tipos para asegurar autocompletado en tus componentes
export type AppIconKey = keyof typeof icons;
export type MaterialIconName = keyof typeof MaterialIcons.glyphMap;
