import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterLaunces, clearFilters, getLaunches } from '../../../store/actions/spacex/actionsDispatchers';
import * as CommonConstant from '../../../shared/constatns/common';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launchYear : '',
      launchSuccess: null,
      landStatus: null,
    };

    
    this.filterNames = {
      launchYear : 'Launch Year',
      launchSuccess: 'Successful Launch',
      landStatus: 'Successful Land',
      
    };

    this.filterTypes = {
      launchSuccess: [
          { filterName: 'True', filterVal: true, class: ''},
          { filterName: 'False', filterVal: false, class: ''},
        ],
        landStatus: [
          { filterName: 'True', filterVal: true, class: ''},
          { filterName: 'False', filterVal: false, class: ''}]
      } 
    
  }

 

  onToggleHandler = (filterName, filterVal) => {
    console.log('toggleHandler called');
    let newState = {};
    const selIndex = filterVal ? 0 : 1;
    switch(filterName) {
      case 'launchYear':
        newState = { launchYear : filterVal};
      break;
      case 'launchSuccess':
        this.filterTypes.launchSuccess[selIndex].class = 'selected';
        newState = { launchSuccess: filterVal };
      break;
      case 'landStatus' :
        this.filterTypes.landStatus[selIndex].class = 'selected';
        newState = { landStatus: filterVal };
      break;
      default: 
        console.log('Default');
        newState = { ...this.state,  
          launchYear : '',
          launchSuccess:  null,
          landStatus: null
        }
      }
    this.setState((prevState) => {
      return newState;
    }, 
    () => {
      const { launchYear, launchSuccess, landStatus} = this.state;
       this.props.filterLauncesByParams({launchYear, launchSuccess, landSuccess:landStatus});
      }
    )
  }

 
  render() {
  
    return (
      <div className="col-sm-4 col-md-2 mb-3">
        <div className="filter-component">
          <h2>Filters <span className="clear-filter" onClick={() => this.onToggleHandler('', null)}>clear filters</span></h2>
          <div className="filter-wrapper">
            <h4 className="title">Launch Year</h4>
            <div className="filter-items">
              { CommonConstant.yearArr.map((yr, index) => {
                
                const selClass = this.state.launchYear == yr ? 'selected' : '';
                return (
                <div className={`pill-component ${selClass}`} key={index} onClick = {() => this.onToggleHandler('launchYear', yr)}>
                 {yr} </div>
                )
              }) 
            }
            </div>
          </div>
          { Object.keys(this.filterTypes).map((launch, indx) => {
            return (
              <div key={indx} className="filter-wrapper">
              <h4 className="title">{this.filterNames[launch]}</h4>
              <div  className="filter-items">
                { this.filterTypes[launch].map((launchStatus, indx2) => {
                  const selClass = launchStatus.filterVal == this.state[launch] ? 'selected' : '';
                  return ( 
                  <div key={`${launchStatus}${indx2}`} className={`pill-component ${selClass}`} onClick = {() => this.onToggleHandler(launch, launchStatus.filterVal)}>
                    {launchStatus.filterName}
                </div>)
                })}
               </div>
            </div>
            )
          })}
        
          
        </div>
      </div>

     
    );
  }
}

Filter.propTypes = {
  filterLauncesByParams: PropTypes.func,
  clearFilters: PropTypes.func
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    filterLauncesByParams: (filters) => dispatch(getLaunches(0, filters)),
    clearFilters: () => dispatch(clearFilters())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
