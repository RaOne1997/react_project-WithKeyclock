import React, { useState } from 'react';
import AppNavigation from '../AppNavigation';
import { Link } from 'react-router-dom';
import './sidebar-component.css';
type SidebarProps = { toggleSidebarmain: () => void, isCollapsed: boolean };

function SidebarComponent(prpos: SidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const navigationItems = AppNavigation.getNavigationItems();


    console.log(navigationItems);
    const toggleSidebar = () => {
        prpos.toggleSidebarmain();
        setIsCollapsed(!isCollapsed);
    };
    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            {/* Logo and Toggle Button */}
            <div className="sidebar-header">
                <button className="toggle-btn" onClick={toggleSidebar}>
                    <i className="bi bi-layout-sidebar"></i>
                </button>
                {!isCollapsed && <h5 className="sidebar-title">Sidebar</h5>}
            </div>
            <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                {/* Logo and Toggle Button */}
                <div className="sidebar-header">
                    <button className="toggle-btn" onClick={toggleSidebar}>
                        <i className="bi bi-layout-sidebar"></i>
                    </button>
                    {!isCollapsed && <h5 className="sidebar-title">Sidebar</h5>}
                </div>
                <ul className="nav flex-column">
                    {navigationItems.map((item, index) => (
                       AppNavigation.checkUserPermission( item.permissions) && item.children.length === 0 ? (
                            <li className="nav-item" key={`main-${index}`}>
                                <Link to={item.redirectPath} className="nav-link">
                                    <i className={`bi bi-${item.icon}`}></i>
                                    {!isCollapsed && <span className="menu-text">{item.menu}</span>}
                                </Link>
                            </li>
                        ) : (
                            isCollapsed &&  AppNavigation.checkUserPermission( item.permissions) && item.children.length === 0 ? (
                                <li className="nav-item" key={`main-${index}`}>
                                    <Link to={item.redirectPath} className="nav-link">
                                        <i className={`bi bi-${item.icon}`}></i>
                                        <span className="menu-text">{item.menu}</span>
                                    </Link>
                                </li>
                            ) : (

                                <div className="accordion custom-accordion " id={`sidebarAccordion-${index}`} key={`accordion-${index}`}>
                                    { AppNavigation.checkUserPermission( item.permissions) && (
                                        !isCollapsed ? (
                                            <div className="accordion-item custom-accordion-item">
                                                <h2 className="accordion-header" id={`heading${index}`}>
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse${index}`}
                                                        aria-expanded="false"
                                                        aria-controls={`collapse${index}`}
                                                    >
                                                        <i className={`bi bi-${item.icon}`}></i>
                                                        <span className="menu-text">{item.menu}</span>
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`collapse${index}`}
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby={`heading${index}`}
                                                    data-bs-parent={`#sidebarAccordion-${index}`}
                                                >
                                                    <div className="accordion-body">
                                                        <ul className="list-unstyled">
                                                            {item.children.map((child, childIndex) => (
                                                             AppNavigation.checkUserPermission(   child.permissions) && (
                                                                    <li className="nav-item" key={`child-${index}-${childIndex}`}>
                                                                        <Link to={child.redirectPath} className="nav-link">
                                                                            <i className={`bi bi-${child.icon}`}></i>
                                                                            <span className="ms-2">{child.menu}</span>
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <li className="nav-item" key={`main-${index}`}>
                                                <div className="nav-link pp">
                                                    <i className={`bi bi-${item.icon}`}></i>
                                                    <div className="flapover-menu">
                                                        {item.children.map((child, childIndex) => (
                                                             AppNavigation.checkUserPermission(   child.permissions)&& (
                                                                <div className='p-2'>
                                                                    <Link to={child.redirectPath} key={`child-flap-${index}-${childIndex}`}  className="nav-link">
                                                                        <i className={`bi bi-${child.icon}`}></i>
                                                                        <span className="ms-2">{child.menu}</span>
                                                                    </Link>
                                                                </div>

                                                            )
                                                        ))}
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    )}
                                </div>
                            )
                        )
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SidebarComponent;
