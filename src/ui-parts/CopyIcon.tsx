import React, { useState } from "react";
export const CopyIcon = () => {
    const [isCopied, setIsCopied] = useState(false);
    const copy = () => {
        navigator.clipboard.writeText("hello");
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };
    return (
        <div>
            <button onClick={copy}>Copy</button>
            {isCopied && <span>copied</span>}
        </div>
    );
};

export default CopyIcon;
