
const initialState = {
  layout: {
    hierarchical: {
      enabled: true,
      direction: 'LR',
    },
  },
  height: '500px',
  interaction: {
    hover: true,
    hoverConnectedEdges: true,
    selectConnectedEdges: false,
  },
};

const options = (state = initialState, action = { type: 'default' }) => {
  switch (action.type) {
    case 'UPDATE_OPTIONS':
      return {
        ...state,
        ...action.options,
      };
    default:
      return state;
  }
};

export default options;