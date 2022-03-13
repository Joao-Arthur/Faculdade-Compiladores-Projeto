module.exports = {
    jit: true,
    content: ['./packages/renderer/src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#1d1f21',
                    DEFAULT: '#1a1c1e'
                }
            }
        }
    },
    plugins: []
};
