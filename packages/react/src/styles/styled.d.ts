import 'styled-components';

import { ThemeProps } from '@tyger-ui/system/src/theme';

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends ThemeProps {}
}
