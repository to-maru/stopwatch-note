import IconButton from "./IconButton";

type Props = {
    handleClick: (emoji: string) => void;
}
type value_row = Array<string>;
type value_rows = Array<value_row>;

const IconButtonTable = (props: Props) => {
    const value_rows: value_rows = [
        [
            '\u{30}\u{FE0F}\u{20E3}',
            '\u{31}\u{FE0F}\u{20E3}',
            '\u{32}\u{FE0F}\u{20E3}',
            '\u{33}\u{FE0F}\u{20E3}',
            '\u{34}\u{FE0F}\u{20E3}',
            '\u{35}\u{FE0F}\u{20E3}',
            '\u{36}\u{FE0F}\u{20E3}',
            '\u{37}\u{FE0F}\u{20E3}',
            '\u{38}\u{FE0F}\u{20E3}',
            '\u{39}\u{FE0F}\u{20E3}',
            '\u{1F51F}'],
        ['🟥','🟦','🟩','🟨','🟪'],
        ['⭕️','❌','❗','❓','👍','👎','🍔','🚽',],
        ['🙂','😊','😆','😂','😡','😭','😪']
    ];
    return (
        <>
            {value_rows.map((value_row) => (
                <>
                    <div className="flex justify-center mb-1">
                        {value_row.map((value) => (
                            <IconButton value={value} handleClick={props.handleClick}></IconButton>
                        ))}
                    </div>
                </>
            ))}
        </>
    );
}

export default IconButtonTable;