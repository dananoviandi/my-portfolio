export default function Footer() {
    return (
        <div className="footer footer-center bg-[#60b9da] text-[#190c4e] p-4 fixed bottom-0">
            <aside>
                <p>
                    Copyright © {new Date().getFullYear()}
                </p>
            </aside>
        </div>
    );
}
