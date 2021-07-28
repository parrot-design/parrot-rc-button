import React from 'react';
import { IButtonProps } from '.';
import Ripple from '@parrotjs/react-ripple';
import classnames from '@parrotjs/classnames';
import Loading from '@parrotjs/react-loading';
import './index.scss';

const Button=React.forwardRef((props:IButtonProps,ref)=>{

    const {
        prefixCls:customizedPrefixCls='parrot',
        componentName='button',
        children,
        className,
        size='default',
        color='default',
        type='contained',
        shape='round',
        outline,
        loading,
        style,
        ...restProps
    }=props;

    const prefixCls=customizedPrefixCls+'-'+componentName;

    return (
        <Ripple 
            className={classnames(
                prefixCls,
                className,
                {
                    [`${prefixCls}-${size}`]:size,
                    [`${prefixCls}-color-${type}-${color}`]:color && !outline,
                    [`${prefixCls}-type-${type}`]:type && !outline,
                    [`${prefixCls}-${shape}`]:shape,
                    [`${prefixCls}-outline-${color}`]:color && outline,
                    [`${prefixCls}-loading`]:loading
                }
            )}
            style={style}
            disableTouchRipple={loading}
            ref={ref}
            component={'button'}
            {...restProps}
        >
            {loading && <Loading size={18} style={{marginRight:6}} color={color} />}
            {children}
        </Ripple>
    )

});

export default React.memo(Button);