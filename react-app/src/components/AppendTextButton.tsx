import ArrowRight from '../arrow_right.svg'

type Props = {
    handleClick: () => void;
    disabled: boolean;
}

const AppendTextButton = (props: Props) => {
    return (
        <input type="image" src={ArrowRight} alt="AppendTextButton" className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-25" onClick={() => props.handleClick()} disabled={props.disabled}/>
    );
}

export default AppendTextButton;