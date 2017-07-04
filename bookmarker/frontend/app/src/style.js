const style = {
    header: {
        height: 53,
        //backgroundColor: '#c00',
        backgroundColor: '#353B4C',
        borderBottom: '3px solid black',
        verticalAlign: 'middle',
        lineHeight: '50px'
    },
    title: {
        color: 'white',
        marginLeft: 20,
        //fontWeight: 'bold',
        //fontSize: '20px'
        marginTop: 0,
        lineHeight: '50px'
    },
    addButton: {
        marginRight: 10, 
        float: 'right'
    },
    footer: {
        backgroundColor: '#fafafa',
        paddingRight: 10,
        height: 30,
        lineHeight: '30px',
        textAlign: 'right'
    },
    content: {
        backgroundImage: 'url("/images/body_top.png")',
        backgroundRepeat: 'repeat-x',
        backgroundColor: '#bbab8c',
        position: 'fixed',
        top: '53px',
        bottom: '50px',
        left: 0,
        right: 0
    }
}
module.exports = style;