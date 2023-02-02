import { useTranslation } from "react-i18next";
import { pageList } from "../libs/pageList";
import { HeaderContents } from "../ui-parts/HeaderContents";

export const Header = () => {
    const { t, i18n } = useTranslation();
    const contentList = [t("header.refreshToken"), t("header.stockList")];
    return (
        <header className="h-14 shadow flex items-center">
            <HeaderContents contents={pageList} />
        </header>
    );
};
