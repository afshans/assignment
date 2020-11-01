import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Launch from './Launch';
import { filterLaunces, getLaunches } from '../../store/actions/spacex/actionsDispatchers';

class Launches extends React.Component {
  componentDidMount() {
    const { getLaunchList } = this.props;
    const defaultFilter = { launchYear: '', launchSuccess: null, landSuccess: null };
    getLaunchList(0, defaultFilter);
   
  }

  render() {
    const { launches } = this.props;
    const { filteredLaunches, isLoading } = launches;
    let appState = isLoading ? 'Loading........' : filteredLaunches.length > 0 ? '' : 'No Search result found';
    return (
   
      
      <div className="col-sm-8 col-md-10">
        <div className="row">
          {filteredLaunches
            && filteredLaunches.map((launch, index) => {
              return <Launch key={index}  launch={launch} />;
            })}
          { appState }
        </div>
      </div>
    );
  }
}
Launches.propTypes = {
  getLaunchList: PropTypes.func.isRequired,
  launches: PropTypes.object,
};
const mapStateToProps = state => {
  return {
    launches: state.launches,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getLaunchList: (value, filters) => dispatch(getLaunches(value, filters)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Launches);
