const axios = require('axios');

module.exports.contractsList =
    () => {
        return axios.get('http://localhost:15015/contracts')
                    .then(resp => {
                        return resp.data
                    })
                    .catch(err => {
                        return err
                    })
    };

module.exports.getContract =
    id => {
        return axios.get(`http://localhost:15015/contracts/${id}`)
                    .then(resp => {
                        return resp.data
                    })
                    .catch(err => {
                        return err
                    })
    };

module.exports.getInst =
    id => {
        return axios.get(`http://localhost:15015/contracts?inst=${id}`)
                    .then(resp => {
                        return resp.data
                    })
                    .catch(err => {
                        return err
                    })
    };
