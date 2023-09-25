'use client';

import { Adornment, InputContainerComponent } from './Input.styles';
import { ContainerProps } from './Input.types';

const InputContainer = ({
    hasAdornment,
    children,
    startAdornment = undefined,
    endAdornment = undefined,
    size = 'lg',
}: ContainerProps) => {
    if (!hasAdornment) return <>{children}</>;
    return (
        <InputContainerComponent>
            {startAdornment && (
                <Adornment start size={size}>
                    {startAdornment}
                </Adornment>
            )}
            <>{children}</>
            {endAdornment && (
                <Adornment end size={size}>
                    {endAdornment}
                </Adornment>
            )}
        </InputContainerComponent>
    );
};

export default InputContainer;
