import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterLaunces } from '../../../store/actions/spacex/actionsDispatchers';
import * as CommonConstant from '../../../shared/constatns/common';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year : '',
      isLaunchedSuccess: false,
      isLandSuccess: false
    };
  }

  onYearChangeHandler = selectedYear => {
    this.setState(
      {
        year: selectedYear
      },
      () => {
        const { year} = this.state;
        if (year === '') {
          const { isLaunchedSuccess, isLandSuccess } = this.props;
          this.props.filterLauncesByParams( year , isLaunchedSuccess, isLandSuccess);
        }
      },
    );
  };

  onToggleHandler = (filterName, filterVal) => {
  
    this.setState((prevState) => {
      {
        return filterName === 'isLaunchedSuccess' ? 
                      { isLaunchedSuccess: !prevState.isLaunchedSuccess } :
                      { isLandSuccess: !prevState.isLandSuccess }
      }
    }, 
    () => {
      const { year, isLaunchedSuccess, isLandSuccess } = this.state;
        this.props.filterLauncesByParams( year, isLaunchedSuccess, isLandSuccess );
      }
    )
  }



  render() {
    
    return (
      <div className="col-sm-4 col-md-2 mb-3">
        <div className="filter-component">
          <h2>Filters <span className="clear-filter" onClick="clearFilters()">clear filters</span></h2>
          <div className="filter-wrapper">
            <h4 className="title">Launch Year</h4>
            <div className="filter-items">
              { CommonConstant.yearArr.map((yr, index) => {
                return (
                <div className="pill-component" key={index}
                onClick={ () => this.onYearChangeHandler()}> 
                {yr} </div>
                )
              }) 
            }
            </div>
          </div>
          <div className="filter-wrapper">
            <h4 className="title">Success Launched</h4>
            <div className="filter-items">
              <div className="pill-component" onClick = {() => this.onToggleHandler('isLaunchedSuccess', true)}>
                true
              </div>
              <div className="pill-component" onClick = {this.onToggleHandler}>
                false
              </div>
            </div>
          </div>
          <div className="filter-wrapper">
            <h4 className="title"> Success Land</h4>
            <div className="filter-items">
              <div className="pill-component">
                true
              </div>
              <div className="pill-component">
                false
              </div>
            </div>
          </div>
        </div>
      </div>

     
    );
  }
}

Filter.propTypes = {
  filterLauncesByParams: PropTypes.func,
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    filterLauncesByParams: ( year, isLaunchedSuccess, isLandSuccess) => dispatch(filterLaunces( year, isLaunchedSuccess, isLandSuccess )),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
