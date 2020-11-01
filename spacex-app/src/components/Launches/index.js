import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Launch from './Launch';
import { getLaunches } from '../../store/actions/spacex/actionsDispatchers';

class Launches extends React.Component {
  componentDidMount() {
    const { getLaunchList } = this.props;
    console.log('Launches',getLaunchList(0));
  }

  render() {
    const { launches } = this.props;
    const { filteredLaunches } = launches;
    return (
   
      <div class="col-sm-8 col-md-10">
        <div class="row">
          {filteredLaunches
            && filteredLaunches.map((launch, index) => {
              return <Launch key={index}  launch={launch} />;
            })}
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
  console.log('State', state);
  return {
    launches: state.launches,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getLaunchList: value => dispatch(getLaunches(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Launches);
