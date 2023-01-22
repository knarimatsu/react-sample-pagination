import { FC } from "react";

type Props = {
    contents: string[];
};
export const HeaderContents: FC<Props> = (props) => {
    const { contents } = props;
    return (
        <>
            {contents.map((content, id) => (
                <li className="list-none ml-3" key={id}>
                    {content}
                </li>
            ))}
        </>
    );
};
