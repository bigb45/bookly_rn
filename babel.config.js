module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["@babel/plugin-transform-private-methods", { loose: true }],
      // "nativewind/babel", // Temporarily disabled - NativeWind v2 has async PostCSS issues with Tailwind v3
    ],
  };
};
