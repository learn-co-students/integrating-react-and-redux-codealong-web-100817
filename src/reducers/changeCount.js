export default function changeCount(
  state = {
    count: 0
  },
  action
) {
  console.log('in the reducer');
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}
