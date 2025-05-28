import { Link } from "react-router-dom";
import ProfileCardDashboard from "../Cards/ProfileCardDashboard.component";

const DashboardNavbar = () => {
  return (
    <div className="h-16 bg-white border border-b border-black/10 backdrop-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 left-0">
      <div className="container mx-auto flex items-center justify-between gap-5">
        <Link to="/dashboard">
          <h2 className="text-lg md:text-xl font-medium text-black leading-5">Ace Bot AI</h2>
        </Link>
        <ProfileCardDashboard />
      </div>
    </div>
  );
};

export default DashboardNavbar;
