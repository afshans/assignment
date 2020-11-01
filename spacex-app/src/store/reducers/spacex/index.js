import * as actionTypes from '../../actions/spacex/actionTypes';

const initialState = {
  results: [],
  info: null,
  filteredLaunches: [],
  isLoading: false,
};

export default function(state = initialState, action = { type: '' }) {
  switch (action.type) {
    case actionTypes.LAUNCHES_INIT: {
      console.log('LAUNCHES_INIT');
      return { ...state, isLoading: true, results: [], info: null };
    }

    case actionTypes.LAUNCHES_GET_SUCCESS: {
      return {
        ...state,
        results: action.payload,
        filteredLaunches: action.payload,
        info: action.payload.info,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
