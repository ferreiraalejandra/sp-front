import React from 'react';
import SPAppBar from '../components/appbar'
import SPSideBar from '../components/sidebar';

class DashboardView extends React.Component {
  render() {
    return (
      <div>
        <SPAppBar />
        <SPSideBar/>
      </div>
    )
  }
}

export default DashboardView