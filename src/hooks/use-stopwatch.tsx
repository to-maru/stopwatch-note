import { useState, useRef, useEffect } from "react";

const useStopwatch = (): [
    string,
    string,
    string,
    boolean,
    React.RefObject<HTMLInputElement>,
    React.RefObject<HTMLTextAreaElement>,
    (e: React.KeyboardEvent<HTMLInputElement>) => void,
    (e: React.ChangeEvent<HTMLInputElement>) => void,
    (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    () => void,
    () => string,
    () => void,
    (emoji: string) => void,
    () => void,
] => {
    const [takeName] = useState('Take1');
    const [stopwatchTimer, setStopwatchTimer] = useState(0);
    const [isStopwatchRunning, setStopwatchRunning] = useState(false);
    const [comment, setComment] = useState('');
    const [note, setNote] = useState('');
    const [accumulatedTime, setAccumulatedTime] = useState(0);
    const [timerLastStartedAt, setTimerLastStartedAt] = useState(0);
    const [timerId, setTimerId] = useState<any>();

    const inputRef = useRef<HTMLInputElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const scroll = textAreaRef.current?.scrollHeight;
        if (typeof scroll === 'number' && typeof textAreaRef.current?.scrollTop === 'number') {
            textAreaRef.current.scrollTop = scroll + 1;
        }  
    }, [note]);

    const toStopwatchFormat = (milliSeconds: number): string => {
        const hh = String(Math.floor(milliSeconds % (60**3*1000) / (60**2*1000))).padStart(2, '0');
        const mm = String(Math.floor(milliSeconds % (60**2*1000) / (60**1*1000))).padStart(2, '0');
        const ss = String(Math.floor(milliSeconds % (60**1*1000) / (60**0*1000))).padStart(2, '0');
        return hh+':'+mm+':'+ss;
    };

    const formattedStopwatch = (): string => toStopwatchFormat(stopwatchTimer);

    const switchStopWatchRunning = (): void => {
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

    const handleKeyPressOnComment = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter' && comment !== '') {
            moveCommentToNote();
        }
    }

    return [
        takeName,
        comment,
        note,
        isStopwatchRunning,
        inputRef,
        textAreaRef,
        handleKeyPressOnComment,
        handleInputComment,
        handleInputNote,
        resetTake,
        formattedStopwatch,
        switchStopWatchRunning,
        addEmojiToComment,
        moveCommentToNote,
    ];
};

export default useStopwatch;