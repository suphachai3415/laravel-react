export default function LampFilter({ onSearch }) {
    return (
        <div className="flex items-center space-x-4 mb-5">
            <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-full px-4 py-1 focus:outline-none"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}
