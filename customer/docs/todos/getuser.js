module.exports = {
    // method of operation
    get: {
      tags: ["Customer CRUD operations"], // operation's tag.
      description: "Get User", // operation's desc.
      operationId: "getUseer", // unique operation id.
      parameters: [], // expected params.
      // expected responses
      responses: {
        // response code
        200: {
          description: "Todos were obtained", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/customer", // Todo model
              },
            },
          },
        },
      },
    },
  };