module.exports = {
    // method of operation
    get: {
      tags: ["Product CRUD operations"], // operation's tag.
      description: "Get Product", // operation's desc.
      operationId: "getProduct", // unique operation id.
      parameters: [], // expected params.
      // expected responses
      responses: {
        // response code
        200: {
          description: "Product were obtained", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/product", // Todo model
              },
            },
          },
        },
      },
    },
  };