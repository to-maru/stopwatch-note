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
            <h1 className="text-3xl font-bold underline">StopwatchView</h1>
            <div className="flex">
                <NoteTitleBox></NoteTitleBox>
                <NewTakeButton></NewTakeButton>
                <ResetTakeButton></ResetTakeButton>
            </div>
            <div className="flex">
                <div>
                    <div className="flex">
                        <Stopwatch></Stopwatch>
                        <StopwatchPauseButton></StopwatchPauseButton>
                    </div>
                    <IconButtonTable></IconButtonTable>
                    <div className="flex">
                        <TextBox></TextBox>
                        <SendButton></SendButton>
                    </div>
                </div>
                <div>
                    <Note></Note>
                </div>
            </div>
        </div>
    );
}

export default StapwatchView;