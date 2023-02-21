const properties = () => {

    switch (process.env.REACT_APP_NODE_ENV) {
        case 'production':
            return {
                apiHost: ''
            }
        case 'stage':
            return {
                apiHost: ''
            }
        case 'develop':
            return {
                apiHost: 'http://dev-osc-api.commaxiot.net'
            }
        default:
            return {
                apiHost: 'http://localhost:3000'
            }
    }
}

export default properties;