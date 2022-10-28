const orderSeed = [
    {
        shippingInfo: {
            address: "3 Green Ave #05-03",
            city: "Denver",
            state: "Wyoming",
            country: "USA",
            pinCode: "47589",
            phoneNo: "8739578085"
        },
        orderItems: [
            {
                name: "Apple MacBook Air 13-inch",
                quantity: "2",
                price: "1299",
                image: "https://m.media-amazon.com/images/I/71y6KC-jJNL._AC_SL1500_.jpg",
                product: "635b844ba52d3d3a64446f20"
            },
            {
                name: "SAMSUNG LC34H890WGEXXS 34-inch Curved Monitor",
                quantity: "3",
                price: "845",
                image: "https://m.media-amazon.com/images/I/51JvCYEq6IL._AC_SL1000_.jpg",
                product: "635b844ba52d3d3a64446f28"
            },
            {
                name: "HP LaserJet Monochrome Laser Printer",
                quantity: "1",
                price: "108",
                image: "https://m.media-amazon.com/images/I/41BPAfTYu1L._AC_.jpg",
                product: "635b844ba52d3d3a64446f2f"
            },
        ],
        user: "635b8292b133ee23042c5454"
    },
    {
        shippingInfo: {
            address: "1044 Hunley Waters Circle",
            city: "North Charleston",
            state: "Sacramento",
            country: "USA",
            pinCode: "29405",
            phoneNo: "57399399"
        },
        orderItems: [
            {
                name: "Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens , Black",
                quantity: "1",
                price: "879",
                image: "https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg",
                product: "635b82adb133ee23042c545c"
            },
            {
                name: "Apple MacBook Pro 16-inch",
                quantity: "1",
                price: "4699",
                image: "https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg",
                product: "635b844ba52d3d3a64446f1f"
            }
        ],
        user: "635b8292b133ee23042c5455"
    },
]

module.exports = orderSeed