const def = {
  defaultState: {
    count: 0,
    loading: false
  },
  actions: {
    increment: (draft) => draft.count = draft.count+1,
    decrement: (draft) => draft.count = draft.count-1
    setLoading: (draft, {loading}) => draft.loading = loading
  },
  asyncActions: {
    loadCount: async (actions) => {
      actions.setLoading({loading:true});
      await wait(1000);
      actions.increment();
      actions.setLoading({loading: false});
    }
  }
}

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  })
}

export default def;