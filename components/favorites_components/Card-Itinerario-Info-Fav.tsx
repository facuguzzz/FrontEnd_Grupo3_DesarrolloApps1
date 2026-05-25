import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import TeatroColonIcon from '../../assets/images/Imagen-Teatro-Colon.svg';
import { icons } from '../../constants/icons';
import { colors } from '../../constants/colors';

type Props = {
    title?: string;
    category?: string;
    dateRange?: string;
    description?: string;
    onBackPress?: () => void;
    onEditPress?: () => void;
};

const categoryIconMap: Record<string, string> = {
    'Cultura': icons.Museum,
    'Naturaleza': icons.Landscape,
    'Gastronomía': icons.Restaurant,
    'Gastronomia': icons.Restaurant,
    'Aventura': icons.Hiking,
    'Noche': icons.Nightlife,
    'Compras': icons.ShoppingBag,
    'Compra': icons.ShoppingBag,
};

export function CardItinerarioInfoFav({
    title = "Teatro Colón",
    category = "Cultura",
    dateRange = "15 Oct - 22 Oct, 2024",
    description = "Visita guiada por el emblemático Teatro Colón, descubriendo su historia, arquitectura y secretos detrás del escenario.",
    onBackPress,
    onEditPress
}: Props) {
    const [isFavorite, setIsFavorite] = useState(true);

    const categoryIcon = categoryIconMap[category || ''] || icons.Museum;

    return (
        <View>
            {/** Contenedor de la imagen */}
            <View style={styles.contenedorImagen}>
                {/** Imagen superpuesta con texto */}
                <TeatroColonIcon width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={StyleSheet.absoluteFillObject} />

                {/** Capa superpuesta con filtro oscuro trasparente */}
                <View style={styles.heroOverlay}>

                    {/* Iconos de atras y corazon */}
                    <View style={styles.heroTopBar}>

                        {/** Boton de atras */}
                        <TouchableOpacity style={styles.contenedorCircular} onPress={onBackPress}>
                            <MaterialIcons name={icons.ArrowBack} size={20} color="#111827" />
                        </TouchableOpacity>

                        {/** Boton de corazon */}
                        <TouchableOpacity style={styles.contenedorCircular} onPress={() => setIsFavorite(!isFavorite)}>
                            <MaterialIcons 
                                name={isFavorite ? icons.FavoriteFilled : icons.FavoriteOutline} 
                                size={21} 
                                color={colors.danger} 
                            />
                        </TouchableOpacity>
                    </View>

                    {/** Contenido de la parte inferior de la imagen */}
                    <View style={styles.contenedorInfoInferior}>

                        {/** Insignia de la categoria */}
                        <View style={styles.etiquetaCategoria}>
                            <MaterialIcons 
                                name={categoryIcon as any} 
                                size={16} 
                                color="#111827" 
                                style={{ marginRight: 4 }} 
                            />
                            <Text style={styles.etiquetaCategoriaTexto}>{category}</Text>
                        </View>

                        <Text style={styles.titulo}>{title}</Text>

                        <View style={styles.contenedorFechasIconos}>

                            {/** Fechas */}
                            <View style={styles.fechas}>
                                <MaterialIcons name={icons.CalendarToday} size={16} color="#FFFFFF" />
                                <Text style={styles.fechasTexto}>{dateRange}</Text>
                            </View>

                            {/** Iconos de descarga y editar */}
                            <View style={styles.contenedorIconosDescargaEditar}>
                                <TouchableOpacity>
                                    <MaterialIcons name={icons.Download} size={23} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={onEditPress}>
                                    <MaterialIcons name={icons.Edit} size={23} color="#FFFFFF" />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
            </View>

            {/* Descripción */}
            <Text style={styles.descripcion}>
                {description}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedorImagen: {
        width: '100%',
        height: 280,
        marginTop: 10,
        borderRadius: 24,
        overflow: 'hidden',
        position: 'relative',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    heroOverlay: {
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    heroTopBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contenedorCircular: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenedorInfoInferior: {
        gap: 8,
    },
    etiquetaCategoria: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    etiquetaCategoriaTexto: {
        color: '#111827',
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: 2,
    },
    titulo: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 36,
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    contenedorFechasIconos: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    fechas: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 6,
    },
    fechasTexto: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
    contenedorIconosDescargaEditar: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 27,
    },
    descripcion: {
        fontSize: 16,
        color: '#4B5563',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 24,
    },
});
