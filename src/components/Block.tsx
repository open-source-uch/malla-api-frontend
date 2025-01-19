interface Prop {
    tailwind: string;
    text: string;
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
