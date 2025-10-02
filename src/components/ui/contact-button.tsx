import * as React from 'react';
import Svg from './svg';

interface ContactButtonProps {
  svgName: string;
  link: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ svgName, link }) => {

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex justify-center items-center h-8 w-8 md:h-9 md:w-9 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800"
    >
      <Svg name={svgName} className="w-4 h-4 md:w-5 md:h-5 text-gray-600 dark:text-gray-400" />
    </a>
  );
};

export default ContactButton;
