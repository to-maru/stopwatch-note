const Note = () => {
    const placeholder = 
`<Sample>
# Take1
8:36  ⭕️ 5-3 😆
21:03  ❌ 3-11 😡
29:58  🚽

# Take2
9:12  ⭕️ 4-3 😂
`;
    return (
        <textarea className="w-96 h-96 rounded-lg border-2 border-gray-300" placeholder={placeholder} readOnly></textarea>
    );
}

export default Note;