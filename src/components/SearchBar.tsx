import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors } from '../theme/colors';
import { spacing, borderRadius, fontSize } from '../theme/spacing';

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChangeText,
    placeholder = 'Search products...',
}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={colors.textLight}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {value.length > 0 && (
                <TouchableOpacity
                    style={styles.clearButton}
                    onPress={() => onChangeText('')}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Text style={styles.clearIcon}>✕</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        backgroundColor: colors.background,
    },
    input: {
        flex: 1,
        backgroundColor: colors.backgroundGray,
        borderRadius: borderRadius.lg,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        fontSize: fontSize.md,
        color: colors.text,
        borderWidth: 1,
        borderColor: colors.borderLight,
    },
    clearButton: {
        position: 'absolute',
        right: spacing.md + spacing.sm,
        padding: spacing.xs,
    },
    clearIcon: {
        fontSize: 20,
        color: colors.textSecondary,
        fontWeight: '600',
    },
});

export default SearchBar;
