module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'expo-router/babel',                       // ← OBLIGATOIRE pour Expo Router
      ['module-resolver', { alias: { '@': './' }, extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'] }],
      'react-native-reanimated/plugin',          // doit rester en dernier si tu utilises Reanimated
    ],
  };
};