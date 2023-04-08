import React from "react";
import "../roadmap.css";

export default function RoadMap() {
  return (
    <section>
      <div id="cd-timeline" className="cd-container">
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-movie" />
          <div className="cd-timeline-content glass-card">
            <h2>WHITELIST SALE 12th AUGUST</h2>
            <p>
            Pre Sale: 12th August 2022 at 12AM WAT (Sold Out)
            </p>
          </div>
        </div>
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-movie" />
          <div className="cd-timeline-content glass-card">
            <h2>FULL SALE (credit card) 26th AUGUST</h2>
            <p>
              The full sale of the Rough Diamonds Collection will begin on the 26th of August and will be avaliable for
              purchase on the CENT market place.
            </p>
          </div>
        </div>
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture" />
          <div className="cd-timeline-content glass-card">
            <h2>FULL SALE (crypto) 26th AUGUST</h2>
            <p>
              The Next an final phase of the Rough Diamonds Collection NFT sales will be done on the offical AVC website
              where the NFT will be bought with 70 Matic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
