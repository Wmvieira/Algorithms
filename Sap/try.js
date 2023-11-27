const hotels = [
  {
    name: "Blue Three Miami",
    city: "Miami",
    state: "Florida",
    country: "US",
    amenities: "Free Wifi|Garden|Cleaning services|Laundry|Breakfast",
    rating: 7.3,
    reviews: "1236",
  },
  {
    name: "University Inn",
    city: "San Jose",
    state: "California",
    country: "US",
    amenities:
      "Free Wifi|Cleaning services|Bike tours|Garden|Breakfast|Parking",
    rating: 7.3,
    reviews: "5251",
  },
  {
    name: "Sunset Lodge",
    city: "Long Beach",
    state: "California",
    country: "US",
    amenities: "Parking|Cleaning services|Laundry|Garden|Breakfast",
    rating: 7.6,
    reviews: "859",
  },
  {
    name: "Four Seasons",
    city: "Orlando",
    state: "Florida",
    country: "US",
    amenities: "Parking",
    rating: 6.7,
    reviews: "1037",
  },
  {
    name: "Sleep Inn",
    city: "Austin",
    state: "Texas",
    country: "US",
    amenities: "",
    rating: 6.2,
    reviews: "none",
  },
  {
    name: "Mountain Plaza",
    city: "Denver",
    state: "Colorado",
    country: "US",
    amenities: "Cleaning services|Laundry|Garden|Breakfast|Wifi|Bike tours",
    rating: 7.8,
    reviews: "3876",
  },
];

const amenitiesArr = (h) => h.amenities.split("|");

const hotelToString = (h) => h.name;

// hotels
//   .filter((h) => h.rating > 7 && h.reviews != "none" && h.reviews > 1000)
//   .map((h) => console.log(h));

// hotels.forEach((h) => {
//   if (amenitiesArr(h).includes("Parking")) console.log(h.name);
// });

console.log(
  hotels.sort((a, b) => {
    // if (a.rating < b.rating) return 1;
    // if (a.rating > b.rating) return -1;

    const ret = a.rating - b.rating;

    if (ret < 0) return 1;
    if (ret > 0) return -1;

    // if (amenitiesArr(a).length < amenitiesArr(b).length) return 1;
    // if (amenitiesArr(a).length > amenitiesArr(b).length) return -1;

    return amenitiesArr(b).length - amenitiesArr(a).length;
  })
);
