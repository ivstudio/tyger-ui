'use client';

import { Adornment, InputContainerComponent } from './Input.styles';
import { ContainerProps } from './Input.types';

const InputContainer = ({
    hasAdornment,
    children,
    startAdornment = undefined,
    endAdornment = undefined,
}: ContainerProps) => {
    if (!hasAdornment) return <>{children}</>;
    return (
        <InputContainerComponent>
            {startAdornment && <Adornment start>{startAdornment}</Adornment>}
            <>{children}</>
            {endAdornment && <Adornment end>{endAdornment}</Adornment>}
        </InputContainerComponent>
    );
};

export default InputContainer;
