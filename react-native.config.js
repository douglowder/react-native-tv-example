module.exports = {
  dependencies: {
    // Required for Expo CLI to be used with platforms (such as Apple TV) that are not supported in Expo SDK
    expo: {
      platforms: {
        android: null,
        ios: null,
        macos: null,
      },
    },
    // No Flipper
    'react-native-flipper': {
      platforms: {
        android: null,
        ios: null,
        macos: null,
      },
    },
  },
};
