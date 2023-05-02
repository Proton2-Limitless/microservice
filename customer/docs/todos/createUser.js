module.exports = {
    // operation's method
    post: {
      tags: ["Customer CRUD operations"], // operation's tag
      description: "Add User", // short desc
      operationId: "AddUser", // unique operation id
      parameters: [], // expected params
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/customerInput", // todo input data model
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        201: {
          description: "user created successfully", // response desc
        },
      },
    },
  };