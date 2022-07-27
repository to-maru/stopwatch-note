type Props = {
    value: string;
    handleClick: (emoji: string) => void;
};

const IconButton: React.FunctionComponent<Props> = (props) => {
    const {value} = props;
    return (
        <button className="inline-flex items-center justify-center px-3 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-gray-700 border border-gray-900 bordershadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer" onClick={() => props.handleClick(value)}>
            {value}
        </button>
    );
}

export default IconButton;