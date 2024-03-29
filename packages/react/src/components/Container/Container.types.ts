import type { TBreakpointKey } from '@tyger-ui/system';

import type { BoxProps } from '../Box/Box.types';

export interface ContainerProps extends BoxProps {
    maxWidth?: TBreakpointKey;
    className?: string;
    paper?: boolean;
}
