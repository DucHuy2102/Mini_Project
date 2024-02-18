import React, { useState } from 'react';
import data from './data';

const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    // single
    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    };

    // multiple
    const handleMultiSelection = (getCurrentId) => {
        let temp = [...multiple];

        const findIndexOfCurrentId = temp.indexOf(getCurrentId);
        // console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) {
            temp.push(getCurrentId);
        } else {
            temp.splice(findIndexOfCurrentId, 1);
        }

        setMultiple(temp);
    };

    // console.log(selected, multiple);
    const styleButton = enableMultiSelection
        ? 'bg-blue-500 text-white border-none'
        : 'hover:bg-blue-500 hover:text-white';

    return (
        <div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center'>
            <button
                onClick={() => setEnableMultiSelection(!enableMultiSelection)}
                className={`border border-black px-5 py-3 rounded-lg font-bold mb-3 hover:border-none ${styleButton}`}
            >
                Enable Multi Selection
            </button>
            <div className='w-[60vw] rounded-lg flex flex-col justify-center items-center hover:cursor-pointer'>
                {data && data.length ? (
                    data.map((item) => (
                        <div
                            className='hover:bg-gray-300 w-[40vw] h-[15vh] mb-5 rounded-lg bg-gray-200 px-5 flex flex-col justify-center items-center'
                            key={item.id}
                            onClick={
                                enableMultiSelection
                                    ? () => handleMultiSelection(item.id) // multiple
                                    : () => handleSingleSelection(item.id) // single
                            }
                        >
                            <div className='flex items-center'>
                                <h3 className='font-bold'>{item.question}</h3>
                                <span className='ml-2 mb-1 text-xl animate-bounce'>+</span>
                            </div>
                            {enableMultiSelection
                                ? multiple.indexOf(item.id) !== -1 && <div className='italic'>{item.answer}</div>
                                : selected === item.id && <div className='italic'>{item.answer}</div>}
                        </div>
                    ))
                ) : (
                    <div>No data found !!!</div>
                )}
            </div>
        </div>
    );
};

export default Accordian;
