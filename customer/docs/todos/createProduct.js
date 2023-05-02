module.exports = {
    // operation's method
    post: {
      tags: ["Product CRUD operations"], // operation's tag
      description: "Add Product", // short desc
      operationId: "AddProduct", // unique operation id
      parameters: [], // expected params
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/product", // todo input data model
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        201: {
          description: "product created successfully", // response desc
        },
      },
    },
  };