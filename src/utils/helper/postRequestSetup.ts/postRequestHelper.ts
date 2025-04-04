import { authenticateRequest } from "@/utils/middlewarehelpers/helpers/adminCookieCheck";
import { VerifySchemaValidation } from "@/utils/verifySchemas/verifySchemas";

export const validatePostRequest = async ({ req, schema }) => {
  try {
    const data = await authenticateRequest();
    console.log("🚀 ~ validatePostRequest ~ data:", data)

    const body = await req.json(); // parses JSON body
    // Parsed Data
    const parsed = schema.safeParse(body);

    // Verify Schema Middleware
    const { isSuccess, errors } = await VerifySchemaValidation(parsed);
    if (!isSuccess) {
      return {
        error: {
          message: "Validation failed",
          fieldErrors: errors,
        },
      };
    }
    return {
      userInfo: data,
      reqBody: parsed.data,
    };
  } catch (error) {
    return {
      error: {
        message: error?.message || "Unexpected error occurred",
      },
    };
  }
};
