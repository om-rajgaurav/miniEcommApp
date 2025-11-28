import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    RefreshControl,
    ActivityIndicator,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '../store/store';
import {
    setLoading,
    setProducts,
    setError,
    setSearchQuery,
} from '../store/slices/productsSlice';
import { productApi } from '../services/api';
import ProductCard from '../components/ProductCard';
import ShimmerCard from '../components/ShimmerCard';
import SearchBar from '../components/SearchBar';
import { Product, RootStackParamList } from '../types/types';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

type ProductListScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ProductList'
>;

interface ProductListScreenProps {
    navigation: ProductListScreenNavigationProp;
}

const ITEMS_PER_PAGE = 5;

const ProductListScreen: React.FC<ProductListScreenProps> = ({ navigation }) => {
    const dispatch = useAppDispatch();
    const { items, loading, error, searchQuery } = useAppSelector(state => state.products);
    const [refreshing, setRefreshing] = useState(false);
    const [displayedItems, setDisplayedItems] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchProducts();
    }, []);

    // Update displayed items when products or page changes
    useEffect(() => {
        const filtered = getFilteredProducts();
        const paginated = filtered.slice(0, currentPage * ITEMS_PER_PAGE);
        setDisplayedItems(paginated);
    }, [items, currentPage, searchQuery]);

    const fetchProducts = async () => {
        try {
            dispatch(setLoading(true));
            const products = await productApi.getAllProducts();
            dispatch(setProducts(products));
            setCurrentPage(1);
        } catch (err) {
            dispatch(setError('Failed to fetch products'));
        } finally {
            dispatch(setLoading(false));
        }
    };

    const handleRefresh = () => {
        setRefreshing(true);
        setCurrentPage(1);
        fetchProducts().finally(() => setRefreshing(false));
    };

    const handleProductPress = (product: Product) => {
        navigation.navigate('ProductDetails', { product });
    };

    const handleSearch = (text: string) => {
        dispatch(setSearchQuery(text));
        setCurrentPage(1);
    };

    const getFilteredProducts = () => {
        if (!searchQuery) return items;
        return items.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const handleLoadMore = () => {
        const filtered = getFilteredProducts();
        const hasMore = displayedItems.length < filtered.length;
        if (hasMore && !loading) {
            setCurrentPage(prev => prev + 1);
        }
    };

    if (loading && items.length === 0) {
        return (
            <View style={styles.container}>
                <SearchBar value={searchQuery} onChangeText={handleSearch} />
                <View style={styles.shimmerContainer}>
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <ShimmerCard key={i} />
                    ))}
                </View>
            </View>
        );
    }

    if (error && items.length === 0) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    const filtered = getFilteredProducts();
    const hasMore = displayedItems.length < filtered.length;

    return (
        <View style={styles.container}>
            <SearchBar value={searchQuery} onChangeText={handleSearch} />

            <FlatList
                data={displayedItems}
                renderItem={({ item }) => (
                    <ProductCard
                        product={item}
                        onPress={() => handleProductPress(item)}
                    />
                )}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={
                    hasMore ? (
                        <View style={styles.footer}>
                            <ActivityIndicator size="small" color={colors.primary} />
                        </View>
                    ) : null
                }
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>
                            {searchQuery ? 'No products found' : 'No products available'}
                        </Text>
                    </View>
                }
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={[colors.primary]}
                        tintColor={colors.primary}
                    />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    listContent: {
        paddingHorizontal: spacing.md,
        paddingBottom: spacing.md,
    },
    shimmerContainer: {
        paddingHorizontal: spacing.md,
    },
    footer: {
        paddingVertical: spacing.md,
        alignItems: 'center',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: spacing.xxl,
    },
    emptyText: {
        fontSize: 16,
        color: colors.textSecondary,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.md,
    },
    errorText: {
        fontSize: 16,
        color: colors.error,
        textAlign: 'center',
    },
});

export default ProductListScreen;
