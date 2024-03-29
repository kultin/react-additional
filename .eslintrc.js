module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:storybook/recommended',
        'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks', 'paths-react-aditional', 'unused-imports'],
    rules: {
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        // 'no-unused-vars': 'warn',
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/no-unused-vars': ['warn', {
            argsIgnorePattern: '^_',
        }],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'off',
        'no-promise-executor-return': 'off',
        'implicit-arrow-linebreak': 'warn',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: [
                'as',
                'data-testid',
                'border', 'target', 'to', 'justify', 'align', 'direction', 'gap', 'role'],
        }],
        'max-len': ['error', {
            code: 113,
            ignoreComments: true,
        }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error',
        // Checks effect dependencies
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'paths-react-aditional/path-checker': ['error', {
            alias: '@',
        }],
        'paths-react-aditional/public-api-imports': ['error', {
            alias: '@',
            testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
        }],
        'paths-react-aditional/layers-import': ['error', {
            alias: '@',
            ignoreImportPatterns: ['**/StoreProvider, **/testing'],
        }],
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [{
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
        },
    }],
};
