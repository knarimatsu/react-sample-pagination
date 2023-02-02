import { FC } from "react";
import { Link } from "react-router-dom";
import { PageListType } from "../libs/pageList";

type Props = {
    contents: PageListType[];
};
export const HeaderContents: FC<Props> = (props) => {
    const { contents } = props;
    const links = contents.map((content, key) => (
        <div>
            <Link className="m-3" to={content.path}>
                {content.name}
            </Link>
        </div>
    ));
    return (
        <>
            {contents.map((content, key) => (
                <li className="list-none" key={key}>
                    <Link className="m-3" to={content.path}>
                        {content.name}
                    </Link>
                </li>
            ))}
        </>
    );
};
