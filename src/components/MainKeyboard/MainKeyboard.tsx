import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as MainKeyboardStyles } from './MainKeyboard.module.scss';
import { Button } from '../Button/Button';
import { inject, observer } from 'mobx-react';
import { CalculatorStore } from '../../stores/CalculatorStore';

interface MainKeyboardProps {
    calculatorStore?: CalculatorStore;
}

const style = bemCssModules(MainKeyboardStyles);

const MainKeyboard: React.FC<MainKeyboardProps> = ({ calculatorStore }) => {
    if (!calculatorStore) {
        return null;
    }



    return (
        <div className={style()}>
            <Button content="%" onClick={calculatorStore.test} />
            <Button content="CE" onClick={() => console.log("")} />
            <Button content="C" onClick={() => console.log("")} />
            <Button content="<=" onClick={() => console.log("")} />
            <Button content="1/x" onClick={() => console.log("")} />
            <Button content="x2" onClick={() => console.log("")} />
            <Button content="sqrt" onClick={() => console.log("")} />
            <Button content="/" onClick={() => console.log("")} />
            <Button content="7" onClick={() => console.log("")} />
            <Button content="8" onClick={() => console.log("")} />
            <Button content="9" onClick={() => console.log("")} />
            <Button content="x" onClick={() => console.log("")} />
            <Button content="4" onClick={() => console.log("")} />
            <Button content="5" onClick={() => console.log("")} />
            <Button content="6" onClick={() => console.log("")} />
            <Button content="-" onClick={() => console.log("")} />
            <Button content="1" onClick={() => console.log("")} />
            <Button content="2" onClick={() => console.log("")} />
            <Button content="3" onClick={() => console.log("")} />
            <Button content="+" onClick={() => console.log("")} />
            <Button content="+/-" onClick={() => console.log("")} />
            <Button content="0" onClick={() => console.log("")} />
            <Button content="." onClick={() => console.log("")} />
            <Button content="=" onClick={() => console.log("")} />


        </div>
    )

}

const MainKeyboardConsumer = inject('calculatorStore')(observer(MainKeyboard))
export { MainKeyboardConsumer as MainKeyboard };