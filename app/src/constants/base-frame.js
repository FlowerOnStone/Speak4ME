import COLOR from './color';

const BASE_FRAME = {
    BORDER_COLOR: 'black',
    BORDER_WIDTH: 2,
    FRAME_WIDTH: '100%',
    FRAME_HEIGHT: 'auto',
    BORDER_RADIUS: 15,
    FRAME_COLOR: COLOR.FRAME,
    

    light: {
        BACKGROUND_COLOR: 'white',
    },
    dark: {
        BACKGROUND_COLOR: 'black',
    },

    TOP_BOX_WIDTH: '100%',
    TOP_BOX_HEIGHT: 'auto',
    MIN_TOP_BOX_HEIGHT: 50,

    MIN_BOTTOM_BOX_WIDTH: '40%',
    MIN_BOTTOM_BOX_HEIGHT: '60%',
};

export default BASE_FRAME;
