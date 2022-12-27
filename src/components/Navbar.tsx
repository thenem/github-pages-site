import HomeIcon from "../icons/HomeIcon";

export default function Navbar() {
    return (
        <div className="w-full h-16 bg-gray-100">
            <HomeIcon />
            <a href={'counter'}>Go to counter</a>
        </div>
    );
}