import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { CartItem as CartItemType } from '../types/types';
import { colors } from '../theme/colors';
import { spacing, borderRadius, fontSize } from '../theme/spacing';

interface CartItemProps {
    item: CartItemType;
    onIncrement: () => void;
    onDecrement: () => void;
    onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
    item,
    onIncrement,
    onDecrement,
    onRemove,
}) => {
    const { product, quantity } = item;
    const totalPrice = (product.price * quantity).toFixed(2);

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: product.image }}
                style={styles.image}
                resizeMode="contain"
            />

            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={2}>
                    {product.title}
                </Text>

                <Text style={styles.price}>${product.price.toFixed(2)}</Text>

                <View style={styles.footer}>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={onDecrement}
                            activeOpacity={0.7}>
                            <Text style={styles.quantityButtonText}>-</Text>
                        </TouchableOpacity>

                        <Text style={styles.quantity}>{quantity}</Text>

                        <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={onIncrement}
                            activeOpacity={0.7}>
                            <Text style={styles.quantityButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.totalPrice}>${totalPrice}</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.removeButton}
                onPress={onRemove}
                activeOpacity={0.7}>
                <Text style={styles.removeButtonText}>✕</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.card,
        borderRadius: borderRadius.lg,
        padding: spacing.sm,
        marginBottom: spacing.sm,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: 80,
        height: 80,
        backgroundColor: colors.backgroundGray,
        borderRadius: borderRadius.md,
    },
    content: {
        flex: 1,
        marginLeft: spacing.sm,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: fontSize.sm,
        fontWeight: '600',
        color: colors.text,
        marginBottom: spacing.xs,
    },
    price: {
        fontSize: fontSize.sm,
        color: colors.textSecondary,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.backgroundGray,
        borderRadius: borderRadius.md,
        paddingHorizontal: spacing.xs,
    },
    quantityButton: {
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityButtonText: {
        fontSize: fontSize.lg,
        fontWeight: '600',
        color: colors.primary,
    },
    quantity: {
        fontSize: fontSize.md,
        fontWeight: '600',
        color: colors.text,
        marginHorizontal: spacing.sm,
        minWidth: 24,
        textAlign: 'center',
    },
    totalPrice: {
        fontSize: fontSize.lg,
        fontWeight: '700',
        color: colors.primary,
    },
    removeButton: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeButtonText: {
        fontSize: fontSize.lg,
        color: colors.textLight,
    },
});

export default CartItem;
