module.exports = {
    // operation's method
    post: {
      tags: ["Order CRUD operations"], // operation's tag
      description: "Add Order", // short desc
      operationId: "AddOrder", // unique operation id
      parameters: [], // expected params
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/order", // todo input data model
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        201: {
          description: "Order created successfully", // response desc
        },
      },
    },
  };