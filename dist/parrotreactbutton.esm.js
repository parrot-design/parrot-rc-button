import React from 'react';
import Ripple from '@parrotjs/react-ripple';
import classnames from '@parrotjs/classnames';
import Loading from '@parrotjs/react-loading';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const Button = React.forwardRef((props, ref) => {
    const { prefixCls: customizedPrefixCls = 'parrot', componentName = 'button', children, className, size = 'default', color = 'default', type = 'contained', shape = 'round', outline, loading, style, onClick } = props, restProps = __rest(props, ["prefixCls", "componentName", "children", "className", "size", "color", "type", "shape", "outline", "loading", "style", "onClick"]);
    const prefixCls = customizedPrefixCls + '-' + componentName;
    return (React.createElement(Ripple, Object.assign({ className: classnames(prefixCls, className, {
            [`${prefixCls}-${size}`]: size,
            [`${prefixCls}-color-${type}-${color}`]: color && !outline,
            [`${prefixCls}-type-${type}`]: type && !outline,
            [`${prefixCls}-${shape}`]: shape,
            [`${prefixCls}-outline-${color}`]: color && outline,
            [`${prefixCls}-loading`]: loading
        }), style: style, disableTouchRipple: loading, ref: ref, component: 'button', onClick: onClick }, restProps),
        loading && React.createElement(Loading, { size: 18, style: { marginRight: 6 }, color: color }),
        children));
});
var Button$1 = React.memo(Button);

export default Button$1;
