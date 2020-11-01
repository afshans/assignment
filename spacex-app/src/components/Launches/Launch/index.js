import React from 'react';
import PropTypes from 'prop-types';

const index = props => {
  
  const { launch } = props;
  const { missionName, missionId, launchYear, launchSuccess, flightNumber } = launch;

  return (
    
    <div className="col-sm-6 col-md-3 mb-3">
            <div className="card-component">
              <img className="image" src={launch.links.missionPatchSmall ? 
                launch.links.missionPatchSmall : ''} 
                 alt={missionName} 
               title={missionName} />
              <h3 className="title">{missionName} #{flightNumber}</h3>
              <div className="list">
                <label>Mission Ids: </label>
                <ul className="items">
                  { missionId.length > 0 ? missionId.map( (mId, Index) => <li className="item" key={Index}> {mId} </li> ) : ''}
                  </ul>
              </div>
              <div className="list">
                <label>Launch Year: </label>
                <span className="item">{launchYear}</span>
              </div>
              <div className="list">
                <label>Successful Launch: </label>
                <span className="item">{launchSuccess ? launchSuccess.toString() : 'false'}</span>
              </div>
              <div className="list">
                <label>Successful Landing: </label>
                <span className="item">{launch.rocket.firstStage.cores[0].landSuccess ? launch.rocket.firstStage.cores[0].landSuccess.toString() : 'false'}</span>
              </div>
            </div>
          </div>
    
  );
};
index.propTypes = {
  launch: PropTypes.object,
};

export default index;
