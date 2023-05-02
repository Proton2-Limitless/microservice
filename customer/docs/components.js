module.exports = {
    components: {
      schemas: {
        // userid
        id: {
          type: "string", // data type
          description: "An id of a user", // desc
          example: "tyVgf", // example of an id
        },
        // user model
        customer: {
          type: "object", // data type
          properties: {
            id: {
              type: "string",
              description: "user identity",
              example: "abc",
            },
            username: {
              type: "string",
              description: "users unique name",
              example: "test",
            },
            email: {
              type: "string",
              description: "user email",
              example: "test1@gmail.com",
            },
            password: {
              type: "string",
              description: "user password",
              example: "test",
            },
            roles: {
              type: "array",
              description: "user available role",
              example: ["customer", "admin", "superadmin"],
            },
            orders: {
              type: "array",
              description: "user available orders",
              example: [{id: "123", name: "order1"}, {id: "456", name: "order2"}],
            },
          },
        },
        customerInput: {
          type: "object", // data type
          properties: {
            id: {
              type: "string",
              description: "user identity",
              example: "abc",
            },
            username: {
              type: "string",
              description: "users unique name",
              example: "test",
            },
            email: {
              type: "string",
              description: "user email",
              example: "test1@gmail.com",
            },
            password: {
              type: "string",
              description: "user password",
              example: "test",
            },
            roles: {
              type: "array",
              description: "user available role",
              example: ["customer", "admin", "superadmin"],
            }
          },
        },
        order: {
          type: "object", // data type
          properties: {
            id: {
              type: "string",
              description: "order identity",
              example: "abc",
            },
            products: {
              type: "array",
              description: "order products",
              example: [{title: "goods1", quantity: 1, amount: 3000}, {title: "goods2", quantity: 3, amount: 4000}],
            },
            totalprice: {
              type: "number",
              description: "order total price",
              example: 15000,
            },
            status: {
              type: "string",
              description: "order status",
              example: "pending",
            },
          },
        },
        orderInput: {
          type: "object", // data type
          properties: {
            quantity: {
              type: "number",
              description: "order quantity",
              example: 2,
            },
            title: {
              type: "string",
              description: "order title",
              example: "rice",
            },
          },
        },
        product: {
          properties: {
            id: {
              type: "string",
              description: "product identity",
              example: "abc",
            },
            title: {
              type: "string",
              description: "product title",
              example: "rice",
            },
            price: {
              type: "number",
              description: "product price",
              example: 2000,
            },
            category: {
              type: "array",
              description: "product category",
              example: ["test"],
            },
          },
        },
        productInput: {
          properties: {
            title: {
              type: "string",
              description: "product title",
              example: "rice",
            },
            price: {
              type: "number",
              description: "product price",
              example: 2000,
            },
            category: {
              type: "array",
              description: "product category",
              example: ["test"],
            },
          },
        },
      },
    },
  };