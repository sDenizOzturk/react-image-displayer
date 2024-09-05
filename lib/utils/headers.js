export const getHeaders = (headers, token) => {
    if (headers)
        return headers;
    if (token)
        return {
            Authorization: 'Bearer ' + token,
        };
    return {};
};
