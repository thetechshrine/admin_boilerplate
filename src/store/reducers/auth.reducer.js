function initState() {
  return { user: {} };
}

export default function (state = initState(), action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}
