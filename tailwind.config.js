module.exports = {
    jit: true,
    content: ['./packages/renderer/src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#232526',
                    DEFAULT: '#1a1c1e'
                }
            }
        }
    },
    plugins: []
};
