import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Product } from '../types/types';
import { colors } from '../theme/colors';
import { spacing, borderRadius, fontSize } from '../theme/spacing';

interface ProductCardProps {
    product: Product;
    onPress: () => void;
}

const { width } = Dimensions.get('window');

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.content}>
                <View style={styles.topSection}>
                    <View style={styles.categoryBadge}>
                        <Text style={styles.category}>{product.category}</Text>
                    </View>
                    <View style={styles.ratingBadge}>
                        <Text style={styles.ratingText}>⭐</Text>
                        <Text style={styles.ratingValue}>{product.rating.rate.toFixed(1)}</Text>
                    </View>
                </View>

                <Text style={styles.title} numberOfLines={3}>
                    {product.title}
                </Text>

                <View style={styles.footer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceLabel}>Price</Text>
                        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                    </View>

                    <View style={styles.reviewCount}>
                        <Text style={styles.reviewText}>{product.rating.count} reviews</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: colors.card,
        borderRadius: borderRadius.lg,
        marginBottom: spacing.lg,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 8,
        overflow: 'hidden',
        minHeight: 200,
        borderWidth: 1,
        borderColor: colors.borderLight,
    },
    imageContainer: {
        width: 160,
        height: 200,
        backgroundColor: colors.backgroundGray,
        padding: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    content: {
        flex: 1,
        padding: spacing.md,
        justifyContent: 'space-between',
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.sm,
    },
    categoryBadge: {
        backgroundColor: colors.primaryLight,
        paddingHorizontal: spacing.sm,
        paddingVertical: 4,
        borderRadius: borderRadius.sm,
    },
    category: {
        fontSize: fontSize.xs,
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    ratingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.warning,
        paddingHorizontal: spacing.sm,
        paddingVertical: 4,
        borderRadius: borderRadius.sm,
        gap: 4,
    },
    ratingText: {
        fontSize: 12,
    },
    ratingValue: {
        fontSize: fontSize.xs,
        fontWeight: '700',
        color: colors.white,
    },
    title: {
        fontSize: fontSize.md,
        fontWeight: '600',
        color: colors.text,
        lineHeight: 22,
        marginBottom: spacing.sm,
        flex: 1,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    priceContainer: {
        flex: 1,
    },
    priceLabel: {
        fontSize: fontSize.xs,
        color: colors.textSecondary,
        marginBottom: 2,
    },
    price: {
        fontSize: fontSize.xxl,
        fontWeight: '700',
        color: colors.primary,
    },
    reviewCount: {
        paddingHorizontal: spacing.sm,
        paddingVertical: 4,
        backgroundColor: colors.backgroundGray,
        borderRadius: borderRadius.sm,
    },
    reviewText: {
        fontSize: fontSize.xs,
        color: colors.textSecondary,
        fontWeight: '500',
    },
});

export default ProductCard;
