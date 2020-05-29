import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { Button } from '../components/Button/Button';
import { default as MemoryContainerStyles } from './MemoryContainer.module.scss';

const style = bemCssModules(MemoryContainerStyles);

export const MemoryContainer: React.FC = () => {
    return (
        <div className={style()}>
            <Button content="MC" isMemory onClick={() => console.log("ok")} />
            <Button content="MR" isMemory onClick={() => console.log("ok")} />
            <Button content="M+" isMemory onClick={() => console.log("ok")} />
            <Button content="M-" isMemory onClick={() => console.log("ok")} />
            <Button content="MS" isMemory onClick={() => console.log("ok")} />

        </div>
    )
}