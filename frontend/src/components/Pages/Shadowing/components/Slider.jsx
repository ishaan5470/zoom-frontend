
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';


const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 20,
        label: '2k',
    },

    {
        value: 40,
        label: '4k',
    },
    {
        value: 60,
        label: '6k',
    },
    {
        value: 80,
        label: '8k',
    },
    {
        value: 100,
        label: 'Above',
    },
];

function valuetext(value) {
    return `${value}`;
}

export default function TrackInvertedSlider() {
    return (
        <div className="ml-3 w-[90%]">
            <Slider
                track="inverted"
                aria-labelledby="track-inverted-slider"
                getAriaValueText={valuetext}
                defaultValue={0}
                marks={marks}
            />
        </div>
    );
}