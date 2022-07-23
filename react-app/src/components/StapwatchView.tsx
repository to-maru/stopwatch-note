import IconButtonTable from "./IconButtonTable";
import NewTakeButton from "./NewTakeButton";
import Note from "./Note";
import NoteTitleBox from "./NoteTitleBox";
import ResetTakeButton from "./ResetTakeButton";
import SendButton from "./SendButton";
import Stopwatch from "./Stopwatch";
import StopwatchPauseButton from "./StopwatchPauseButton";
import TextBox from "./TextBox";

const StapwatchView = () => {
    return (
        <div>
            <h1>StopwatchView</h1>
            <div>
                <div>
                    <NoteTitleBox></NoteTitleBox>
                    <NewTakeButton></NewTakeButton>
                    <ResetTakeButton></ResetTakeButton>
                </div>
                <div>
                    <Stopwatch></Stopwatch>
                    <StopwatchPauseButton></StopwatchPauseButton>
                </div>
                <IconButtonTable></IconButtonTable>
                <div>
                    <TextBox></TextBox>
                    <SendButton></SendButton>
                </div>
            </div>
            <div>
                <Note></Note>
            </div>
        </div>
    );
}

export default StapwatchView;