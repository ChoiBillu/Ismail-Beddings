/* =====================================================================
   PRODUCTS FILE: the only file you need to edit to update the website.
   - Add / remove / change items in `products` below.
   - Each product's "category" must match an "id" in `categories`.
   - "image": a file name or path (e.g. "images/satin-stripe.jpg") or a web URL.
              Leave it as "" to show the SI monogram tile.
   - "price": a number in PKR (e.g. 4500). Use null to show "Ask for price".
   - "time":  delivery / made-to-order time, or "" to hide it.
   ===================================================================== */

const categories = [
  { id: "cotton-bedsheets", title: "Cotton Bedsheets",      icon: "layers",     blurb: "Breathable combed cotton in crisp percale and silky sateen." },
  //{ id: "silk-polycotton",  title: "Silk Polycotton",       icon: "sparkles",   blurb: "A silky drape with the easy care and durability of a poly-cotton blend." },
  { id: "duvets",           title: "Duvets & Quilt Covers", icon: "bed-double", blurb: "Quilt covers and duvet sets for every season." },
  //{ id: "bridal",           title: "Bridal & Luxury",       icon: "gem",        blurb: "Embroidered and jacquard suites for the most memorable celebrations." },
  //{ id: "pillows",          title: "Shams & Pillows",       icon: "square",     blurb: "Pillows, shams and cushion covers to finish the bed." }
];

const products = [
  {
    id: "IB-MS01",
    category: "cotton-bedsheets",
    name: "Cotton Bedsheet",
    image: "WhatsApp Image 2026-10-20 at 9.02.46 PM.jpeg",
    badges: ["Most Selling"],
    price: 1899,
    time: "",
    desc: "Crisp, breathable, and silky smooth hotel-stripe bedsheet complete with two matching tailored pillowcases."
  },
  {
    id: "IB-MS02",
    category: "cotton-bedsheets",
    name: "Cotton Bedsheet",
    image: "WhatsApp Image 2026-10-20 at 9.02.47 PM (1).jpeg",
    badges: ["Most Selling"],
    price: 1899,
    time: "",
    desc: "A cool, matte-finish everyday sheet that stays fresh through Faisalabad summers."
  },
  {
    id: "IB-PR03",
    category: "cotton-bedsheets",
    name: "Cotton Bedsheet",
    image: "WhatsApp Image 2026-10-20 at 9.02.47 PM.jpeg",
    //badges: ["180 Thread Count", "Cotton", "Fitted / Flat"],
    price: 1899,
    time: "",
    desc: "Colourfast floral and geometric prints with two matching pillowcases."
  },
  {
    id: "IB-ST01",
    category: "cotton-bedsheets",
    name: "Cotton Bedsheet",
    image: "WhatsApp Image 2026-10-20 at 9.02.48 PM (1).jpeg",
    //badges: ["500 Thread Count", "100% Combed Cotton", "Fitted / Flat"],
    price: 1899,
    time: "",
    desc: "Crisp, breathable, and silky smooth hotel-stripe bedsheet complete with two matching tailored pillowcases."
  },
 
  {
    id: "IB-QC04",
    category: "duvets",
    name: "Pure Linen-Wash Quilt Cover",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&q=80",
    badges: ["All-Season Weave", "Percale", "With Corner Ties"],
    price: null,
    time: "",
    desc: "Enzyme-washed for effortless softness from night one. Features interior corner ribbons and concealed button closures."
  },
  {
    id: "IB-QC05",
    category: "duvets",
    name: "Reversible Duvet Cover Set",
    image: "",
    badges: ["Reversible", "Cotton", "Button Closure"],
    price: null,
    time: "",
    desc: "Two looks in one: flip between a solid and a printed face."
  },
  {
    id: "IB-QC06",
    category: "duvets",
    name: "Hotel-Stripe Duvet Cover",
    image: "",
    badges: ["Hotel Stripe", "Cotton Sateen", "Zip Closure"],
    price: null,
    time: "",
    desc: "Classic tone-on-tone satin stripe in a hotel-grade weave."
  },
 
];

/* ---------- SIZE GUIDE DATA (all measurements in inches) ----------
   flat = flat sheet [width, length]     bed = mattress [width, length]
   depth = mattress depth (fitted pocket) pc = pillowcase [w, l]
   duvet = duvet cover [w, l]             pillows = pillowcases in a set  */
const SIZES = {
  "Single":     { flat: [66, 100],  bed: [39, 75], depth: 10, pillows: 1, pc: [20, 30], duvet: [60, 80] },
  "Double":     { flat: [90, 100],  bed: [54, 75], depth: 10, pillows: 2, pc: [20, 30], duvet: [80, 90] },
  "Queen":      { flat: [90, 108],  bed: [60, 80], depth: 12, pillows: 2, pc: [20, 30], duvet: [90, 95] },
  "King":       { flat: [108, 108], bed: [72, 80], depth: 12, pillows: 2, pc: [20, 36], duvet: [104, 94] },
  "Super King": { flat: [120, 110], bed: [84, 84], depth: 14, pillows: 2, pc: [20, 36], duvet: [108, 98] }
};

/* Fabric weight in grams per square metre, used to estimate piece weights in grams. */
const GSM = { "Cotton Percale": 110, "Cotton Sateen": 135, "Silk Polycotton": 105 };
