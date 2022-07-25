type Props = {
    children: string
}

const Stopwatch = (props: Props) => {
    return (
        <p className="text-8xl">{props.children}</p>
    );
}

export default Stopwatch;