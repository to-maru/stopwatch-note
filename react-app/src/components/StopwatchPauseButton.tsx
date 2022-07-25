import PauseButton from '../pause_button.svg';
import StartButton from '../start_button.svg';

type Props = {
    isRunning: boolean;
    handleClick: () => void;
}
const StopwatchPauseButton = (props: Props) => {
    return (
        <img src={props.isRunning? PauseButton : StartButton} onClick={() => props.handleClick()} className='h-24 w-24 cursor-pointer' alt="PauseButton"/>
    );
}

export default StopwatchPauseButton;