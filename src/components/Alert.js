import React from 'react'

export default function Alert(props) {
    const Capitalize = (s) => {
        const lower = s.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{ height: "50px" }}>
            {/* if props.alret is false/null than the statement after && will not be executed and if it is not null than the statement will be executed */}
            {props.alert && <div class={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
                <strong>{Capitalize(props.alert.alertType)} : </strong>{props.alert.msg}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
    )
}
