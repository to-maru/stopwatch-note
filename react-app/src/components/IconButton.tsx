type Props = {value: string};

const IconButton: React.FunctionComponent<Props> = (props) => {
    const {value} = props;
    return (
        <a href="#_" className="inline-flex items-center justify-center px-3 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-gray-700 border border-gray-900 bordershadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" data-primary="gray-600" data-primary-reset="{}">
            {value}
        </a>
    );
}

export default IconButton;