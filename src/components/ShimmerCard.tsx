import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { colors } from '../theme/colors';
import { spacing, borderRadius } from '../theme/spacing';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const ShimmerCard: React.FC = () => {
    return (
        <View style={styles.card}>
            <ShimmerPlaceholder style={styles.image} />

            <View style={styles.content}>
                <View style={styles.topSection}>
                    <ShimmerPlaceholder style={styles.category} />
                    <ShimmerPlaceholder style={styles.rating} />
                </View>

                <ShimmerPlaceholder style={styles.titleLine1} />
                <ShimmerPlaceholder style={styles.titleLine2} />
                <ShimmerPlaceholder style={styles.titleLine3} />

                <View style={styles.footer}>
                    <View>
                        <ShimmerPlaceholder style={styles.priceLabel} />
                        <ShimmerPlaceholder style={styles.price} />
                    </View>
                    <ShimmerPlaceholder style={styles.reviews} />
                </View>
            </View>
        </View>
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
    image: {
        width: 160,
        height: 200,
        backgroundColor: colors.backgroundGray,
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
    category: {
        height: 20,
        width: 90,
        borderRadius: borderRadius.sm,
    },
    rating: {
        height: 20,
        width: 50,
        borderRadius: borderRadius.sm,
    },
    titleLine1: {
        height: 18,
        borderRadius: 4,
        marginBottom: 6,
    },
    titleLine2: {
        height: 18,
        width: '85%',
        borderRadius: 4,
        marginBottom: 6,
    },
    titleLine3: {
        height: 18,
        width: '60%',
        borderRadius: 4,
        marginBottom: spacing.sm,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    priceLabel: {
        height: 12,
        width: 40,
        borderRadius: 4,
        marginBottom: 4,
    },
    price: {
        height: 28,
        width: 90,
        borderRadius: 4,
    },
    reviews: {
        height: 24,
        width: 80,
        borderRadius: borderRadius.sm,
    },
});

export default ShimmerCard;
