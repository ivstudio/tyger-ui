export declare type TEllipsis = {
    width: string | number;
    lines: number;
};
export default function ellipsis(width: string | number, lines?: number): {
    display: string;
    maxWidth: string | number;
    overflow: string;
    textOverflow: string;
    whiteSpace: string;
    wordWrap: string;
} | {
    WebkitBoxOrient: string;
    WebkitLineClamp: number;
    display: string;
    whiteSpace: string;
    maxWidth: string | number;
    overflow: string;
    textOverflow: string;
    wordWrap: string;
};
