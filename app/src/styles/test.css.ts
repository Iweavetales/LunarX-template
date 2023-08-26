import {style} from "@vanilla-extract/css";
export const Column = style({
    display: 'flex',
    flexDirection: 'column',
    selectors: {
        '&:nth-child(2n)': {
            background: 'aliceblue'
        }
    },
    '@media': {
        'screen and (min-width: 768px)': {
            flexDirection: 'row'
        }
    }
});