import React from "react";

export default function FilterBar() {
  return (
    <div>
      <section className="filterBar h-72 bg-red-900 flex">
        <div className="filterBar__title">
          <h1>Find your best movie Today</h1>
        </div>
        <div className="filterBar__filter">
          <div className="chip__1">New Movies</div>
          <div className="chip__2">Best Ratings</div>
          <div className="chip__3">Last Add</div>
        </div>
      </section>
    </div>
  );
}
