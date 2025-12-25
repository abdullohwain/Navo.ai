// import React from "react";
// import { useTranslation } from "react-i18next";
// import { BsBook } from "react-icons/bs";
// import { FaPlay, FaRegUser } from "react-icons/fa";
// import { FiHome } from "react-icons/fi";
// import { GoTrophy } from "react-icons/go";
// import { RxStarFilled } from "react-icons/rx";
// import CourseCard from "../components/CourseCard";


// function Home() {
//   const { t } = useTranslation();

//   // 🔹 COURSE DATA
//   const courses = [
//     {
//       id: 1,
//       image: "/doira.jpg",
//       title: "Doira: Traditional Percussion Mastery",
//       subtitle: "Milliy cholg'ular",
//       rating: "4.8",
//       videoUrl: "https://www.youtube.com/watch?v=KdT_-zdXuvg&t=11s",
//     },
//     {
//       id: 2,
//       image: "/guitar.jpg",
//       title: "Modern Music",
//       subtitle: "Zamonaviy musiqa",
//       rating: "4.9",
//       videoUrl: "https://www.youtube.com/watch?v=KdT_-zdXuvg&t=11s",
//     },
//     {
//       id: 3,
//       image: "/opera.jpg",
//       title: "Vocal & Opera",
//       subtitle: "Vokal va Opera",
//       rating: "4.7",
//       videoUrl: "https://www.youtube.com/watch?v=KdT_-zdXuvg&t=11s",
//     },
//     {
//       id: 4,
//       image: "/rubob.jpg",
//       title: "Rubob: Classical String Techniques",
//       subtitle: "UI Designer",
//       rating: "4.6",
//       videoUrl: "https://www.youtube.com/watch?v=KdT_-zdXuvg&t=11s",
//     },
//     {
//       id: 5,
//       image: "/doira.jpg",
//       title: "Fullstack",
//       subtitle: "Tech Lead",
//       rating: "5.0",
//       videoUrl: "https://www.youtube.com/watch?v=KdT_-zdXuvg&t=11s",
//     },
//   ];
  

//   return (
//     <div className="min-h-screen pb-20">
       
//       {/* 🔥 FEATURED COURSES */}
//       <section className="mt-4 px-4">
//         <h2 className="text-lg font-bold mb-3">
//           {t("featuredCourses", "Featured Courses")}
//         </h2>
  
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
//           {courses.map((course) => (
//             <CourseCard
//               key={course.id}
//               image={course.image}
//               title={course.title}
//               subtitle={course.subtitle}
//               rating={course.rating}
//               videoUrl={course.videoUrl}
//             />
//           ))}
//         </div>
//       </section>
//       <nav className="fixed bottom-1 left-0 right-0 border-t shadow-lg h-16 flex bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 justify-around items-center">
//        <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-105">
//          <FiHome className="text-xl" />
//          <span className="text-xs pt-1">Home</span>
//        </div>

//        <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-105">
//          <BsBook className="text-xl" />
//          <span className="text-xs pt-1">Courses</span>
//        </div>

//        <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-105">
//        <GoTrophy className="text-xl" />
//          <span className="text-xs pt-1">Compete</span>
//        </div>

//        <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-105">
//          <FaRegUser className="text-xl" />
//          <span className="text-xs pt-1">Profile</span>
//        </div>      
//      </nav>
//     </div>
//   );
// }

// export default Home;



// // function Home() {
// //   const { t } = useTranslation();

// //   return (
// //     <div className="min-h-screen pb-20">

// //       {/* Header */}
// //       {/* <header className="flex items-center justify-between p-4">
// //         <div>
// //           <h1 className="text-xl font-bold">{t("welcome")}</h1>
// //           <p className="text-gray-600 text-sm">Find your perfect mentor</p>
// //         </div>

// //         <img
// //           src="/profile.jpg"
// //           alt="profile"
// //           className="w-12 h-12 rounded-full object-cover border"
// //         />
// //       </header> */}
// //       {/* Search */}
// //       {/* <div className="px-4">
// //         <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3">
// //           <img src="/search.png" alt="" className="w-5" />
// //           <input
// //             type="text"
// //             placeholder="Search mentor or course..."
// //             className="w-full outline-none text-sm"
// //           />
// //         </div>
// //       </div> */}

// //       {/* Categories */}
// //       {/* <section className="mt-4 px-4">
// //         <h2 className="text-lg font-bold mb-3">Categories</h2>

// //         <div className="flex gap-4 overflow-x-auto pb-3">
// //           {[
// //             { img: "/design.png", label: "Design" },
// //             { img: "/code.png", label: "Programming" },
// //             { img: "/marketing.png", label: "Marketing" },
// //             { img: "/language.png", label: "Languages" },
// //             { img: "/math.png", label: "Math" },
// //           ].map((cat, i) => (
// //             <div
// //               key={i}
// //               className="min-w-[110px] bg-white rounded-xl p-4 shadow-sm flex flex-col items-center border"
// //             >
// //               <img src={cat.img} alt="" className="w-12" />
// //               <span className="mt-2 text-sm font-medium">{cat.label}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </section> */}

// //       {/* Featured Courses */}
// //       <section className="mt-4 px-4 ">
// //         <h2 className="text-lg font-bold mb-3">Featured Courses</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">       
// //             <CourseCard
// //               image="/doira.jpg"
// //               title="Courses"
// //               subtitle="Frontend mentor"
// //               rating="4.8"
// //               videoUrl="https://www.youtube.com/watch?v=KdT_-zdXuvg&t=11s"
// //             />
// //         </div>
// //       </section>  

// //       {/* Bottom Navigation */}
// //       <nav className="fixed bottom-1 left-0 right-0 border-t shadow-lg h-16 flex bg-gray-700 justify-around items-center">
// //         <div className="flex flex-col items-center">
// //           <FiHome className="text-xl" />
// //           <span className="text-xs pt-1">Home</span>
// //         </div>

// //         <div className="flex flex-col items-center">
// //           <BsBook className="text-xl" />
// //           <span className="text-xs pt-1">Courses</span>
// //         </div>

// //         <div className="flex flex-col items-center">
// //         <GoTrophy className="text-xl" />
// //           <span className="text-xs pt-1">Compete</span>
// //         </div>

// //         <div className="flex flex-col items-center">
// //           <FaRegUser className="text-xl" />
// //           <span className="text-xs pt-1">Profile</span>
// //         </div>      
// //       </nav>
// //     </div>
// // //   );
// // }

// // export default Home;
import React from "react";
import { useTranslation } from "react-i18next";
import { BsBook } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { GoTrophy } from "react-icons/go";
import CourseCard from "../components/CourseCard";

function Home() {
  const { t } = useTranslation();

  const courses = [
    {
      id: 1,
      image: "/doira.jpg",
      title: "Doira: Traditional Percussion Mastery",
      subtitle: "Milliy cholg'ular",
      rating: "4.8",
      videoUrl: "https://www.youtube.com/watch?v=KdT_-zdXuvg&t=11s",
    },
    {
      id: 2,
      image: "/guitar.jpg",
      title: "Modern Music",
      subtitle: "Zamonaviy musiqa",
      rating: "4.9",
      videoUrl: "https://www.youtube.com/watch?v=KdT_-zdXuvg&t=11s",
    },
    {
      id: 3,
      image: "/opera.jpg",
      title: "Vocal & Opera",
      subtitle: "Vokal va Opera",
      rating: "4.7",
      videoUrl: "https://www.youtube.com/watch?v=KdT_-zdXuvg&t=11s",
    },
    {
      id: 4,
      image: "/rubob.jpg",
      title: "Rubob: Classical String Techniques",
      subtitle: "UI Designer",
      rating: "4.6",
      videoUrl: "https://www.youtube.com/watch?v=KdT_-zdXuvg&t=11s",
    },
    {
      id: 5,
      image: "/doira.jpg",
      title: "Fullstack",
      subtitle: "Tech Lead",
      rating: "5.0",
      videoUrl: "https://www.youtube.com/watch?v=KdT_-zdXuvg&t=11s",
    },
  ];

  return (
    <div className="min-h-screen pb-20">

      {/* 🔥 FEATURED COURSES */}
      <section className="mt-4 px-4">
        <h2 className="text-lg font-bold mb-3">
          {t("featuredCourses", "Featured Courses")}
        </h2>

        {/* MOBILE = swipe | DESKTOP = grid */}
        <div
          className="
            flex gap-2 overflow-x-auto
            sm:grid sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="
                w-[95%] shrink-0
                sm:w-auto sm:shrink
              "
            >
              <CourseCard
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                rating={course.rating}
                videoUrl={course.videoUrl}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 🔽 BOTTOM NAV */}
      <div className="fixed bottom-0 w-full flex justify-center">
      <nav className="w-full max-w-lg h-16 border-t shadow-lg flex bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 justify-around items-center rounded-t-2xl">
        <div className="flex flex-col items-center cursor-pointer">
          <FiHome className="text-2xl" />
          <span className="text-xs mt-1">Home</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <BsBook className="text-2xl" />
          <span className="text-xs mt-1">Courses</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <GoTrophy className="text-2xl" />
          <span className="text-xs mt-1">Achievements</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <FaRegUser className="text-2xl" />
          <span className="text-xs mt-1">Profile</span>
        </div>
      </nav>
    </div>

        {/* <nav className="fixed bottom-0 border-t shadow-lg h-16 flex bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 justify-around items-center">
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-400">
            <FiHome className="text-xl" />
            <span className="text-xs pt-1">Home</span>
          </div>
  
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-400">
            <BsBook className="text-xl" />
            <span className="text-xs pt-1">Courses</span>
          </div>
  
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-400">
            <GoTrophy className="text-xl" />
            <span className="text-xs pt-1">Compete</span>
          </div>
  
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-400">
            <FaRegUser className="text-xl" />
            <span className="text-xs pt-1">Profile</span>
          </div>
        </nav> */}
    </div>
  );
}

export default Home;
