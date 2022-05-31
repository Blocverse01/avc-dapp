import diamondHead1 from "./collectionImages/diamond-head1.png";
import diamondHead2 from "./collectionImages/diamond-head2.png";
import diamondHead3 from "./collectionImages/diamond-head3.png";
import fresco1 from "./collectionImages/fresco1.png";
import fresco2 from "./collectionImages/fresco2.png";
import fresco3 from "./collectionImages/fresco3.png";
import fresco4 from "./collectionImages/fresco4.png";
import fresco5 from "./collectionImages/fresco5.png";
import fresco6 from "./collectionImages/fresco6.png";

export const collections = [{
    id: "leriq", title: "LeriQ", group: [{
        name: "DiamondHeads Collection", items: [
            { image: diamondHead1, title: "" }, { image: diamondHead3, title: "" },
            { image: diamondHead3, title: "" }]
    }, {
        name: "LeriQ EP", items: [
            { image: diamondHead1, title: "Song Title" }, { image: diamondHead3, title: "Song Title" },
            { image: diamondHead2, title: "Song Title" }
        ]
    }]
}, {
    id: "avc-collection", title: "AVC Collection", group: [{
        name: "Fresco Art Collection", items: [
            { image: fresco1, title: "" }, { image: fresco2, title: "" },
            { image: fresco3, title: "" }, { image: fresco4, title: "" },
            { image: fresco5, title: "" }, { image: fresco6, title: "" }
        ]
    }]
}]