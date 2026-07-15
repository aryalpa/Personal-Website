"use client";

import { Search, X } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function PublicationSearch({
  search,
  setSearch,
}: Props) {
  return (
    <div className="relative mx-auto w-full max-w-3xl">

      {/* Search Icon */}

      <Search
        size={20}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search publications, authors, journals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          rounded-full
          border
          border-slate-200
          bg-white/80
          py-5
          pl-14
          pr-14
          text-lg
          text-slate-700
          shadow-lg
          backdrop-blur-xl
          outline-none
          transition-all
          duration-300
          placeholder:text-slate-400
          focus:border-emerald-500
          focus:ring-4
          focus:ring-emerald-100
        "
      />

      {/* Clear Button */}

      {search && (
        <button
          onClick={() => setSearch("")}
          className="
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            rounded-full
            p-2
            text-slate-400
            transition
            hover:bg-slate-100
            hover:text-slate-700
          "
        >
          <X size={18} />
        </button>
      )}

    </div>
  );
}