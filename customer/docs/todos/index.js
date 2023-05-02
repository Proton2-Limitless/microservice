const getUsers = require('./getuser');
const createUser = require('./createUser');
const createProduct = require('./createProduct');
const getProduct = require('./getProduct'); 
const getOrder = require('./getOrder');
const createOrder = require('./createOrder');


module.exports = {
    paths:{
        '/customer':{
            ...getUsers,
            ...createUser,
        },
        '/product':{
            ...createProduct,
            ...getProduct,
        },
        '/order':{
            ...getOrder,
            ...createOrder,
        }
    }
}