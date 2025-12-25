import { FaPlay } from "react-icons/fa";
import { RxStarFilled } from "react-icons/rx";

export default function CourseCard({
  image = "/doira.jpg",
  title = "Courses",
  subtitle = "Senior Developer",
  rating = "4.3",
  videoUrl,
}) {
  return (
    <div className="rounded-xl border p-2 shadow-sm transition hover:shadow-md overflow-x-auto">
      
      {/* IMAGE + PLAY */}
      <a
        href={videoUrl}
        target="_blank"
        className="relative block group"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover rounded-lg"
        />

        {/* OVERLAY */}
        <div
          className="absolute inset-0 rounded-lg
                     flex items-center justify-center
                     bg-black/30 backdrop-blur-sm
                     opacity-0 group-hover:opacity-100
                     transition-all duration-300"
        >
          <div
            className="bg-black/60 p-4 rounded-full
                       transform scale-90
                       group-hover:scale-110
                       transition-all duration-300"
          >
            <FaPlay className="text-white text-2xl ml-1" />
          </div>
        </div>
      </a>

      {/* TEXT */}
      <h3 className="font-semibold mt-3 text-sm">{title}</h3>
      <p className="text-xs text-gray-400">{subtitle}</p>

      {/* RATING */}
      <div className="flex items-center gap-2 mt-2 text-sm">
        <RxStarFilled className="cursor-pointer text-yellow-400" />
        <span className="text-yellow-400">{rating}</span>

        <span className="ml-auto text-blue-500 font-medium cursor-pointer">
          View
        </span>
      </div>
    </div>
  );
}
