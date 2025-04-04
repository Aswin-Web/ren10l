import { SafeParseReturnType } from "zod";

export const VerifySchemaValidation = (parsed: SafeParseReturnType<any, any>) => {
  if (parsed.success) {
    return {
      isSuccess: true,
      errors: null,
      data: parsed.data,
    };
  }

  const flattened = parsed.error.flatten();

  return {
    isSuccess: false,
    errors: flattened.fieldErrors,
    fullError: flattened, // optional, in case you want full Zod structure
  };
};

