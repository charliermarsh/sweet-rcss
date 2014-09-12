macro rcss_rule {
    rule {
        $id $[:] $val
    } => {
        $id : $val
    }

    rule {
        $id:ident
    } => {
        $id : '__merge__'
    }
}

macro rcss {
    rule {
        $param:ident { $inner:rcss_rule (;) ... }
    } => {
        if (typeof window.__styleObjs__ === 'undefined') {
            window.__styleObjs__ = {};
        }

        var styleObj = { rcss_rule $inner (,) ... };

        // Iterate over style objects to be merged-in
        var keys = Object.keys(styleObj);
        for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            if (styleObj[key] === '__merge__') {
                // Remove from the style object
                delete styleObj[key];
                var toMerge = window.__styleObjs__[key].style;
                styleObj = require('rcss').cascade(styleObj, toMerge);
            }
        }

        var styleOutput = require('rcss').registerClass(styleObj);
        window.__styleObjs__.$param = styleOutput;
        var $param = styleOutput.className;
    }
}

export rcss;
