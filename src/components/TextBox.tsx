type Props = {
    children: string
    handleInputComment: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputRef: React.RefObject<HTMLInputElement>;
}

const TextBox = (props: Props) => {
    return (
        <div className="relative z-0 mb-6 w-full group">
            <input ref={props.inputRef} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Comment About This Moment" onChange={(e) => props.handleInputComment(e)} value={props.children}/>
        </div>
    );
}

export default TextBox;