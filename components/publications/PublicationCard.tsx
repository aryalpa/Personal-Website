// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Copy,
//   Calendar,
//   BookOpen,
// } from "lucide-react";

// import { urlFor } from "@/sanity/image";
// import type { Publication } from "@/types/publication";

// interface Props {
//   publication: Publication;
// }

// export default function PublicationCard({ publication }: Props) {
//   const copyCitation = async () => {
//     const citation = `${publication.authors} (${publication.year}). ${publication.title}. ${publication.journal}`;

//     await navigator.clipboard.writeText(citation);
//     alert("Citation copied!");
//   };

//   return (
//     <motion.article
//       whileHover={{ y: -8 }}
//       transition={{ duration: 0.25 }}
//       className="
//         group
//         relative
//         overflow-hidden
//         rounded-3xl
//         border
//         border-[var(--border)]
//         bg-[var(--card)]
//         shadow-[0_10px_30px_rgba(47,52,47,0.08)]
//         transition-all
//         hover:shadow-[0_20px_45px_rgba(47,52,47,0.15)]
//       "
//     >
//       {/* Accent Line */}

//       <div
//         className="
//           absolute
//           left-0
//           top-0
//           h-full
//           w-1
//           bg-transparent
//           transition-all
//           duration-300
//           group-hover:bg-[var(--accent)]
//         "
//       />

//       <div className="grid gap-10 p-10 lg:grid-cols-[120px_1fr]">

//         {/* Left Year */}

//         <div className="flex flex-col items-center">

//           <div
//             className="
//               rounded-2xl
//               bg-[var(--primary)]
//               px-6
//               py-5
//               text-center
//               text-white
//               shadow-lg
//             "
//           >
//             <Calendar size={20} className="mx-auto mb-2" />

//             <p className="text-3xl font-bold">
//               {publication.year}
//             </p>

//           </div>

//           <span
//             className="
//               mt-4
//               rounded-full
//               bg-[var(--secondary)]
//               px-4
//               py-1
//               text-xs
//               font-semibold
//               uppercase
//               tracking-wider
//               text-[var(--primary)]
//             "
//           >
//             {publication.type}
//           </span>

//         </div>

//         {/* Right Content */}

//         <div className="grid gap-8 lg:grid-cols-[1fr_220px]">

//           {/* Left */}

//           <div>

//             <h2
//               className="
//                 text-3xl
//                 font-bold
//                 leading-tight
//                 text-[var(--text)]
//                 transition-colors
//                 group-hover:text-[var(--accent)]
//               "
//             >
//               {publication.title}
//             </h2>

//             <div className="mt-5 flex items-center gap-2 text-[var(--primary)]">

//               <BookOpen size={18} />

//               <span className="font-semibold">
//                 {publication.journal}
//               </span>

//             </div>

//             <p className="mt-4 leading-8 text-[var(--text-light)]">
//               {publication.authors}
//             </p>

//             {/* Keywords */}

//             <div className="mt-6 flex flex-wrap gap-2">

//               {publication.keywords.map((keyword) => (

//                 <span
//                   key={keyword}
//                   className="
//                     rounded-full
//                     bg-[var(--secondary)]
//                     px-4
//                     py-2
//                     text-sm
//                     text-[var(--text-light)]
//                   "
//                 >
//                   {keyword}
//                 </span>

//               ))}

//             </div>

//             {/* Buttons */}

//             <div className="mt-8 flex flex-wrap gap-4">

//               <Link
//                 href={publication.link}
//                 target="_blank"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   bg-[var(--primary)]
//                   px-6
//                   py-3
//                   font-medium
//                   text-white
//                   transition-all
//                   hover:-translate-y-1
//                   hover:bg-[var(--accent)]
//                 "
//               >
//                 Read Paper

//                 <ArrowRight size={18} />
//               </Link>

//               <button
//                 onClick={copyCitation}
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-[var(--border)]
//                   px-6
//                   py-3
//                   font-medium
//                   transition-all
//                   hover:border-[var(--accent)]
//                   hover:text-[var(--accent)]
//                 "
//               >
//                 <Copy size={18} />

//                 Copy Citation
//               </button>

//             </div>

//           </div>

//           {/* Right Image */}

//           <div className="flex justify-center lg:justify-end">

//             {publication.image && (

//               <div
//                 className="
//                   relative
//                   h-64
//                   w-52
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-[var(--border)]
//                   bg-white
//                   shadow-md
//                 "
//               >
//                 <Image
//                   src={urlFor(publication.image).url()}
//                   alt={publication.title}
//                   fill
//                   unoptimized
//                   className="object-contain p-3"
//                 />
//               </div>

//             )}

//           </div>

          

//         </div>

//       </div>

//     </motion.article>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Copy,
  Calendar,
  BookOpen,
  FileText,
} from "lucide-react";

import { urlFor } from "@/sanity/image";
import type { Publication } from "@/types/publication";

interface Props {
  publication: Publication;
}

export default function PublicationCard({ publication }: Props) {
  const copyCitation = async () => {
    const citation = `${publication.authors} (${publication.year}). ${publication.title}. ${publication.journal}`;

    await navigator.clipboard.writeText(citation);
    alert("Citation copied!");
  };

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        shadow-[0_10px_30px_rgba(47,52,47,0.08)]
        transition-all
        hover:shadow-[0_20px_45px_rgba(47,52,47,0.15)]
      "
    >
      {/* Accent Line */}

      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-1
          bg-transparent
          transition-all
          duration-300
          group-hover:bg-[var(--accent)]
        "
      />

      <div className="grid gap-5 p-4 sm:gap-8 sm:p-8 lg:grid-cols-[120px_1fr] lg:gap-10 lg:p-10">

        {/* Left Year */}

        <div className="flex items-center justify-center gap-3 lg:flex-col lg:gap-0">

          <div
            className="
              rounded-xl
              bg-[var(--primary)]
              px-4
              py-3
              text-center
              text-white
              shadow-lg
              lg:rounded-2xl
              lg:px-5
              lg:py-4
            "
          >
            <Calendar className="mx-auto mb-1 h-4 w-4 lg:mb-2 lg:h-5 lg:w-5" />

            <p className="text-lg font-bold sm:text-xl lg:text-3xl">
              {publication.year}
            </p>

          </div>

          <span
            className="
              rounded-full
              bg-[var(--secondary)]
              px-3
              py-1
              text-[11px]
              font-semibold
              uppercase
              tracking-wider
              text-[var(--primary)]
              lg:mt-4
              lg:px-4
              lg:text-xs
            "
          >
            {publication.type}
          </span>

        </div>

        {/* Right Content */}

        <div className="grid gap-8 lg:grid-cols-[1fr_220px]">

          {/* Left */}

          <div>

            <h2
              className="
                text-xl
                font-bold
                leading-tight
                text-[var(--text)]
                transition-colors
                group-hover:text-[var(--accent)]
                sm:text-2xl
                lg:text-3xl
              "
            >
              {publication.title}
            </h2>

            <div className="mt-4 flex items-start gap-2 text-sm text-[var(--primary)] sm:text-base lg:mt-5">

              <BookOpen size={18} className="mt-1 shrink-0" />

              <span className="font-semibold">
                {publication.journal}
              </span>

            </div>

            <p className="mt-3 text-sm leading-6 text-[var(--text-light)] sm:text-base sm:leading-7 lg:mt-4 lg:leading-8">
              {publication.authors}
            </p>

            {/* Keywords */}

            <div className="mt-6 flex flex-wrap gap-2">

              {publication.keywords.map((keyword) => (

                <span
                  key={keyword}
                  className="
                    rounded-full
                    bg-[var(--secondary)]
                    px-4
                    py-2
                    text-xs
                    text-[var(--text-light)]
                    sm:text-sm
                  "
                >
                  {keyword}
                </span>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-8 lg:gap-4">

              <Link
                href={publication.link}
                target="_blank"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[var(--primary)]
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  hover:-translate-y-1
                  hover:bg-[var(--accent)]
                "
              >
                Read Paper

                <ArrowRight size={18} />
              </Link>

              <button
                onClick={copyCitation}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[var(--border)]
                  px-6
                  py-3
                  text-sm
                  font-medium
                  transition-all
                  hover:border-[var(--accent)]
                  hover:text-[var(--accent)]
                "
              >
                <Copy size={18} />

                Copy Citation
              </button>

            </div>

          </div>

          {/* Right Image — fixed box, never affects card size */}

          <div className="flex justify-center lg:justify-end">

            <div
              className="
                relative
                h-44
                w-full
                max-w-52
                shrink-0
                overflow-hidden
                rounded-2xl
                border
                border-[var(--border)]
                bg-white
                shadow-md
                flex
                items-center
                justify-center
                sm:h-56
                lg:h-64
              "
            >
              {publication.image ? (
                <Image
                  src={urlFor(publication.image).url()}
                  alt={publication.title}
                  fill
                  unoptimized
                  sizes="208px"
                  className="object-contain p-3"
                />
              ) : (
                <FileText
                  size={40}
                  className="text-[var(--text-light)] opacity-30"
                />
              )}
            </div>

          </div>

        </div>

      </div>

    </motion.article>
  );
}
