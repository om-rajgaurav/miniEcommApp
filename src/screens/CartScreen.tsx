import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/store';
import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
} from '../store/slices/cartSlice';
import CartItem from '../components/CartItem';
import { CartItem as CartItemType } from '../types/types';
import { colors } from '../theme/colors';
import { spacing, borderRadius, fontSize } from '../theme/spacing';

const CartScreen: React.FC = () => {
    const dispatch = useAppDispatch();
    const { items, totalAmount, totalItems } = useAppSelector(state => state.cart);

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <CartItem
                        item={item}
                        onIncrement={() => dispatch(incrementQuantity(item.product.id))}
                        onDecrement={() => dispatch(decrementQuantity(item.product.id))}
                        onRemove={() => dispatch(removeFromCart(item.product.id))}
                    />
                )}
                keyExtractor={item => item.product.id.toString()}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyIcon}>🛒</Text>
                        <Text style={styles.emptyTitle}>Your cart is empty</Text>
                        <Text style={styles.emptyText}>
                            Add some products to get started!
                        </Text>
                    </View>
                }
            />

            {items.length > 0 && (
                <View style={styles.bottomSection}>
                    <View style={styles.totalContainer}>
                        <View style={styles.totalRow}>
                            <Text style={styles.totalLabel}>Items:</Text>
                            <Text style={styles.totalValue}>{totalItems}</Text>
                        </View>

                        <View style={styles.totalRow}>
                            <Text style={styles.totalLabel}>Subtotal:</Text>
                            <Text style={styles.totalValue}>${totalAmount.toFixed(2)}</Text>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.totalRow}>
                            <Text style={styles.grandTotalLabel}>Total:</Text>
                            <Text style={styles.grandTotalValue}>${totalAmount.toFixed(2)}</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.checkoutButton}
                        activeOpacity={0.8}>
                        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    listContent: {
        padding: spacing.md,
        paddingBottom: spacing.md,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: spacing.xxl,
    },
    emptyIcon: {
        fontSize: 64,
        marginBottom: spacing.md,
    },
    emptyTitle: {
        fontSize: fontSize.xl,
        fontWeight: '700',
        color: colors.text,
        marginBottom: spacing.xs,
    },
    emptyText: {
        fontSize: fontSize.md,
        color: colors.textSecondary,
    },
    bottomSection: {
        backgroundColor: colors.card,
        padding: spacing.md,
        paddingBottom: spacing.lg,
        borderTopWidth: 1,
        borderTopColor: colors.border,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 8,
    },
    totalContainer: {
        marginBottom: spacing.md,
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.sm,
    },
    totalLabel: {
        fontSize: fontSize.md,
        color: colors.textSecondary,
    },
    totalValue: {
        fontSize: fontSize.md,
        fontWeight: '600',
        color: colors.text,
    },
    divider: {
        height: 1,
        backgroundColor: colors.border,
        marginVertical: spacing.sm,
    },
    grandTotalLabel: {
        fontSize: fontSize.lg,
        fontWeight: '700',
        color: colors.text,
    },
    grandTotalValue: {
        fontSize: fontSize.xxl,
        fontWeight: '700',
        color: colors.primary,
    },
    checkoutButton: {
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
    checkoutButtonText: {
        fontSize: fontSize.lg,
        fontWeight: '700',
        color: colors.white,
    },
});

export default CartScreen;
