import SideNavigation from "../_components/SideNavigation";

export default function layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <nav>
        <SideNavigation />
      </nav>
      <div className="py-1"> {children}</div>
    </div>
  );
}
