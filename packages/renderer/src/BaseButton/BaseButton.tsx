type props = {
    onClick: () => void;
    Icon: JSX.Element;
    title?: string;
};

export function BaseButton({ onClick, title, Icon }: props) {
    return (
        <button
            className='border-none h-10 w-12 cursor-pointer text-white flex flex-col justify-center items-center transition-colors hover:bg-primary-light'
            onClick={onClick}
            title={title}
        >
            {Icon}
        </button>
    );
}
