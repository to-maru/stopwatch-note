import { useState, useRef } from "react";
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

const StapwatchView = () => {
    const [takeName, setTakeName] = useState('Take1');
    const [stopwatchTimer, setStopwatchTimer] = useState(0);
    const [isStopwatchRunning, setStopwatchRunning] = useState(false);
    const [comment, setComment] = useState('');
    const [note, setNote] = useState('');
    const [accumulatedTime, setAccumulatedTime] = useState(0);
    const [timerLastStartedAt, setTimerLastStartedAt] = useState(0);
    const [timerId, setTimerId] = useState<any>();

    const inputRef = useRef<HTMLInputElement>(null);

    const toStopwatchFormat = (milliSeconds: number): string => {
        const hh = String(Math.floor(milliSeconds % (60**3*1000) / (60**2*1000))).padStart(2, '0');
        const mm = String(Math.floor(milliSeconds % (60**2*1000) / (60**1*1000))).padStart(2, '0');
        const ss = String(Math.floor(milliSeconds % (60**1*1000) / (60**0*1000))).padStart(2, '0');
        return hh+':'+mm+':'+ss;
    };

    const switchStopWatchRunning = () => {
        const isGoingToRunning = !isStopwatchRunning;
        if (isGoingToRunning) {
            const timerLastStartedAt = Date.now();
            setTimerLastStartedAt(timerLastStartedAt);
            const timerId = setInterval(() => {
                setStopwatchTimer(accumulatedTime + Date.now() - timerLastStartedAt);
            },100);
            setTimerId(timerId);
        } else {
            clearInterval(timerId);
            setTimerId(null);
            const newAccumulatedTime = accumulatedTime + Date.now() - timerLastStartedAt;
            setAccumulatedTime(newAccumulatedTime);
            setStopwatchTimer(newAccumulatedTime);
        }
        setStopwatchRunning(isGoingToRunning);
    }

    const resetStopwatch = () => {
        setStopwatchRunning(false);
        setAccumulatedTime(0);
        setStopwatchTimer(0);
        clearInterval(timerId);
        setTimerId(null);
    }

    const handleInputComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);        
    }

    const handleInputNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNote(e.target.value);        
    }

    const moveCommentToNote = () => {
        const br = note ? '\n' : '';
        const newNote = note + br + toStopwatchFormat(stopwatchTimer) + ' ' + comment;
        setNote(newNote);
        setComment('');
    }

    const addEmojiToComment = (emoji: string): void => {
        setComment((comment) => comment + emoji);
        inputRef && inputRef.current?.focus();
    }

    const resetTake = (): void => {
        //todo: Takeの概念が出来たら現在のTakeに関するNoteだけを消去するように修正する
        resetStopwatch();
    }

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                <h1 className="text-gray-800 text-2xl lg:text-6xl font-bold text-center mb-8 md:mb-16">Stopwatch Note</h1>
                <div className="w-full flex justify-between mb-8">
                    <div className="flex item-center">
                        <div className="h-full mr-8"><NoteTitleBox>{takeName}</NoteTitleBox></div>
                        <div className="mr-2"><RenameTakeButton></RenameTakeButton></div>
                        <ResetTakeButton handleClick={resetTake}></ResetTakeButton>
                    </div>
                    <div className="flex">
                        <NewTakeButton></NewTakeButton>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex-grow">
                        <div className="w-full mx-auto mb-8 flex items-center justify-between">
                            <Stopwatch>{toStopwatchFormat(stopwatchTimer)}</Stopwatch>
                            <StopwatchPauseButton isRunning={isStopwatchRunning} handleClick={switchStopWatchRunning}></StopwatchPauseButton>
                        </div>
                        <div className="w-full mb-8">
                            <IconButtonTable handleClick={addEmojiToComment}></IconButtonTable>
                        </div>
                        <div className="flex justify-between h-8">
                            <div className="w-11/12">
                                <TextBox inputRef={inputRef} handleInputComment={handleInputComment}>{comment}</TextBox>
                            </div>
                            <AppendTextButton handleClick={moveCommentToNote} disabled={comment.length < 1}></AppendTextButton>
                        </div>
                    </div>
                    <div className="ml-16">
                        <Note handleInputNote={handleInputNote}>{note}</Note>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StapwatchView;