import '../List/_Icons.css'
import '../NavPanel/_NavPanel.css'

export function NavPanel() {
return (
    <div className="nav-panel">
        <a href='/profile' className="nav-btn">
            <div className="icon-profile"></div>
        </a>
        <a href='/list' className="nav-btn">
            <div id="styled-element" className="icon-list"></div>
        </a>
        <a href='/edit' className="nav-btn">
            <div className="icon-edit"></div>
        </a>
    </div>
);
}