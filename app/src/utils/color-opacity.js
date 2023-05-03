import parse from 'parse-color';

export function colorOpacity(color, opacity) {
    const rgba = parse(color).rgba;
    return `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${opacity})`;
}
