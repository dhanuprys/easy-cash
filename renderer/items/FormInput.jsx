export function InputText(...props) {
    return (
        <>
            <input type="text" {...props} />
            <style jsx>{`
                input {
                    padding: 10px 1rem;
                    border-radius: 4px;
                    border: 1px solid grey;
                    border-bottom: 3px solid lightblue;
                }
            `}</style>
        </>
    )
}

export function CheckBox(...props) {
    return (
        <>
            <input type="checkbox" {...props} />
            <style jsx>{`
                input[type="checkbox"] {
                    padding: 10px 1rem;
                    border-radius: 4px;
                    border: 1px solid grey;
                    border-bottom: 3px solid rgb(0, 0, 211);
                }
            `}</style>
        </>
    )
}