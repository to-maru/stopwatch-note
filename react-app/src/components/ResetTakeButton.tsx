type Props = {
    handleClick: () => void;
}

const ResetTakeButton = (props: Props) => {
    return (
        <button className="inline-block bg-red-600 hover:bg-red-700 focus-visible:ring text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3" onClick={() => props.handleClick()}>Reset Take</button>
    );
}

export default ResetTakeButton;