// "use client"
// import Image from "next/image"
// import Link from "next/link"
// import { Play, Bookmark, ThumbsUp, Share, Star, Plus, BookmarkIcon, ChevronLeft , ChevronRight   } from "lucide-react"
// import { useRef } from "react"
// import movie01 from './../public/assets/images/movies/loveinsky.png';
// import home01 from './../public/assets/images/landing/home01.png';
// import movie02 from './../public/assets/images/movies/johnwick01.png';
// import movie03 from './../public/assets/images/movies/johnwick02.png';
// import review01 from './../public/assets/images/review/review01.png';

// export default function MoviePage({ params }) {
//   const scrollContainerRef = useRef(null)
//   // This would normally come from an API based on the slug
//   const movie = {
//     title: "John Wick 4",
//     year: "2023",
//     duration: "2h 35 mins",
//     rating: "TV-MA",
//     score: "7.5",
//     views: "4126",
//     reviews: "1",
//     genres: ["Action,", "Adventure"],
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     cast: ["Renée Muffard"],
//     crew: ["Aleya Nadeau", "Ricky Alarcon", "Sarah Neal"],
//     poster: "/placeholder.svg?height=400&width=300",
//     backdrop: "/placeholder.svg?height=800&width=1400",
//   }

//   const recommendedMovies = [
//     { title: "Love In The Night Sky", image: "/assets/images/home/home13.png" },
//     { title: "Spacex", image: "/assets/images/home/home14.png" },
//     { title: "Spider Man Memo", image: "/assets/images/home/home15.png" },
//     { title: "City Hunter", image: "/assets/images/home/home16.png" },
//     { title: "The Sleeping Angel", image: "/assets/images/home/home17.png"},
//     { title: "The Past", image: "/assets/images/home/home18.png" },
//     { title: "Best Friend", image:"/assets/images/home/home19.png" },
//     { title: "Love In The Night Sky", image: "/assets/images/home/home13.png" },
//     { title: "Spacex", image: "/assets/images/home/home14.png" },
//   ]

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({
//         left: -200,
//         behavior: "smooth",
//       })
//     }
//   }

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({
//         left: 200,
//         behavior: "smooth",
//       })
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#020b1f] via-[#0a2151] to-[#020b1f] text-white">
//       {/* Hero Section */}
//       <section className="relative h-[90vh] flex items-center">
//         <div className="absolute inset-0">
//           <Image src={movie02} alt={movie.title} fill className="object-cover" priority />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#132036] to-transparent" />
//         </div>

//         <div className="relative z-10 container mx-auto px-4">
//           <div className="max-w-2xl">
//             <div className="text-[#1D50A3] font-semibold text-sm mb-2 uppercase tracking-wider flex flex-wrap gap-2">
//               {movie.genres.slice(0, 2).map((genre) => (
//                 <span key={genre}>{genre}</span>
//               ))}
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
//             <div className="flex items-center space-x-4 mb-4 text-sm">
//               <div className="flex items-center">
//                 <Star className="h-4 w-4 text-[#1D50A3] fill-[#1D50A3] mr-1" />
//                 <span>{movie.score}</span>
//               </div>
//               <span>{movie.year}</span>
//               <span>{movie.duration}</span>
//               <span className="bg-red-600 px-2 py-1 rounded">{movie.rating}</span>
//             </div>
//             <p className="text-gray-300 mb-6">
//               Enjoy exclusive Amazon Originals as well as popular movies and TV shows for USD 12.99/mon. Watch now,
//               cancel anytime.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <button className="bg-[#1D50A3] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-900 transition-colors ">
//                 <span>Play Now</span>
//                 <Play className="h-5 w-5 fill-current" />
//               </button>
//               <button className="bg-gray-700/80 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
//                 <Bookmark className="h-5 w-5" />
//                 <span>Watch Later</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Movie Details */}
//       <section className="py-12 px-4">
//         <div className="container mx-auto">
//           <div className="flex flex-col md:flex-row gap-8">
//             {/* Left Column - Poster */}
//             <div className="md:w-1/4">
//               <div className="relative rounded-lg overflow-hidden">
//                 <Image
//                   src={movie03}
//                   alt={movie.title}
//                   width={300}
//                   height={700}
//                   className="w-full h-[50vh]"
//                 />
//               </div>
//               <div className="mt-4 flex gap-2">
//                 <button className="flex-1 bg-[#1A1D33] hover:bg-gray-700 text-white py-2 rounded flex items-center justify-center gap-2 transition-colors">
//                   <ThumbsUp className="h-4 w-4" />
//                   <span>1 Like</span>
//                 </button>
//                 <button className="flex-1 bg-[#1A1D33]  hover:bg-gray-700 text-white py-2 rounded flex items-center justify-center gap-2 transition-colors">
//                   <Share className="h-4 w-4" />
//                   <span>Share</span>
//                 </button>
//                 <button className="flex-1 bg-[#1A1D33]  hover:bg-gray-700 text-white py-2 rounded flex items-center justify-center gap-2 transition-colors">
//                   <Plus className="h-4 w-4" />
//                   <span>Watchlist</span>
//                 </button>
//               </div>
//             </div>

//             {/* Right Column - Details */}
//             <div className="md:w-3/4">
//               <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
//               <div className="flex items-center space-x-4 mb-4 text-sm">
//                 <div className="flex items-center">
//                   <div className="flex">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <Star key={star} className="h-4 w-4 text-[#1D50A3] fill-[#1D50A3]" />
//                     ))}
//                   </div>
//                   <span className="ml-2">{movie.score}</span>
//                 </div>
//                 <span>•</span>
//                 <span>{movie.views} Views</span>
//                 <span>•</span>
//                 <span>{movie.reviews} review</span>
//               </div>
//               <div className="mb-4">
//                 <div className="flex flex-wrap gap-2 mb-2">
//                   <span className="text-sm">{movie.year}</span>
//                   <span className="text-sm">•</span>
//                   <span className="text-sm">{movie.duration}</span>
//                   <span className="text-sm">•</span>
//                   <span className="text-sm bg-red-600 px-2 py-0.5 rounded">{movie.rating}</span>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {movie.genres.map((genre) => (
//                     <span key={genre} className="text-sm text-gray-400">
//                       {genre}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="mb-6">
//                 <p className="text-gray-300 leading-relaxed">{movie.description}</p>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-2">
//                   <h3 className="text-lg font-semibold">Cast:</h3>
//                   <p className="text-gray-300">{movie.cast.join(", ")}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <h3 className="text-lg font-semibold">Crew:</h3>
//                   <p className="text-gray-300">{movie.crew.join(", ")}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Recommended Section */}
//       <div className="container mx-auto px-4 md:px-8 lg:px-2 py-8">
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="text-2xl font-bold">Recommend For You</h3>
//           <div className="flex gap-2">
//             <button
//               onClick={scrollLeft}
//               className="bg-gray-700/50 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </button>
//             <button
//               onClick={scrollRight}
//               className="bg-gray-700/50 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//         <div
//           ref={scrollContainerRef}
//           className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
//           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//         >
//           {recommendedMovies.map((movie, index) => (
//             <div key={index} className="flex-shrink-0 w-32 md:w-40 cursor-pointer">
//               <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2">
//                 <Image
//                   src={movie.image || "/placeholder.svg"}
//                   alt={movie.title}
//                   fill
//                   className="object-cover hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <p className="text-sm text-slate-300 text-center">{movie.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Review Section */}
//       <div className="container mx-auto px-4 md:px-8 lg:px-1 py-8">
//         <h3 className="text-2xl font-bold mb-6">Add a review</h3>
//         <p className="text-slate-400 mb-4">Your email address will not be published. Required fields are marked *</p>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Your rating *</label>
//           <div className="flex gap-1">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <Star
//                 key={star}
//                 className="w-6 h-6 text-slate-600 hover:text-[#1D50A3] cursor-pointer transition-colors"
//               />
//             ))}
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Your review</label>
//           <textarea
//             placeholder="Write your review here..."
//             className="w-full bg-[#191C33] border border-slate-900 text-white rounded-lg p-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//         </div>

//         <div className="grid md:grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-sm font-medium mb-2">Name *</label>
//             <input
//               type="text"
//               className="w-full bg-[#191C33] border border-slate-900 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-2">Email *</label>
//             <input
//               type="email"
//               className="w-full bg-[#191C33] border border-slate-900 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
//         </div>

//         <div className="flex items-center gap-2 mb-6">
//           <input
//             type="checkbox"
//             id="save-info"
//             className="w-4 h-4 text-blue-600 bg-slate-800 border-slate-700 rounded focus:ring-blue-500"
//           />
//           <label htmlFor="save-info" className="text-sm text-slate-400">
//             Save my name, email, and website in this browser for the next time I comment.
//           </label>
//         </div>

//         <button className="bg-[#1D50A3] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-900 transition-colors ">
//           Submit
//         </button>

//         {/* User Review */}
//         <div className="mt-8 p-6  rounded-lg">
//           <div className="flex items-start gap-4">
//             <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
//               <Image
//                 src={review01}
//                 alt="John Doe"
//                 width={48}
//                 height={48}
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex-1">
//               <div className="flex items-center gap-2 mb-2">
//                 <h4 className="font-semibold">John Doe</h4>
//                 <span className="text-slate-400 text-sm">March 15, 2024</span>
//               </div>
//               <div className="flex items-center gap-1 mb-3">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star
//                     key={star}
//                     className={`w-4 h-4 ${star <= 5 ? "fill-[#1D50A3] text-[#1D50A3]" : "text-slate-600"}`}
//                   />
//                 ))}
//               </div>
//               <p className="text-slate-300 leading-relaxed">
//                 John Wick Chapter 4 is a non-stop thrill ride packed with jaw-dropping action and breathtaking visuals.
//                 The film masterfully expands the Wick universe while maintaining relentless intensity with stunning
//                 choreography and standout performances.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

     
//     </div>
//   )
// }

