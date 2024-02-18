import { useState } from 'react';

const RandomColor = () => {
    const styleButton = 'w-[30vw] border mt-10 w-[200px] h-[40px] rounded-lg hover:text-2xl text-xl text-white';

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');
    const [colorComplementary, setColorComplementary] = useState('#FFFFFF');

    // complementary Color
    const complementaryColor = () => {
        const r = randomColor(256);
        const g = randomColor(256);
        const b = randomColor(256);

        let complementaryR = 255 - r;
        let complementaryG = 255 - g;
        let complementaryB = 255 - b;

        setColorComplementary(`rgb(${complementaryR},${complementaryG},${complementaryB})`);
    };

    // random color
    const randomColor = (lengthArray) => {
        return Math.floor(Math.random() * lengthArray);
    };

    // hex color
    const handleHexColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColor(hex.length)];
        }
        setColor(hexColor);
    };

    // rgb color
    const handleRGBColor = () => {
        const r = randomColor(256);
        const g = randomColor(256);
        const b = randomColor(256);

        setColor(`rgb(${r},${g},${b})`);
    };

    return (
        <div style={{ background: color }} className='h-[100vh] w-[100vw] relative'>
            {/* 3 buttons */}
            <div className='flex justify-around items-start'>
                <button className={styleButton} onClick={() => setTypeOfColor('hex')}>
                    HEX color
                </button>
                <button className={styleButton} onClick={() => setTypeOfColor('rgb')}>
                    RGB color
                </button>
                <button className={styleButton} onClick={typeOfColor === 'hex' ? handleHexColor : handleRGBColor}>
                    Random Color
                </button>
            </div>

            {/* name color */}
            <div className='h-[10vh] w-[100vw] flex flex-col justify-between items-center absolute top-[50%] transform-translate-y-[-50%]'>
                <h3 style={{ color: colorComplementary }} className='text-3xl font-bold'>
                    {typeOfColor === 'hex' ? 'HEX Color' : 'RGB Color'}
                </h3>
                <h1 className='text-xl italic'>{color}</h1>
            </div>
        </div>
    );
};

export default RandomColor;
