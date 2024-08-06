import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bgColor: `var(--bgColor)`,
        primaryColor: `var(--primaryColor)`,

        themePrimaryColor: `var(--themePrimaryColor)`,
        themeButtonPrimaryColor: `var(--themeButtonPrimaryColor)`,
        themeButtonSecondaryColor: `var(--themeButtonSecondaryColor)`,

        headerBorderColor: `var(--headerBorderColor)`,

        leftSideBorder: `var(--leftSideBorder)`,

        textEditorColor: `var(--textEditorColor)`,
        textEditorHoverColor: `var(--textEditorHoverColor)`,
        textEditorHoverBg: `var(--textEditorHoverBg)`,

        tabBarBgColor: `var(--tabBarBgColor)`,

        tabBarActiveBorderColor: `var(--tabBarActiveBorderColor)`,
        tabBarActiveTextColor: `var(--tabBarActiveTextColor)`,
        tabBarActiveBgColor: `var(--tabBarActiveBgColor)`,
        tabBarBorderColor: `var(--tabBarBorderColor)`,
      },
    },
  },
  plugins: [],
};
export default config;
