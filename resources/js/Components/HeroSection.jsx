export default function HeroSection({ title, imageUrl }) {
    return (
        <div
            className="bg-cover bg-center h-64 flex items-center justify-center"
            style={{
                backgroundImage: `url('${imageUrl}')`,
            }}
        >
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
                {title}
            </h1>
        </div>
    );
}
