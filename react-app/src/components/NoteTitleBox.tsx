type Props = {
    children: string
}

const NoteTitleBox = (props: Props) => {
    return (
        <p className="text-4xl bold">{props.children}</p>
    );
}

export default NoteTitleBox;