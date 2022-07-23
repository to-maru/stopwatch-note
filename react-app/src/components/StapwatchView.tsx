import IconButtonTable from "./IconButtonTable";
import NewTakeButton from "./NewTakeButton";
import Note from "./Note";
import NoteTitleBox from "./NoteTitleBox";
import ResetTakeButton from "./ResetTakeButton";
import SendButton from "./AppendTextButton";
import Stopwatch from "./Stopwatch";
import StopwatchPauseButton from "./StopwatchPauseButton";
import TextBox from "./TextBox";

const StapwatchView = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                <h1 className="text-gray-800 text-2xl lg:text-6xl font-bold text-center mb-4 md:mb-6">Stopwatch Note</h1>
                <div className="flex">
                    <NoteTitleBox></NoteTitleBox>
                    <NewTakeButton></NewTakeButton>
                    <ResetTakeButton></ResetTakeButton>
                </div>
                <div className="flex justify-between">
                    <div>
                        <div className="flex justify-between">
                            <Stopwatch></Stopwatch>
                            <StopwatchPauseButton></StopwatchPauseButton>
                        </div>
                        <IconButtonTable></IconButtonTable>
                        <div className="flex justify-between h-8">
                            <TextBox></TextBox>
                            <SendButton></SendButton>
                        </div>
                    </div>
                    <div>
                        <Note></Note>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StapwatchView;