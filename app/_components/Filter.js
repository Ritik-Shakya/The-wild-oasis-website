"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex ">
      <button
        className={`px-5 py-2 hover:bg-primary-500 ${
          activeFilter === "all" ? "bg-primary-700 text-primary-50" : ""
        }`}
        onClick={() => handleFilter("all")}
      >
        All Cabins
      </button>
      <button
        className={`px-5 py-2 hover:bg-primary-500 ${
          activeFilter === "small" ? "bg-primary-700 text-primary-50" : ""
        }`}
        onClick={() => handleFilter("small")}
      >
        1&mdash;3 guests
      </button>
      <button
        className={`px-5 py-2 hover:bg-primary-500 ${
          activeFilter === "medium" ? "bg-primary-700 text-primary-50" : ""
        }`}
        onClick={() => handleFilter("medium")}
      >
        4&mdash;7 guests
      </button>
      <button
        className={`px-5 py-2 hover:bg-primary-500 ${
          activeFilter === "large" ? "bg-primary-700 text-primary-50" : ""
        }`}
        onClick={() => handleFilter("large")}
      >
        8&mdash;12 guests
      </button>
    </div>
  );
}

export default Filter;
