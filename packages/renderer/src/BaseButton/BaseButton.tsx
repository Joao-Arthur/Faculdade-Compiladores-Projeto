type props = {
    onClick: () => void;
    Icon: JSX.Element;
};

export function BaseButton({ onClick, Icon }: props) {
    return (
        <button
            className='border-none h-10 w-10 cursor-pointer text-white flex flex-col justify-center items-center transition-colors hover:bg-primary-light'
            onClick={onClick}
        >
            {Icon}
        </button>
    );
}
