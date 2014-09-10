var RCSS = require('rcss');

macro rcss {
    rule {
        .$param {$($id $[:] $val) (;) ...}
    } => {
        var $param = RCSS.registerClass({ $($id : $val,) ... });
    }
}

rcss .hello {
    color : "red";
    width : 5
}
