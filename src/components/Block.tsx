interface Prop {
    tailwind: string;
    text: string;
    children?: React.ReactNode;
}

function Block({ tailwind, text, children }: Prop) {
    return (
        <div className={tailwind}>
            <p>
                {text}
            </p>
            {children}
        </div>
    )
}

export default Block
