export default {
  getLaunchList: (page, filters) => {
    let listEndPoint = `/launches/?page=${page}`;
    console.log('filters', filters );
    if (filters.launchSuccess) {
      listEndPoint += '&launch_success=true';
    }
    if (filters.landSuccess) {
      listEndPoint += '&land_success=true';
    }
    if (filters.launchYear) {
      listEndPoint += `&launch_year=${filters.launchYear}`;
    }
    console.log(listEndPoint);
    return listEndPoint;
  }
   
}
