import React from "react";
import { Alert, Badge } from "react-bootstrap";

const Header = ({ personsLength, appTitle }) => {
    let badgeStyle = "";

    if (personsLength >= 3) badgeStyle = "success";
    if (personsLength <= 2) badgeStyle = "warning";
    if (personsLength <= 1) badgeStyle = "danger";

    return (
        <div>
            <Alert variant="info">
                <h2>{appTitle}</h2>
            </Alert>
            <Alert variant="light">
                تعداد اشخاص{" "}
                <Badge pill variant={badgeStyle}>
                    {personsLength}
                </Badge>{" "}
                نفر می باشد
            </Alert>
        </div>
    );
};

export default Header;
