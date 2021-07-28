'use strict';

var React = require('react');
var Ripple = require('@parrotjs/react-ripple');
var classnames = require('@parrotjs/classnames');
var Loading = require('@parrotjs/react-loading');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);
var Loading__default = /*#__PURE__*/_interopDefaultLegacy(Loading);

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

const Button = React__default['default'].forwardRef((props, ref) => {
    const { prefixCls: customizedPrefixCls = 'parrot', componentName = 'button', children, className, size = 'default', color = 'default', type = 'contained', shape = 'round', outline, loading, style, onClick } = props, restProps = __rest(props, ["prefixCls", "componentName", "children", "className", "size", "color", "type", "shape", "outline", "loading", "style", "onClick"]);
    const prefixCls = customizedPrefixCls + '-' + componentName;
    return (React__default['default'].createElement(Ripple__default['default'], Object.assign({ className: classnames__default['default'](prefixCls, className, {
            [`${prefixCls}-${size}`]: size,
            [`${prefixCls}-color-${type}-${color}`]: color && !outline,
            [`${prefixCls}-type-${type}`]: type && !outline,
            [`${prefixCls}-${shape}`]: shape,
            [`${prefixCls}-outline-${color}`]: color && outline,
            [`${prefixCls}-loading`]: loading
        }), style: style, disableTouchRipple: loading, ref: ref, component: 'button', onClick: onClick }, restProps),
        loading && React__default['default'].createElement(Loading__default['default'], { size: 18, style: { marginRight: 6 }, color: 'inherit' }),
        children));
});
var Button$1 = React__default['default'].memo(Button);

module.exports = Button$1;
