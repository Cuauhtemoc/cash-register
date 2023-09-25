import React from 'react';
import { MoneyCounts } from '../types';

interface Props {
  options: MoneyCounts[] | undefined;
  dispenseChange: (change:MoneyCounts) => void;
}

export default function AvailableChangeOptions({ options, dispenseChange }: Props) {
  return (
    <div className="grid">
        <div className={'text-xl text-center'}>Choose your change:</div>
      <div>
        {options?.map((o, index) => (
          <div onClick={() => dispenseChange(o)} className='mt-4 grid grid-cols-5 border bg-gray-700 m-4 cursor-pointer hover:bg-gray-600 text-white font-bold py-2 border-b-4 border-gray-700 hover:border-gray-500 rounded' key={index}>
            {Object.entries(o).map(([key, value], index) => (
              <div className={'text-center border-l border-black'} key={index}>
                ${key} : {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
