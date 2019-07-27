module.exports = {
  extends: [
    'prettier'
  ],

  plugins: [
    'prettier'
  ],

  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },

  env: {
    es6: true,
    node: true,
  },

  rules: {
    'prettier/prettier': [
      1,
      {
        arrowParens: 'avoid',
        printWidth: 120,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
      }
    ],

    // error prone code
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-func-assign': 2,
    'no-irregular-whitespace': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'valid-typeof': 2,
    'no-multi-assign': 2,

    // enforce hoisting
    'block-scoped-var': 1,
    'no-use-before-define': 1,

    // switch must contain a default
    'default-case': 1,

    // enforce dot-notation over ['brackets']
    'dot-notation': 1,

    // enforce === & !==
    eqeqeq: 1,

    // Don't use alert/confirm/prompt
    'no-alert': 1,

    // C-style return (no else after return)
    'no-else-return': 1,

    // Use explicit type casting (ex: String(), Boolean())
    'no-implicit-coercion': 1,

    // Can't reassign function arguments in func scope
    'no-param-reassign': 2,

    // no brainers
    'no-self-assign': 1,
    'no-self-compare': 1,
    'no-useless-concat': 1,

    // use "var [compare] expression"
    yoda: [1, 'never', { exceptRange: true }],

    // Variables
    'no-shadow-restricted-names': 2, // Prevent shadowing of builtins
    'no-undef-init': 1,
    'no-unused-vars': 1,

    // Prevent use of deprecated Buffer method (node)
    'no-buffer-constructor': 2,

    // Style #A E S T H E T I C
    'array-element-newline': [1, 'consistent'],
    'brace-style': [1, 'stroustrup', {allowSingleLine: true}],
    camelcase: 1,
    'comma-spacing': [1, {before: false, after: true}],
    'comma-style': [1, 'last'],
    'func-call-spacing': [1, 'never'],
    'implicit-arrow-linebreak': 1,
    'key-spacing': [1, {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum'
    }],
    'jsx-quotes': [1, 'prefer-double'],
    'multiline-comment-style': 1,
    'new-cap': 2,
    'no-array-constructor': 2,
    'no-continue': 1,
    'no-lonely-if': 1,
    'no-trailing-spaces': 1,
    'no-unneeded-ternary': 1,
    'no-whitespace-before-property': 1,
    'nonblock-statement-body-position': [1, 'below'],
    'object-curly-newline': [1, {consistent: true}],
    'operator-linebreak': [1, 'before'],
    'prefer-object-spread': 1,
    'quote-props': [1, 'as-needed'],
    'space-unary-ops': [1, {"words": true, "nonwords": false}],
    'arrow-spacing': [1, {before: true, after: true}],
    'no-const-assign': 1,
    'no-duplicate-imports': 1,
    'no-useless-computed-key': 1,
    'no-useless-constructor': 1,
    'no-useless-rename': 2,
    'nonblock-statement-body-position': [1, 'below', {overrides: {if: 'any'}}],
    'no-var': 2,
    'prefer-arrow-callback': 1,
    'prefer-const': 1,
    'prefer-destructuring': 1
  },
}
