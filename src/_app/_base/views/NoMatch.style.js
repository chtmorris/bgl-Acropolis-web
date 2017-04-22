const themecolor = document.querySelector('meta[name="theme-color"]').content;

export default {
    section : {
        color: '#fff',
        backgroundColor: themecolor
    },
    h2 : {
        letterSpacing: '0.1rem',
        marginBottom: '0.618rem'
    },
    Link : {
        display: 'block',
        width: '48px',
        height: '48px',
        lineHeight: '48px',
        outline: 'none',
        margin: 0,
        padding: 0,
        borderWidth: 0,
        borderStyle: 'none',
        textAlign: 'center'
    },
    span : {
        fontWeight: '500'
    }
};
