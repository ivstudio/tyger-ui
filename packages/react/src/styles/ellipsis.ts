export type TEllipsis = {
    width: string | number;
    lines: number;
};

export default function ellipsis(width: string | number, lines = 1) {
    const styles = {
        display: 'inline-block',
        maxWidth: width || '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
    };

    return lines > 1
        ? {
              ...styles,
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: lines,
              display: '-webkit-box',
              whiteSpace: 'normal',
          }
        : styles;
}
