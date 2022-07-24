import IconButtonTable from "./IconButtonTable";
import NewTakeButton from "./NewTakeButton";
import Note from "./Note";
import NoteTitleBox from "./NoteTitleBox";
import RenameTakeButton from "./RenameTakeButton";
import ResetTakeButton from "./ResetTakeButton";
import SendButton from "./AppendTextButton";
import Stopwatch from "./Stopwatch";
import StopwatchPauseButton from "./StopwatchPauseButton";
import TextBox from "./TextBox";

const StapwatchView = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                <h1 className="text-gray-800 text-2xl lg:text-6xl font-bold text-center mb-8 md:mb-16">Stopwatch Note</h1>
                <div className="w-full flex justify-between mb-8">
                    <div className="flex item-center">
                        <div className="h-full mr-8"><NoteTitleBox></NoteTitleBox></div>
                        <div className="mr-2"><RenameTakeButton></RenameTakeButton></div>
                    </div>
                    <div className="flex">
                        <div className="mr-2">
                            <ResetTakeButton></ResetTakeButton>
                        </div>
                        <NewTakeButton></NewTakeButton>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex-grow">
                        <div className="w-5/6 mx-auto mb-8 flex justify-around">
                            <Stopwatch></Stopwatch>
                            <StopwatchPauseButton></StopwatchPauseButton>
                        </div>
                        <div className="w-full mb-8">
                            <IconButtonTable></IconButtonTable>
                        </div>
                        <div className="flex justify-between h-8">
                            <div className="w-11/12">
                                <TextBox></TextBox>
                            </div>
                            <SendButton></SendButton>
                        </div>
                    </div>
                    <div className="ml-16">
                        <Note></Note>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StapwatchView;