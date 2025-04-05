import deer from '../assets/deer.svg';
import { FC } from 'react';


export const Header: FC = () => {
  return (
    <header className="bg-blue-500 text-white py-4 px-6 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-2">
        <img src={deer} alt="deer" className={'w-30 h-30'} />
        <h1 className="text-lg font-bold">AI Interface</h1>
      </div>
    </header>
  );
};
