/* eslint-disable @typescript-eslint/no-explicit-any */
export function getErrorMessage(error: any, defaultMessage = 'Ups!') {
  return error?.response?.data?.message || error?.message || defaultMessage;
}