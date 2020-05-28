import React from 'react';
import { default as bemCssMOdules } from 'bem-css-modules';
import { default as ButtonStyle } from './Button.module.scss';
import { prependOnceListener } from 'cluster';


type TCalculatorFunction = () => void;
type TConcatenateFunction = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void


interface ButtonProps {
    content: string;
    isEqual?: boolean;
    isLighter?: boolean;
    isMemory?: boolean;
    onClick: TCalculatorFunction | TConcatenateFunction;
}

const style = bemCssMOdules(ButtonStyle);

export const Button: React.FC<ButtonProps> = props => {
    const modifiers = {
        'is-equal': props.isEqual,
        'is-lighter': props.isEqual,
        'is-memory': props.isMemory,

    };

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        props.onClick(event);
    }

    return (
        <button className={style(modifiers)} onClick={onClickHandler}>
            {props.content}

        </button>
    )
}