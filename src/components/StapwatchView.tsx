import IconButtonTable from "./IconButtonTable";
import NewTakeButton from "./NewTakeButton";
import Note from "./Note";
import NoteTitleBox from "./NoteTitleBox";
import RenameTakeButton from "./RenameTakeButton";
import ResetTakeButton from "./ResetTakeButton";
import AppendTextButton from "./AppendTextButton";
import Stopwatch from "./Stopwatch";
import StopwatchPauseButton from "./StopwatchPauseButton";
import TextBox from "./TextBox";
import useStopwatch from "../hooks/use-stopwatch";

const StapwatchView = () => {
    const [takeName, comment, note, isStopwatchRunning, inputRef, textAreaRef,
        handleKeyPressOnComment, handleInputComment, handleInputNote,
        resetTake, formattedStopwatch, switchStopWatchRunning, addEmojiToComment, moveCommentToNote] = useStopwatch();

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                <h1 className="text-gray-800 text-2xl lg:text-6xl font-bold text-center mb-8 md:mb-16">Stopwatch Note</h1>
                <div className="w-full flex justify-between mb-8">
                    <div className="flex item-center">
                        <div className="h-full mr-8">
                            <NoteTitleBox>{takeName}</NoteTitleBox>
                        </div>
                        <div className="mr-2">
                            <RenameTakeButton />
                        </div>
                        <ResetTakeButton handleClick={resetTake} />
                    </div>
                    <div className="flex">
                        <NewTakeButton />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex-grow">
                        <div className="w-full mx-auto mb-8 flex items-center justify-between">
                            <Stopwatch>{formattedStopwatch()}</Stopwatch>
                            <StopwatchPauseButton isRunning={isStopwatchRunning} handleClick={switchStopWatchRunning} />
                        </div>
                        <div className="w-full mb-8">
                            <IconButtonTable handleClick={addEmojiToComment} />
                        </div>
                        <div className="flex justify-between h-8">
                            <div className="w-11/12">
                                <TextBox inputRef={inputRef} handleKeyPress={handleKeyPressOnComment} handleInputComment={handleInputComment}>{comment}</TextBox>
                            </div>
                            <AppendTextButton handleClick={moveCommentToNote} disabled={comment.length < 1} />
                        </div>
                    </div>
                    <div className="ml-16">
                        <Note textAreaRef={textAreaRef} handleInputNote={handleInputNote}>{note}</Note>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StapwatchView;