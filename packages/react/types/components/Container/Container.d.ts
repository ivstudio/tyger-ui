import { TBreakpointKey } from '../../styles/mediaQueries';
import { IBox } from '../Box';
interface IContainer extends IBox {
    maxWidth?: TBreakpointKey;
}
declare const Container: ({ children, maxWidth, tag, ...props }: IContainer) => JSX.Element;
export default Container;
