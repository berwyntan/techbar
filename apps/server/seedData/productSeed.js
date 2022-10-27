const productSeed = [
    {
        name: "Apple MacBook Pro 16-inch",
        images: ["https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg"],
        price: 4699,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "635a8841fc0314c05b13fac6"
    },
    {
        name: "Apple MacBook Air 13-inch",
        images: ["https://m.media-amazon.com/images/I/71y6KC-jJNL._AC_SL1500_.jpg"],
        price: 1299,
        description: "All-Day Battery Life — Go longer than ever with up to 18 hours of battery life depending on use.Super-fast Memory — 8GB of unified memory makes your entire system speedy and responsive. Stunning Display — With a 13.3″ Retina display, images come alive with new levels of realism. Text is sharp and clear, and colours are more vibrant. Simply Compatible — All your existing apps work, including Adobe Creative Cloud, Microsoft 365 and Google Drive. Plus you can use your favourite iPhone and iPad apps directly on macOS.",
        category: "635a8841fc0314c05b13fac6"
    },
    {
        name: "Razer Blade 14 Gaming Laptop 14-inch ",
        images: ["https://m.media-amazon.com/images/I/611VQf95rxL._AC_SL1500_.jpg"],
        price: 2999,
        description: "NVIDIA GeForce RTX 30 Series Graphics for Stunning Visuals: Built on NVIDIA’s award-winning 2nd-gen RTX architecture, these GPUs provide the most realistic ray-traced graphics and cutting-edge AI features for the most powerful graphics in a gaming laptop. Whether gaming or creating, AMD Ryzen processors offer ultimate performance: AMD Ryzen 5000 Series processors power the next generation of demanding games, providing one of a kind immersive experiences and dominate any multithreaded task like 3D and video rendering3, and software compiling. Next-gen Displays to Meet Your Needs: 165Hz QHD display for the best of both worlds in fast gaming and ultra clear display. Vapor Chamber Cooling for Maximized Thermal Performance: The laptop quietly and efficiently dissipates heat through the evaporation and condensation of an internal fluid, keeping it running smoothly and coolly even under intense loads. Customizable RGB Individual Key Lighting: Illuminates in sync with Razer Chroma-supported peripherals and popular games with multiple lighting effects.",
        category: "635a8841fc0314c05b13fac6"
    },
    {
        name: "Acer Nitro 5 Gaming Laptop 15.6-inch",
        images: ["https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SL1500_.jpg"],
        price: 1999,
        description: `Aspect Ratio:16:9.Connectivity Technology: HDMI,USB,Ethernet,WiFi,Bluetooth. Dominate the Game: With the 10th Gen Intel Core i5-10300H processor, your Nitro 5 is packed with incredible power for all your games
        RTX, It's On: The latest NVIDIA GeForce RTX 3050 (4GB dedicated GDDR6 VRAM) is powered by award-winning architecture with new Ray Tracing Cores, Tensor Cores, and streaming multiprocessors support DirectX 12 Ultimate for the ultimate gaming performance. Visual Intensity: Explore game worlds in Full HD detail on the 15.6" widescreen LED-backlit IPS display with 1920 x 1080 resolution, 144Hz refresh rate and 80% screen-to-body, 16:9 aspect ratio
        Internal Specifications: 8GB DDR4 2933MHz Memory (2 DDR4 Slots Total, Maximum 32GB); 256GB NVMe SSD (2 x PCIe M.2 Slots, 1 x 2.5" Hard Drive Bay Available). 
        Prioritize Your Gameplay: Killer Ethernet E2600 and Intel Wi-Fi 6 AX201 gives you an edge online by taking control of your network and prioritizing your gameplay
        Stay Cool Under Pressure: When heavy use requires an added boost, Acer CoolBoost technology increases fan speed by 10% and CPU, GPU cooling by 9% compared to auto mode, overall increasing thermal performance by 25% for better gaming comfort. `,
        category: "635a8841fc0314c05b13fac6"
    },
    {
        name: "2022 Lenovo Ideapad 3 Laptop, 15.6-inch",
        images: ["https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_SL1352_.jpg"],
        price: 4699,
        description: 'Memory is 8GB high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once. Hard Drive is 256GB PCIe Solid State Drive which allows to fast bootup and data transfer. 11th Gen Intel Core i3-1115G4 Dual-Core 3.0GHz Processor (6MB Intel Smart Cache, up to 4.10GHz) Intel UHD Graphics. 15.6" HD Touchscreen (1366 x 768) Display. 2 x USB 3.2 Gen 1 Type-A, 1 x USB 2.0 Type-A, 1 x HDMI, 1 x Combination Audio Jack, 1 x Multi-format SD Media Card Reader, Wireless-AC Wi-Fi 5 + Bluetooth Combo. Windows 11 Home.',
        category: "635a8841fc0314c05b13fac6"
    },
    {
        name: "Apple iMac 24-inch",
        images: ["https://m.media-amazon.com/images/I/61p-ADlugUS._AC_SL1500_.jpg"],
        price: 2499,
        description: `"Immersive 24-inch 4.5K Retina display with P3 wide colour gamut and 500 nits of brightness
        Apple M1 chip delivers powerful performance with 8-core CPU and 8-core GPU
        Strikingly thin 11.5 mm design in vibrant colours
        1080p FaceTime HD camera with M1 ISP for amazing video quality
        Studio-quality three-mic array for crystal clear calls and voice recordings
        Six-speaker sound system for a remarkably robust and high-quality audio experience
        Up to 512GB of ultrafast SSD storage
        Two Thunderbolt / USB 4 ports and up to two USB 3 ports
        Ultrafast Wi-Fi 6 and Bluetooth 5.0 wireless
        Colour-matched Magic Mouse with Magic Keyboard or Magic Keyboard with Touch ID"`,
        category: "635a8841fc0314c05b13fac7"
    },
    {
        name: "BenQ GW2485TC 24-inch  Ergonomic Computer Monitor",
        images: ["https://m.media-amazon.com/images/I/510IzIQCYyL._AC_SL1000_.jpg"],
        price: 369,
        description: "24” Full HD IPS widescreen with 1920 x 1080 resolution, 250 nits of brightness, built-in speakers and noise cancellation mic. Integrated noise cancelling mic lets you hear clearly, even with background noise. Ultra-slim bezel for virtually seamless multi-panel configurations for extended view; space-saving base; elegant design for home office; integrated cable management hides clutter; VESA wall mountable. Proprietary Brightness Intelligence adaptive technology adjusts brightness for comfortable viewing; low blue light and -free technology prevent headaches and eye strain and deliver optimized images that are easy on your eyes. Easily adjust height, tilt, swivel and pivot.",
        category: "635a8841fc0314c05b13fac7"
    },
    {
        name: "Dell S2721QS 4K 27-inch Ultra-Thin Bezel Monitor",
        images: ["https://m.media-amazon.com/images/I/71Wi1KtsGUS._AC_SL1500_.jpg"],
        price: 579,
        description: `"The three-sided ultrathin bezel design in 4K UHD (3840 x 2160) resolution lets you enjoy immersive viewing in incredible clarity and fine detail with 4 times the resolution of Full HD. Supports HDR content. Brilliant from every angle: In-Plane Switching (IPS) technology together with 99% sRGB color coverage lets you see extraordinary colors across a wide viewing angle. Smooth, tear-free experience with AMD FreeSync technology. Easy on the eyes: This TÜV-certified monitor has a flicker-free screen with ComfortView, a feature that reduces harmful blue light emissions. It’s designed to optimize eye comfort even over extended viewing – like your next movie marathon.
        Beautiful look: Modern, elegant design with a subtle textured pattern at the back of the monitor has its own unique look. It brings the feeling of a harmonious blend of great style and quality into every living space."`,
        category: "635a8841fc0314c05b13fac7"
    },
    {
        name: "Sceptre 30-inch Curved Gaming Monitor",
        images: ["https://m.media-amazon.com/images/I/612RvBYr4fL._AC_SL1417_.jpg"],
        price: 670,
        description: `"30"" Curved Gaming Monitor 2560 x 1080 Full HD Resolution. Response Time- 5ms GTG.Aspect Ratio: 21:9. Viewing Angle is 170° (H) / 170° (V). Brightness(typ) is 250. Without Stand (W x H x D)-27.82 x 12.64 x 3.69 inches
        DP Up to 200Hz Refresh Rate / HDMI 2. 0 Up to 120Hz Refresh Rate: More than double the standard refresh rate, 200Hz gives gamers an edge in visibility as frames transition instantly, leaving behind no blurred images
        AMD Free Sync With Free Sync, gamers now enjoy smooth video and seamless on the spot movement through their fast paced games. FPS-RTS FPS and RTS are Scepter's custom set display settings built for an enhanced gaming experience. Blue Light Shift Reduce your monitors blue light to protect you from eye fatigue, irritation and strains. 
        Using the VESA wall mount pattern, easily mount your Scepter LED monitor on the wall in a manner that is both aesthetically pleasing and conveniently practical. "`,
        category: "635a8841fc0314c05b13fac7"
    },
    {
        name: "SAMSUNG LC34H890WGEXXS 34-inch Curved Monitor",
        images: ["https://m.media-amazon.com/images/I/51JvCYEq6IL._AC_SL1000_.jpg"],
        price: 845,
        description: "The 34’’ ultra-wide curved monitor CH890 is ideal for multi-taskers who need more on-screen space for their big ideas but want to do away with the hassle of dual-monitor setups. With its ultra-wide display, you can experience truly seamless single-monitor multitasking. Convenient connectivity – USB type C. Efficiency with Picture-in-Picture function and Easy Setting Box Software. Ultra WQHD resolution brings an ultra-wide gaming space with lifelike detail. The CH890 has a screen resolution of 3440x1440—more than 2 times the pixel density of Full HD — that delivers razor-sharp images. You can see more details at a glance and have a panoptic view of large web pages and documents with less scrolling and zooming. Display size: 34 inches.",
        category: "635a8841fc0314c05b13fac7"
    },
    {
        name: "Apple iPhone 13 Pro Max (128GB) - Sierra Blue",
        images: ["https://m.media-amazon.com/images/I/61DsnI6STWL._AC_SL1500_.jpg"],
        price: 1799,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "Samsung Galaxy S22+ 5G Smartphone, Green",
        images: ["https://m.media-amazon.com/images/I/811ST1YopeL._AC_SL1500_.jpg"],
        price: 1299,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "Samsung Galaxy Z Fold 4 , 512GB + 5G  Cell Phone, Gold",
        images: ["https://m.media-amazon.com/images/I/71DhIuzEemL._AC_SL1500_.jpg"],
        price: 2499,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "Motorola Razr 5G, 256GB 48MP Camera,  Blush Gold",
        images: ["https://m.media-amazon.com/images/I/616heU5ABBL._AC_SL1500_.jpg"],
        price: 1289,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "OnePlus Nord N200 5G  Android Smartphone, Blue Quantum",
        images: ["https://m.media-amazon.com/images/I/71DCZOdq92S._AC_SL1500_.jpg"],
        price: 399,
        description: "5G Enabled (5G service only available on T-Mobile and Google Fi) - Powered by the latest Qualcomm 5G chipset, the OnePlus Nord N200 5G allows you to download or stream your favorite TV shows, connect with your social media, and play online multiplayer at blazing fast speeds.Optical sensor resolution:12 megapixels.Maximum display resolution:2400 x 1080 pixels.Display Type:LCD . 6.49” Full HD+ LCD Display, 90Hz Smooth Display - Immerse yourself in all your favorite movies, TV shows, and video games with N200 5G’s 6.49” crystal clear Full HD+ display. 90Hz Smooth Display - The 90Hz refresh rate refreshes 50% faster than standard 60Hz displays, ensuring smooth navigation and scrolling across the home screen and your applications. Large 5000mAh battery - The OnePlus Nord N200 5G is powered by a massive 5000mAh battery, providing all the power required to get you through the day. 18W Fast Charging - The N200 5G’s 18W fast charging gets you refilled and back on your feet quickly. 4GB RAM + 64GB built-in storage (expandable up to 256GB) - The OnePlus Nord N200 5G packs all the performance power and storage you’ll need to run and store your favorite content. 4GB of RAM ensures your applications and content run smoothly, making for a seamless, customizable, and enjoyable mobile experience. The 64GB of built-in storage ensures you can have all your favorite films, TV shows, games, and photos with you on the go. Need more storage Expand it by up to 256GB with a microSD card. 13MP Triple Camera System - It’s easy to capture every moment with clarity thanks to the 13MP main camera.",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "Apple MacBook Pro 16-inch",
        images: ["https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg"],
        price: 4699,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "Apple MacBook Pro 16-inch",
        images: ["https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg"],
        price: 4699,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "Apple MacBook Pro 16-inch",
        images: ["https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg"],
        price: 4699,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "Apple MacBook Pro 16-inch",
        images: ["https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg"],
        price: 4699,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "Apple MacBook Pro 16-inch",
        images: ["https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg"],
        price: 4699,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "Apple MacBook Pro 16-inch",
        images: ["https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg"],
        price: 4699,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "Apple MacBook Pro 16-inch",
        images: ["https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg"],
        price: 4699,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "Apple MacBook Pro 16-inch",
        images: ["https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg"],
        price: 4699,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "Apple MacBook Pro 16-inch",
        images: ["https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg"],
        price: 4699,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "Apple MacBook Pro 16-inch",
        images: ["https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg"],
        price: 4699,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "Apple MacBook Pro 16-inch",
        images: ["https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg"],
        price: 4699,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },
    {
        name: "Apple MacBook Pro 16-inch",
        images: ["https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg"],
        price: 4699,
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
        category: "63563de2d682c41a2dad9393"
    },

]
module.exports = productSeed