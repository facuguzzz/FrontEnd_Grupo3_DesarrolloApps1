# Componentes Reutilizables de TuristeAR

Este directorio contiene la biblioteca de componentes UI (Interfaz de Usuario) base para la aplicación TuristeAR. La arquitectura de esta carpeta está pensada siguiendo los principios de **Atomic Design** y **DRY (Don't Repeat Yourself)**.

## Justificación General
En lugar de estilizar elementos nativos (`View`, `Text`, `TextInput`, `TouchableOpacity`) repetidamente en cada pantalla, hemos encapsulado estos elementos en "Componentes Base". 

**Beneficios principales:**
1. **Consistencia Visual:** Asegura que todos los botones, inputs y contenedores se vean exactamente igual en toda la aplicación, respetando el sistema de diseño (colores corporativos, bordes, tipografía).
2. **Mantenibilidad:** Si en el futuro se decide cambiar el color principal de un botón o el borde de los inputs, el cambio se realiza en un solo archivo y se propaga a toda la app.
3. **Código Limpio:** Las pantallas (`screens/`) quedan mucho más limpias y fáciles de leer, enfocándose en la lógica de negocio y navegación, delegando la parte visual a estos componentes.

---

## Detalle de los Componentes

### 1. `BottomSheet.tsx`
Es un contenedor (`View`) estilizado específicamente para anclarse en la parte inferior de la pantalla. Cuenta con bordes superiores muy redondeados (`borderTopRadius: 30`) y una sutil sombra superior.
- **Justificación:** El diseño UI de autenticación y onboarding se basa fuertemente en un "panel blanco" que se superpone a un fondo azul degradado. Al extraer esto a un componente `BottomSheet`, evitamos reescribir complejas propiedades de `shadowColor`, `elevation` y `borderRadius` en las 3 pantallas de auth (Login, Register1, Register2).

### 2. `CustomButton.tsx`
Un botón interactivo (`TouchableOpacity`) que encapsula texto y opciones de iconos. Soporta diferentes **variantes** visuales (`primary`, `secondary`, `outline`).
- **Justificación:** Los botones son el elemento interactivo más repetido. Este componente garantiza la altura estándar (50px), los bordes redondeados y la interacción táctil. Además, cuenta con la propiedad `showArrow` para añadir dinámicamente la flecha de "Continuar", requerida en los diseños originales sin ensuciar el código de las pantallas.

### 3. `CustomInput.tsx`
Un campo de entrada de texto (`TextInput`) que envuelve la entrada nativa junto con un contenedor flexible para poder incrustar iconos a la izquierda.
- **Justificación:** Todos los formularios de la app usan el mismo estilo de input (fondo blanco, borde gris claro, altura de 50px). Este componente recibe una propiedad opcional `iconName` para renderizar automáticamente iconos de `@expo/vector-icons/Ionicons` dentro del input (como la llave para contraseñas o el sobre para correos), asegurando el padding y alineación perfecta en cada uso.

### 4. `HeaderLogo.tsx`
Agrupa la identidad visual de la aplicación: el recuadro blanco con el ícono corporativo (mapa), el título de la aplicación y un subtítulo descriptivo.
- **Justificación:** La marca superior aparece en múltiples lugares (Splash, Login, Registro), pero con ligeras variaciones (diferentes subtítulos o diferentes tamaños de logo). Este componente acepta props como `title`, `subtitle` y `largeLogo` para adaptarse a cada contexto sin duplicar la estructura del logo y sus sombras asociadas.
