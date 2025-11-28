import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch } from '../store/store';
import { addToCart } from '../store/slices/cartSlice';
import { RootStackParamList } from '../types/types';
import { colors } from '../theme/colors';
import { spacing, borderRadius, fontSize } from '../theme/spacing';

type ProductDetailsScreenProps = NativeStackScreenProps<
    RootStackParamList,
    'ProductDetails'
>;

const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({
    route,
}) => {
    const { product } = route.params;
    const dispatch = useAppDispatch();
    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        setAddedToCart(true);

        // Show feedback
        Alert.alert(
            'Added to Cart',
            `${product.title} has been added to your cart.`,
            [{ text: 'OK', onPress: () => setAddedToCart(false) }]
        );
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.category}>{product.category.toUpperCase()}</Text>

                <Text style={styles.title}>{product.title}</Text>

                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>⭐</Text>
                    <Text style={styles.rating}>
                        {product.rating.rate.toFixed(1)} ({product.rating.count} reviews)
                    </Text>
                </View>

                <Text style={styles.price}>${product.price.toFixed(2)}</Text>

                <View style={styles.divider} />

                <Text style={styles.sectionTitle}>Description</Text>
                <Text style={styles.description}>{product.description}</Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={[styles.addButton, addedToCart && styles.addButtonDisabled]}
                    onPress={handleAddToCart}
                    activeOpacity={0.8}>
                    <Text style={styles.addButtonText}>
                        {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    imageContainer: {
        width: '100%',
        height: 300,
        backgroundColor: colors.backgroundGray,
        padding: spacing.lg,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    content: {
        padding: spacing.md,
    },
    category: {
        fontSize: fontSize.xs,
        fontWeight: '600',
        color: colors.primary,
        marginBottom: spacing.xs,
        letterSpacing: 1,
    },
    title: {
        fontSize: fontSize.xxl,
        fontWeight: '700',
        color: colors.text,
        marginBottom: spacing.sm,
        lineHeight: 32,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing.md,
    },
    ratingText: {
        fontSize: fontSize.md,
        marginRight: spacing.xs,
    },
    rating: {
        fontSize: fontSize.md,
        color: colors.textSecondary,
    },
    price: {
        fontSize: fontSize.xxxl,
        fontWeight: '700',
        color: colors.primary,
        marginBottom: spacing.md,
    },
    divider: {
        height: 1,
        backgroundColor: colors.border,
        marginVertical: spacing.md,
    },
    sectionTitle: {
        fontSize: fontSize.lg,
        fontWeight: '700',
        color: colors.text,
        marginBottom: spacing.sm,
    },
    description: {
        fontSize: fontSize.md,
        color: colors.textSecondary,
        lineHeight: 24,
    },
    footer: {
        padding: spacing.md,
        paddingBottom: spacing.lg,
    },
    addButton: {
        backgroundColor: colors.primary,
        borderRadius: borderRadius.lg,
        paddingVertical: spacing.md,
        alignItems: 'center',
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    addButtonDisabled: {
        backgroundColor: colors.success,
    },
    addButtonText: {
        fontSize: fontSize.lg,
        fontWeight: '700',
        color: colors.white,
    },
});

export default ProductDetailsScreen;
