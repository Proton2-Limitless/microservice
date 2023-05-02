module.exports = {
    // method of operation
    get: {
      tags: ["Order CRUD operations"], // operation's tag.
      description: "Get Order", // operation's desc.
      operationId: "getOrder", // unique operation id.
      parameters: [], // expected params.
      // expected responses
      responses: {
        // response code
        200: {
          description: "Order were obtained", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/order", // Todo model
              },
            },
          },
        },
      },
    },
  };