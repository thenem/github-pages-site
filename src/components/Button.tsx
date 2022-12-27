function Button(value: { text: string }) {
    return (
        <button type="button" className="hover:bg-gray-200">{value.text}</button>
    );
}

export default Button;