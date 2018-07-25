export function toggleLoading(status = true) {
  return {
    type: 'TOGGLE_LOADING',
    status
  }
};
