import { useTranslation } from "react-i18next";
import { HeaderContents } from "../ui-parts/HeaderContents";

export const Header = () => {
    const { t, i18n } = useTranslation();
    const contentList = [t("header.refreshToken"), t("header.stockList")];
    return (
        <header className="h-14 bg-lime-200 flex items-center">
            <HeaderContents contents={contentList} />
        </header>
    );
};
