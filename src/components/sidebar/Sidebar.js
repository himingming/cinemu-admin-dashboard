import "./Sidebar.css";
import img from "../../img/movielogo.png"

const Sidebar = ({sidebarOpen, closeSidebar}) =>{
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
         <div className="sidebar__title">
            <div className="sidebar__img">
                <img src={img} alt="logo"/>
                <h1>CINEMU</h1>
            </div>
            <i
            className="fa fa-items"
            id="sidebarIcon"
            onClick={()=>closeSidebar()}
            ></i>
         </div>
        
        <div className="sidebar__menu">
            <div className="sidebar__link active_menu_link">
                <i className="fa fa-home"></i>
                <a href="/">Admin</a>
            </div>
            <h2>관리</h2>
            <div className="sidebar__link">
                <i className="fa-regular fa-circle-user"></i>
                <a href="#">회원 관리</a>
            </div>
            
            <h2>등록</h2>

            <div className="sidebar__link">
                <i className="fa-solid fa-clapperboard"></i>
                <a href="AddMovie">영화 등록</a>
            </div>

            <div className="sidebar__link">
                <i className="fa-solid fa-cart-shopping"></i>
                <a href="AddSnack">상품 등록</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-question"></i>
                <a href="#">답변 등록</a>
            </div>
        </div>
     </div>
    );
};

export default Sidebar;