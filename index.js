macro rcss {
    rule {
        $param:ident {$($id $[:] $val) (;) ...}
    } => {
        var $param = require('rcss').registerClass({ $($id : $val,) ... }).className;
    }
}

export rcss;
