// =============================================================
// 
//  table.js
//
// =============================================================

import React, { Component } from 'react';

import jQuery from 'jquery';

import $ from 'jquery';

// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

var dataSet = [
  ["Airi Satou","Accountant","Tokyo","Yuri Berry","2008-11-28","$162,700","Lorem ipsum dolor sit amet….","closed","2010-12-22"  ],
  ["Angelica Ramos","Chief Executive Officer (CEO)","London","Unity Butler","2009-10-09","$1,200,000","Lorem ipsum dolor sit amet….","closed","2011-08-14"  ],
  ["Ashton Cox","Junior Technical Author","San Francisco","Tiger Nixon","2009-01-12","$86,000","Lorem ipsum dolor sit amet….","closed","2011-05-07"  ],
  ["Bradley Greer","Software Engineer","London","Tatyana Fitzpatrick","2012-10-13","$132,000","Lorem ipsum dolor sit amet….","open",""  ],
  ["Brenden Wagner","Software Engineer","San Francisco","Suki Burks","2011-06-07","$206,850","Lorem ipsum dolor sit amet….","open",""  ],
  ["Brielle Williamson","Integration Specialist","New York","Sonya Frost","2012-12-02","$372,000","Lorem ipsum dolor sit amet….","open",""  ],
  ["Caesar Vance","Pre-Sales Support","New York","Shou Itou","2011-12-12","$106,450","Lorem ipsum dolor sit amet….","open",""  ],
  ["Cedric Kelly","Senior Javascript Developer","Edinburgh","Rhona Davidson","2012-03-29","$433,060","Lorem ipsum dolor sit amet….","open",""  ],
  ["Charde Marshall","Regional Director","San Francisco","Quinn Flynn","2008-10-16","$470,600","Lorem ipsum dolor sit amet….","closed","2010-10-14"  ],
  ["Colleen Hurst","Javascript Developer","San Francisco","Prescott Bartlett","2009-09-15","$205,500","Lorem ipsum dolor sit amet….","closed","2011-07-25"  ],
  ["Dai Rios","Personnel Lead","Edinburgh","Paul Byrd","2012-09-26","$217,500","Lorem ipsum dolor sit amet….","open",""  ],
  ["Doris Wilder","Sales Assistant","Sidney","Michelle House","2010-09-20","$85,600","Lorem ipsum dolor sit amet….","closed","2012-10-13"  ],
  ["Fiona Green","Chief Operating Officer (COO)","San Francisco","Michael Silva","2010-03-11","$850,000","Lorem ipsum dolor sit amet….","closed","2012-03-29"  ],
  ["Garrett Winters","Accountant","Tokyo","Martena Mccray","2011-07-25","$170,750","Lorem ipsum dolor sit amet….","open",""  ],
  ["Gavin Cortez","Team Leader","San Francisco","Jennifer Chang","2008-10-26","$235,500","Lorem ipsum dolor sit amet….","closed","2010-11-14"  ],
  ["Gavin Joyce","Developer","Edinburgh","Jenette Caldwell","2010-12-22","$92,575","Lorem ipsum dolor sit amet….","closed","2012-12-18"  ],
  ["Gloria Little","Systems Administrator","New York","Jena Gaines","2009-04-10","$237,500","Lorem ipsum dolor sit amet….","closed","2011-06-02"  ],
  ["Haley Kennedy","Senior Marketing Designer","London","Herrod Chandler","2012-12-18","$313,500","Lorem ipsum dolor sit amet….","open",""  ],
  ["Herrod Chandler","Sales Assistant","San Francisco","Haley Kennedy","2012-08-06","$137,500","Lorem ipsum dolor sit amet….","open",""  ],
  ["Jena Gaines","Office Manager","London","Gloria Little","2008-12-19","$90,560","Lorem ipsum dolor sit amet….","closed","2011-04-25"  ],
  ["Jenette Caldwell","Development Lead","New York","Gavin Joyce","2011-09-03","$345,000","Lorem ipsum dolor sit amet….","open",""  ],
  ["Jennifer Chang","Regional Director","Singapore","Gavin Cortez","2010-11-14","$357,650","Lorem ipsum dolor sit amet….","closed","2012-12-02"  ],
  ["Martena Mccray","Post-Sales support","Edinburgh","Garrett Winters","2011-03-09","$324,050","Lorem ipsum dolor sit amet….","closed","2013-03-03"  ],
  ["Michael Silva","Marketing Designer","London","Fiona Green","2012-11-27","$198,500","Lorem ipsum dolor sit amet….","open",""  ],
  ["Michelle House","Integration Specialist","Sidney","Doris Wilder","2011-06-02","$95,400","Lorem ipsum dolor sit amet….","open",""  ],
  ["Paul Byrd","Chief Financial Officer (CFO)","New York","Dai Rios","2010-06-09","$725,000","Lorem ipsum dolor sit amet….","closed","2012-09-26"  ],
  ["Prescott Bartlett","Technical Author","London","Colleen Hurst","2011-05-07","$145,000","Lorem ipsum dolor sit amet….","open",""  ],
  ["Quinn Flynn","Support Lead","Edinburgh","Charde Marshall","2013-03-03","$342,000","Lorem ipsum dolor sit amet….","open",""  ],
  ["Rhona Davidson","Integration Specialist","Tokyo","Cedric Kelly","2010-10-14","$327,900","Lorem ipsum dolor sit amet….","closed","2012-11-27"  ],
  ["Shou Itou","Regional Marketing","Tokyo","Caesar Vance","2011-08-14","$163,000","Lorem ipsum dolor sit amet….","open",""  ],
  ["Sonya Frost","Software Engineer","Edinburgh","Brielle Williamson","2008-12-13","$103,600","Lorem ipsum dolor sit amet….","closed","2011-03-09"  ],
  ["Suki Burks","Developer","London","Brenden Wagner","2009-10-22","$114,500","Lorem ipsum dolor sit amet….","closed","2011-09-03"  ],
  ["Tatyana Fitzpatrick","Regional Director","London","Bradley Greer","2010-03-17","$385,750","Lorem ipsum dolor sit amet….","closed","2012-08-06"  ],
  ["Tiger Nixon","System Architect","Edinburgh","Ashton Cox","2011-04-25","$320,800","Lorem ipsum dolor sit amet….","open"," "  ],
  ["Unity Butler","Marketing Designer","San Francisco","Angelica Ramos","2009-12-09","$85,675","Lorem ipsum dolor sit amet….","closed","2011-12-12"  ],
  ["Yuri Berry","Chief Marketing Officer (CMO)","New York","Airi Satou","2009-06-25","$675,000","Lorem ipsum dolor sit amet….","closed","2011-06-07"  ]
];
 
$(document).ready(function() {
    $('#tableShrunk').DataTable( {
        data: dataSet,
        columns: [
            { title: "Employee Name" },
            { title: "Employee Position" },
            { title: "Employee Location" },
            { title: "Customer Name" },
            { title: "Submission Timestamp" },
            { title: "Issue Value" },
            { title: "Description" },
            { title: "Open / Close Status" },
            { title: "Closed Timestamp" }
        ]
    } );
} );
/*
$(document).ready(function() {
    $('#tableMain').DataTable( {
        data: dataSet,
        columns: [
            { title: "Employee Name" },
            { title: "Employee Position" },
            { title: "Employee Location" },
            { title: "Customer Name" },
            { title: "Submission Timestamp" },
            { title: "Issue Value" },
            { title: "Description" },
            { title: "Open / Close Status" },
            { title: "Closed Timestamp" }
        ]
    } );
} );
*/


export default class Table extends Component {
  render() {
    return (
        <div>
			  <table id="tableShrunk" className="display secondaryWidget" width="100%"></table>
        <div id="mobileHandle">
          <img src="../../img/data-filter-mobile.jpg" alt="mobile data filter image"/>
          <p>Switch to a Desktop Device to load the table filter data API</p>
        </div>
        </div>
    );
  }
}