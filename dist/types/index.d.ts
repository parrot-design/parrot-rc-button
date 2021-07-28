import React from 'react';
export { default } from './Button';
export interface IButtonProps {
    prefixCls?: string;
    componentName?: string;
    className?: string;
    children?: any;
    size?: 'default' | 'small' | 'large';
    color?: 'default' | 'primary' | 'info' | 'danger' | 'success' | 'second' | 'warning';
    type?: 'contained' | 'text';
    outline?: boolean;
    shape?: 'circle' | 'round';
    loading?: boolean;
    style?: React.CSSProperties;
}
