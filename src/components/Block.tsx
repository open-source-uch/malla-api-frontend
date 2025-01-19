interface Prop {
    tailwind: string;
    text: string;
}

function Block({ tailwind, text }: Prop) {
    return (
        <div className={tailwind}>
            <p>
                {text}
            </p>
        </div>
    )
}

export default Block
