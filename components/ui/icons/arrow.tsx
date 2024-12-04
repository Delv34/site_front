import {twMerge} from 'tailwind-merge'

interface ArrowProps {
    className?: string;
}

const Arrow = ({className}: ArrowProps) => {
    return (
        <svg
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge('w-[30px] h-[30px]',className)}
        >
            <path d="M6.25 15H23.75M23.75 15L16.25 7.5M23.75 15L16.25 22.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default Arrow;
