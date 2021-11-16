export default function Button({ label }) {
    const themes = {

    };

    return (
        <>
            <button>{label}</button>
            <style jsx>{`
                button {
                    border-radius: 4px;
                    background: blue;
                    border: 1px solid rgb(0, 0, 119);
                    border-bottom: 3px solid rgb(0, 0, 119);
                    color: white;
                    padding: 4px 6px;
                }

                button:hover {
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}