import 'styled-components';
import { ITheme } from '@tyger-ui/system/src/theme/style';

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
}
