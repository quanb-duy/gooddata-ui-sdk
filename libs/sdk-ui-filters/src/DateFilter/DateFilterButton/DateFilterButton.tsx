// (C) 2007-2019 GoodData Corporation
import React from "react";
import cx from "classnames";
import { FilterButtonCustomIcon, IFilterButtonCustomIcon } from "../../shared/index.js";

export interface IDateFilterButtonProps {
    title: React.ReactNode;
    isOpen?: boolean;
    isMobile: boolean;
    disabled?: boolean;
    customIcon?: IFilterButtonCustomIcon;
    children?: React.ReactNode;
}

export const DateFilterButton: React.FC<IDateFilterButtonProps> = ({
    isOpen,
    isMobile,
    title,
    children,
    disabled,
    customIcon,
}) => {
    return (
        <div
            className={cx(
                "s-date-filter-button",
                "gd-date-filter-button",
                "dropdown-button",
                isMobile && "gd-date-filter-button-mobile",
                isOpen && "is-active",
                disabled && "disabled",
            )}
        >
            <div className="button-content">
                <div className="s-date-filter-title button-title">{title}</div>
                <div className="button-subtitle">{children}</div>
            </div>
            <FilterButtonCustomIcon customIcon={customIcon} disabled={disabled} />
        </div>
    );
};
