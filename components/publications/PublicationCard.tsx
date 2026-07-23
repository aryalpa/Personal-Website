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
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        shadow-[0_6px_20px_rgba(47,52,47,0.07)]
        transition-all
        hover:shadow-[0_12px_28px_rgba(47,52,47,0.13)]
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

      <div className="grid gap-3 p-3 sm:p-4 lg:grid-cols-[76px_1fr] lg:gap-5 lg:p-5">

        {/* Left Year */}

        <div className="flex items-center gap-2 lg:flex-col lg:gap-0">

          <div
            className="
              rounded-lg
              bg-[var(--primary)]
              px-3
              py-2
              text-center
              text-white
              shadow-lg
              lg:w-full
              lg:px-2
              lg:py-2.5
            "
          >
            <Calendar className="mx-auto mb-0.5 h-3.5 w-3.5" />

            <p className="text-base font-bold">
              {publication.year}
            </p>

          </div>

          <span
            className="
              rounded-full
              bg-[var(--secondary)]
              px-2.5
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-wider
              text-[var(--primary)]
              lg:mt-2
              lg:max-w-full
              lg:px-2
              lg:text-center
            "
          >
            {publication.type}
          </span>

        </div>

        {/* Right Content */}

        <div className="grid gap-3 sm:grid-cols-[1fr_112px] sm:items-center lg:grid-cols-[1fr_128px] lg:gap-5">

          {/* Left */}

          <div>

            <h2
              className="
                text-base
                font-bold
                leading-tight
                text-[var(--text)]
                transition-colors
                group-hover:text-[var(--accent)]
                sm:text-lg
              "
            >
              {publication.title}
            </h2>

            <div className="mt-2 flex items-start gap-1.5 text-xs text-[var(--primary)] sm:text-sm">

              <BookOpen size={14} className="mt-0.5 shrink-0" />

              <span className="font-semibold">
                {publication.journal}
              </span>

            </div>

            <p className="mt-1.5 text-xs leading-5 text-[var(--text-light)] sm:text-sm sm:leading-5">
              {publication.authors}
            </p>

            {/* Keywords */}

            <div className="mt-2.5 flex flex-wrap gap-1.5">

              {publication.keywords.map((keyword) => (

                <span
                  key={keyword}
                  className="
                    rounded-full
                    bg-[var(--secondary)]
                    px-2.5
                    py-1
                    text-[10px]
                    text-[var(--text-light)]
                    sm:text-xs
                  "
                >
                  {keyword}
                </span>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-3 flex flex-wrap gap-2">

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
                  px-3.5
                  py-1.5
                  text-xs
                  font-medium
                  text-white
                  transition-all
                  hover:-translate-y-1
                  hover:bg-[var(--accent)]
                "
              >
                Read Paper

                <ArrowRight size={14} />
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
                  px-3.5
                  py-1.5
                  text-xs
                  font-medium
                  transition-all
                  hover:border-[var(--accent)]
                  hover:text-[var(--accent)]
                "
              >
                <Copy size={14} />

                Copy Citation
              </button>

            </div>

          </div>

          {/* Right Image — fixed box, never affects card size */}

          <div className="flex justify-center sm:justify-end">

            <div
              className="
                relative
                h-28
                w-full
                max-w-36
                shrink-0
                overflow-hidden
                rounded-xl
                border
                border-[var(--border)]
                bg-white
                shadow-md
                flex
                items-center
                justify-center
                sm:h-36
                lg:h-40
              "
            >
              {publication.image ? (
                <Image
                  src={urlFor(publication.image).url()}
                  alt={publication.title}
                  fill
                  unoptimized
                  sizes="(max-width: 639px) 144px, 128px"
                  className="object-contain p-2"
                />
              ) : (
                <FileText
                  size={28}
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
