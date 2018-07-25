export default function loading(status = false, actions) {

  switch (actions.type) {
    case 'TOGGLE_LOADING':
      return actions.status;

    default:
      return status;
  }
}
