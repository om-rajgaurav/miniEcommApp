# Mini E-commerce App 🛍️

A modern, feature-rich mobile e-commerce application built with React Native, TypeScript, and Redux Toolkit. This app provides a seamless shopping experience with product browsing, search, cart management, and persistent state.

## ✨ Demo

https://github.com/user-attachments/assets/12b14786-cba2-46d0-bbb9-1c9d9e1a319d

## ✨ Features

### 🛒 Core Functionality
- **Product Listing**: Browse products with pagination (5 items per page)
- **Product Search**: Real-time search functionality to find products quickly
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add, remove, and manage product quantities
- **Cart Persistence**: Cart state persists across app restarts using AsyncStorage
- **Pull-to-Refresh**: Refresh product listings with a simple pull gesture

### 🎨 UI/UX
- **Modern Design**: Clean, professional interface with a vibrant color scheme
- **Shimmer Loading**: Elegant loading states with shimmer effects
- **Responsive Layout**: Optimized for various screen sizes
- **Bottom Tab Navigation**: Easy navigation between Products and Cart
- **Fixed Cart Summary**: Total price and checkout button fixed at bottom for easy access

### 🔧 Technical Features
- **TypeScript**: Full type safety throughout the application
- **Redux Toolkit**: Efficient state management with Redux
- **Redux Persist**: Automatic state persistence
- **Axios**: HTTP client for API requests
- **React Navigation**: Smooth navigation experience
- **Safe Area Support**: Proper handling of device safe areas

## 📱 Screenshots

The app features:
- Product listing with search bar
- Paginated product cards with images, titles, prices, and ratings
- Detailed product view
- Shopping cart with quantity controls
- Fixed bottom checkout section

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have completed the [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment) guide.

**Required:**
- Node.js >= 20
- npm or Yarn
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd miniEcommApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install iOS dependencies** (iOS only)
   
   First time setup:
   ```bash
   bundle install
   ```
   
   Install CocoaPods dependencies:
   ```bash
   cd ios
   bundle exec pod install
   cd ..
   ```

### Running the App

#### Start Metro Bundler
```bash
npm start
```

#### Run on Android
```bash
npm run android
```

#### Run on iOS
```bash
npm run ios
```

### Development Commands

- **Lint code**: `npm run lint`
- **Run tests**: `npm run test`
- **Start Metro**: `npm start`

## 🏗️ Project Structure

```
miniEcommApp/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── CartItem.tsx     # Cart item component
│   │   ├── ProductCard.tsx  # Product card component
│   │   ├── SearchBar.tsx    # Search input component
│   │   └── ShimmerCard.tsx  # Loading skeleton component
│   ├── navigation/          # Navigation configuration
│   │   └── AppNavigator.tsx # Bottom tab navigator
│   ├── screens/             # Screen components
│   │   ├── CartScreen.tsx   # Shopping cart screen
│   │   ├── ProductDetailsScreen.tsx  # Product details screen
│   │   └── ProductListScreen.tsx     # Product listing screen
│   ├── services/            # API and network services
│   │   ├── api.ts           # API endpoints
│   │   └── axiosInstance.ts # Axios configuration
│   ├── store/               # Redux store configuration
│   │   ├── slices/
│   │   │   ├── cartSlice.ts     # Cart state management
│   │   │   └── productsSlice.ts # Products state management
│   │   └── store.ts         # Redux store setup
│   ├── theme/               # Theme configuration
│   │   ├── colors.ts        # Color palette
│   │   └── spacing.ts       # Spacing and typography
│   └── types/               # TypeScript type definitions
│       └── types.ts         # App-wide types
├── App.tsx                  # Root component
└── package.json             # Dependencies and scripts
```

## 🛠️ Tech Stack

### Core
- **React Native** (0.82.1) - Mobile app framework
- **TypeScript** (5.8.3) - Type safety
- **React** (19.1.1) - UI library

### State Management
- **Redux Toolkit** (2.11.0) - State management
- **React Redux** (9.2.0) - React bindings for Redux
- **Redux Persist** (6.0.0) - State persistence

### Navigation
- **React Navigation** (7.x) - Navigation library
- **Bottom Tabs Navigator** - Tab-based navigation
- **Native Stack Navigator** - Stack-based navigation

### UI Components
- **React Native Vector Icons** (10.3.0) - Icon library
- **React Native Linear Gradient** (2.8.3) - Gradient effects
- **React Native Shimmer Placeholder** (2.0.9) - Loading skeletons

### Networking
- **Axios** (1.13.2) - HTTP client
- **FakeStore API** - Product data source

### Storage
- **AsyncStorage** (2.2.0) - Local data persistence

## 📦 Key Dependencies

```json
{
  "@reduxjs/toolkit": "^2.11.0",
  "@react-navigation/bottom-tabs": "^7.8.7",
  "@react-navigation/native-stack": "^7.8.1",
  "axios": "^1.13.2",
  "react-native-vector-icons": "^10.3.0",
  "redux-persist": "^6.0.0"
}
```

## 🎯 Features in Detail

### Product Listing
- Displays products in a scrollable list
- Shows product image, title, price, and rating
- Implements pagination (5 items per page)
- Automatic loading of more items on scroll
- Pull-to-refresh functionality

### Search
- Real-time search filtering
- Case-insensitive search
- Searches product titles
- Resets pagination on search

### Shopping Cart
- Add products to cart
- Increment/decrement quantities
- Remove items from cart
- Real-time total calculation
- Persistent cart state (survives app restarts)
- Fixed bottom section with total and checkout button

### Product Details
- Full product information
- Product image
- Title, description, price
- Category and rating
- Add to cart functionality

## 🔄 State Management

The app uses Redux Toolkit for state management with two main slices:

### Products Slice
- Manages product list
- Handles loading states
- Manages search query
- Error handling

### Cart Slice
- Manages cart items
- Calculates totals
- Handles quantity updates
- Persisted using Redux Persist

## 🌐 API Integration

The app integrates with the [FakeStore API](https://fakestoreapi.com/) for product data:
- **Endpoint**: `https://fakestoreapi.com/products`
- **Method**: GET
- **Response**: Array of product objects

## 🎨 Theming

The app uses a consistent color scheme defined in `src/theme/colors.ts`:
- **Primary**: Indigo (#6366F1)
- **Background**: Light gray (#F5F5F5)
- **Card**: White (#FFFFFF)
- **Text**: Dark gray (#1F2937)

## 🧪 Testing

Run tests with:
```bash
npm test
```

## 🐛 Troubleshooting

### Common Issues

**Metro bundler issues:**
```bash
npm start -- --reset-cache
```

**iOS build issues:**
```bash
cd ios
bundle exec pod install
cd ..
npm run ios
```

**Android build issues:**
```bash
cd android
./gradlew clean
cd ..
npm run android
```

For more help, see the [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting).

## 📚 Learn More

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ using React Native and TypeScript

---

**Happy Shopping! 🛍️**
