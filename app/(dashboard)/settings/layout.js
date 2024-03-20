export default function DashboardLayout({ children }) {
    return (
        <>
            <div className="settings">
                <ul className="flex gap-5 p-4">
                    <li>Analytics</li>
                    <li>Settings</li>
                </ul>
            </div>
            {children}
        </>
    );
}
