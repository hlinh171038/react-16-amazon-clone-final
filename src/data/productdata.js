const products =[
    {
        id:"12321341",
        title:"The learnt start up - book ",
        price:23000,
        rating:5,
        image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
        amount:1,
        catagory:"book"
    },
    {
        id:"49538090",
        title:"Kenwood kMix Stand Mixer for Baking",
        price:450000,
        rating:5,
        image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
        amount:1,
        catagory:"kitchen"
    },
    {
        id:"49538091",
        title:"Apple watch - technical watch for teenager",
        price:12000000,
        rating:4,
        image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
        amount:1,
        catagory:'technical'
    },
    {
        id:"12321342",
        title:"LG loudspeaker - 1045 w - 200g - TTNG",
        price:1200000,
        rating:5,
        image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
        amount:1,
        catagory:'technical'
    },
    {
        id:"49538093",
        title:"SteelSeries Arctis 3 Console - Stereo Wired Gaming Headset for PlayStation 5 / 4, Xbox Series X|S, Nintendo Switch, VR, Android and iOS - White",
        price:1000000,
        rating:3,
        image:"https://m.media-amazon.com/images/I/71Xcl-j5ipL._AC_UY218_.jpg",
        amount:1,
        catagory:'technical'
    },
    {
        id:"49538095",
        title:"Ipad Pro 9 - Apple - White - 128Gb - not home button",
        price:11000000,
        rating:5,
        image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
        amount:1,
        catagory:'technical'
    },
    {
        id:"59538093",
        title:"earmub - soft - microphone",
        price:1200000,
        rating:3,
        image:"https://m.media-amazon.com/images/I/71waplSVO7L._AC_UY218_.jpg",
        amount:1,
        catagory:'technical'
    },
    {
        id:"59538095",
        title:"earmub for gamer - white - microphone - hot summer 2022",
        price:900000,
        rating:2,
        image:"https://m.media-amazon.com/images/I/61nnZlMLDpL._AC_UY218_.jpg",
        amount:1,
        catagory:'technical'
    },
    {
        id:"59538096",
        title:"Acer Aspire 5 A515-45-R74Z Slim Laptop | Full HD IPS | AMD Ryzen 5 5500U Hexa-Core Mobile Processor | AMD Radeon Graphics | 8GB",
        price:23000000,
        rating:2,
        image:"https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL320_.jpg",
        amount:1,
        catagory:'technical'
    },
    {
        id:"59538097",
        title:"Acer SB271 bi 27.0 Ultra-Thin Stylish Design Vision",
        price:12000000,
        rating:2,
        image:"https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg",
        amount:1,
        catagory:'technical'
    },
    {
        id:"59538011",
        title:"Earth day expression from the soul - book - skil for the happyness life",
        price:12000,
        rating:1,
        image:"https://m.media-amazon.com/images/I/614W6X88abL._AC_SY200_.jpg",
        amount:1,
        catagory:'book'
    },
    {
        id:"59538012",
        title:"More than  your thinking - book - skil for the happyness life",
        price:50000,
        rating:2,
        image:"https://m.media-amazon.com/images/I/61L8LFSGzzL._AC_SY200_.jpg",
        amount:1,
        catagory:'book'
    },
    {
        id:"59538013",
        title:"purchase the happiness - book - skil for the happyness life",
        price:78000,
        rating:5,
        image:"https://m.media-amazon.com/images/I/61oFPsryG+L._AC_SY200_.jpg",
        amount:1,
        catagory:'book'
    },
    {
        id:"59538014",
        title:"Sex you and food - book - skil for the happyness life",
        price:270000,
        rating:4,
        image:"https://m.media-amazon.com/images/I/61hnyO+82dL._AC_SY200_.jpg",
        amount:1,
        catagory:'book'
    },
    {
        id:"59538015",
        title:"friend and misfounture - book - skil for the happyness life",
        price:170000,
        rating:3,
        image:"https://m.media-amazon.com/images/I/61j5OQP2FlL._AC_SY200_.jpg",
        amount:1,
        catagory:'book'
    },
    {
        id:"59538016",
        title:"When the god speaks - book - skil for the happyness life",
        price:110000,
        rating:4,
        image:"https://m.media-amazon.com/images/I/61ji8JxZWIL._AC_SY200_.jpg",
        amount:1,
        catagory:'book'
    },
    {
        id:"59538021",
        title:"Training Recumbent Exercise Bike with Arm Exercisers",
        price:4500000,
        rating:4,
        image:"https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_UL320_.jpg",
        amount:1,
        catagory:'fitness'
    },
    {
        id:"59538022",
        title:"Cubii JR1, Under Desk Elliptical, Under Desk Bike Pedal Exerciser, Seated Elliptical",
        price:4600000,
        rating:4,
        image:"https://m.media-amazon.com/images/I/4170pRoLHEL._AC_UL320_.jpg",
        amount:1,
        catagory:'fitness'
    },
    {
        id:"59538023",
        title:"Sole Fitness Treadmill, Home Workout Treadmill with Integrated Smar",
        price:7000000,
        rating:5,
        image:"https://m.media-amazon.com/images/I/71d0LnXee5L._AC_UL320_.jpg",
        amount:1,
        catagory:'fitness'
    },
    {
        id:"59538024",
        title:"Marcy Smith Cage Machine with Workout Bench and Weight Bar Home Gym Equipment ",
        price:5500000,
        rating:5,
        image:"https://m.media-amazon.com/images/I/71Rk7mf3scL._AC_UL320_.jpg",
        amount:1,
        catagory:'fitness'
    },
];
export default products;