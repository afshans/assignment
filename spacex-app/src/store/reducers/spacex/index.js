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

    case actionTypes.LAUNCHES_GET_FILTER: {
      return {
        ...state,
        filteredLaunches: state.filteredLaunches.filter(launch => {
          console.log(action.payload.value, launch[action.payload.keyName]);
           if (action.payload.keyName === 'landSuccess') {
              return launch.rocket.firstStage.cores[0] === (action.payload.value || null);
           } else {
              return launch[action.payload.keyName] === (action.payload.value || null);
           }
        }),
      };
    }

    case actionTypes.LAUNCHES_CLEAR_FILTER: 
      return {
        ...state,
        filteredLaunches: state.results
      }

    default:
      return state;
  }
}
