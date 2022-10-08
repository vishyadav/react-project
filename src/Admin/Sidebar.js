import React from 'react'
import { Button } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

import { slide as Menu } from 'react-burger-menu';

import './css/sidebar.css'
import './js/sidebar.js'
const Sidebar = () => {


  return (
    <React.Fragment>
      <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <div id="sidebar" class="collapse collapse-horizontal show border-end">
                <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">
                <p>Collapsible Set:</p>
<button class="collapsible">Dashboard</button>
<div class="content">
  <p>Dashboard</p>
</div>
                </div>
            </div>
        </div>
       
    </div>
</div>
    </React.Fragment>


  )
}

export default Sidebar