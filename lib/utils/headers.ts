export const getHeaders = (
  headers: Record<string, string> | undefined,
  token: string | undefined
) => {
  if (headers) return headers;
  if (token)
    return {
      Authorization: 'Bearer ' + token,
    };
  return {};
};
