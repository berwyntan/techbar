const {
  laptops,
  computers,
  mobilePhones,
  printers,
  cameras,
} = require("./categoryIdSeed");

const productSeed = [
  {
    name: "Apple MacBook Pro 16-inch",
    images: ["https://m.media-amazon.com/images/I/61k1h857c4L._AC_SL1500_.jpg"],
    price: 4699,
    description:
      "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
    category: laptops,
  },
  {
    name: "Apple MacBook Air 13-inch",
    images: ["https://m.media-amazon.com/images/I/71y6KC-jJNL._AC_SL1500_.jpg"],
    price: 1299,
    description:
      "All-Day Battery Life — Go longer than ever with up to 18 hours of battery life depending on use.Super-fast Memory — 8GB of unified memory makes your entire system speedy and responsive. Stunning Display — With a 13.3″ Retina display, images come alive with new levels of realism. Text is sharp and clear, and colours are more vibrant. Simply Compatible — All your existing apps work, including Adobe Creative Cloud, Microsoft 365 and Google Drive. Plus you can use your favourite iPhone and iPad apps directly on macOS.",
    category: laptops,
  },
  {
    name: "Razer Blade 14 Gaming Laptop 14-inch ",
    images: ["https://m.media-amazon.com/images/I/611VQf95rxL._AC_SL1500_.jpg"],
    price: 2999,
    description:
      "NVIDIA GeForce RTX 30 Series Graphics for Stunning Visuals: Built on NVIDIA’s award-winning 2nd-gen RTX architecture, these GPUs provide the most realistic ray-traced graphics and cutting-edge AI features for the most powerful graphics in a gaming laptop. Whether gaming or creating, AMD Ryzen processors offer ultimate performance: AMD Ryzen 5000 Series processors power the next generation of demanding games, providing one of a kind immersive experiences and dominate any multithreaded task like 3D and video rendering3, and software compiling. Next-gen Displays to Meet Your Needs: 165Hz QHD display for the best of both worlds in fast gaming and ultra clear display. Vapor Chamber Cooling for Maximized Thermal Performance: The laptop quietly and efficiently dissipates heat through the evaporation and condensation of an internal fluid, keeping it running smoothly and coolly even under intense loads. Customizable RGB Individual Key Lighting: Illuminates in sync with Razer Chroma-supported peripherals and popular games with multiple lighting effects.",
    category: laptops,
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
    category: laptops,
  },
  {
    name: "2022 Lenovo Ideapad 3 Laptop, 15.6-inch",
    images: ["https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_SL1352_.jpg"],
    price: 4699,
    description:
      'Memory is 8GB high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once. Hard Drive is 256GB PCIe Solid State Drive which allows to fast bootup and data transfer. 11th Gen Intel Core i3-1115G4 Dual-Core 3.0GHz Processor (6MB Intel Smart Cache, up to 4.10GHz) Intel UHD Graphics. 15.6" HD Touchscreen (1366 x 768) Display. 2 x USB 3.2 Gen 1 Type-A, 1 x USB 2.0 Type-A, 1 x HDMI, 1 x Combination Audio Jack, 1 x Multi-format SD Media Card Reader, Wireless-AC Wi-Fi 5 + Bluetooth Combo. Windows 11 Home.',
    category: laptops,
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
    category: computers,
  },
  {
    name: "BenQ GW2485TC 24-inch  Ergonomic Computer Monitor",
    images: ["https://m.media-amazon.com/images/I/510IzIQCYyL._AC_SL1000_.jpg"],
    price: 369,
    description:
      "24” Full HD IPS widescreen with 1920 x 1080 resolution, 250 nits of brightness, built-in speakers and noise cancellation mic. Integrated noise cancelling mic lets you hear clearly, even with background noise. Ultra-slim bezel for virtually seamless multi-panel configurations for extended view; space-saving base; elegant design for home office; integrated cable management hides clutter; VESA wall mountable. Proprietary Brightness Intelligence adaptive technology adjusts brightness for comfortable viewing; low blue light and -free technology prevent headaches and eye strain and deliver optimized images that are easy on your eyes. Easily adjust height, tilt, swivel and pivot.",
    category: computers,
  },
  {
    name: "Dell S2721QS 4K 27-inch Ultra-Thin Bezel Monitor",
    images: ["https://m.media-amazon.com/images/I/71Wi1KtsGUS._AC_SL1500_.jpg"],
    price: 579,
    description: `"The three-sided ultrathin bezel design in 4K UHD (3840 x 2160) resolution lets you enjoy immersive viewing in incredible clarity and fine detail with 4 times the resolution of Full HD. Supports HDR content. Brilliant from every angle: In-Plane Switching (IPS) technology together with 99% sRGB color coverage lets you see extraordinary colors across a wide viewing angle. Smooth, tear-free experience with AMD FreeSync technology. Easy on the eyes: This TÜV-certified monitor has a flicker-free screen with ComfortView, a feature that reduces harmful blue light emissions. It’s designed to optimize eye comfort even over extended viewing – like your next movie marathon.
        Beautiful look: Modern, elegant design with a subtle textured pattern at the back of the monitor has its own unique look. It brings the feeling of a harmonious blend of great style and quality into every living space."`,
    category: computers,
  },
  {
    name: "Sceptre 30-inch Curved Gaming Monitor",
    images: ["https://m.media-amazon.com/images/I/612RvBYr4fL._AC_SL1417_.jpg"],
    price: 670,
    description: `"30"" Curved Gaming Monitor 2560 x 1080 Full HD Resolution. Response Time- 5ms GTG.Aspect Ratio: 21:9. Viewing Angle is 170° (H) / 170° (V). Brightness(typ) is 250. Without Stand (W x H x D)-27.82 x 12.64 x 3.69 inches
        DP Up to 200Hz Refresh Rate / HDMI 2. 0 Up to 120Hz Refresh Rate: More than double the standard refresh rate, 200Hz gives gamers an edge in visibility as frames transition instantly, leaving behind no blurred images
        AMD Free Sync With Free Sync, gamers now enjoy smooth video and seamless on the spot movement through their fast paced games. FPS-RTS FPS and RTS are Scepter's custom set display settings built for an enhanced gaming experience. Blue Light Shift Reduce your monitors blue light to protect you from eye fatigue, irritation and strains. 
        Using the VESA wall mount pattern, easily mount your Scepter LED monitor on the wall in a manner that is both aesthetically pleasing and conveniently practical. "`,
    category: computers,
  },
  {
    name: "SAMSUNG LC34H890WGEXXS 34-inch Curved Monitor",
    images: ["https://m.media-amazon.com/images/I/51JvCYEq6IL._AC_SL1000_.jpg"],
    price: 845,
    description:
      "The 34’’ ultra-wide curved monitor CH890 is ideal for multi-taskers who need more on-screen space for their big ideas but want to do away with the hassle of dual-monitor setups. With its ultra-wide display, you can experience truly seamless single-monitor multitasking. Convenient connectivity – USB type C. Efficiency with Picture-in-Picture function and Easy Setting Box Software. Ultra WQHD resolution brings an ultra-wide gaming space with lifelike detail. The CH890 has a screen resolution of 3440x1440—more than 2 times the pixel density of Full HD — that delivers razor-sharp images. You can see more details at a glance and have a panoptic view of large web pages and documents with less scrolling and zooming. Display size: 34 inches.",
    category: computers,
  },
  {
    name: "Apple iPhone 13 Pro Max (128GB) - Sierra Blue",
    images: ["https://m.media-amazon.com/images/I/61DsnI6STWL._AC_SL1500_.jpg"],
    price: 1799,
    description: `"6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
        Pro camera system with new 12MP Telephoto, Wide, and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording. 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording. A15 Bionic chip for lightning-fast performance. Up to 28 hours of video playback, the best battery life ever in an iPhone
        Durable design with Ceramic Shield. Industry-leading IP68 water resistance.  5G for superfast downloads and high-quality streaming. Supports MagSafe accessories for easy attachment and faster wireless charging (sold separately)"`,
    category: mobilePhones,
  },
  {
    name: "Samsung Galaxy S22+ 5G Smartphone, Green",
    images: [
      "https://m.media-amazon.com/images/I/811ST1YopeL._AC_SL1500_.jpg   ",
    ],
    price: 1299,
    description: `"Dynamic AMOLED display. Impressive triple camera set up on the rear side. Powerful Samsung Exynos 2200 chipset
        4500mAh battery compatible with 45W Fast Charging
        10MP Selfie Shooter at the front. Included components: USB Cable. Operating system: Android. Connector type: USB Type C"`,
    category: mobilePhones,
  },
  {
    name: "Samsung Galaxy Z Fold 4 , 512GB + 5G  Cell Phone, Gold",
    images: [
      "https://m.media-amazon.com/images/I/71DhIuzEemL._AC_SL1500_.jpg   ",
    ],
    price: 2499,
    description: `"Free up your hands with Flex Mode on the Galaxy Z Fold4. Set up your phone in Flex Mode and check off your to-dos while catching up with friends; Hands-free video chat lets you multitask and move freely while staying in frame. Easily attend a virtual work meeting and capture important notes at the same time, or catch up on your favorite shows as you answer texts. With multiple windows, doing different tasks is easy with Galaxy Z Fold4. Transform your Galaxy Z Fold4 into a multifunctional device with S Pen; It gives you that pen-on-paper feeling and makes it easy to take notes while attending virtual meetings. App display optimization allows you to customize how you see apps on the edge-to-edge screen of Galaxy Z Fold4; Also, use multiple apps to their full potential by dragging and dropping content from one window to the other. Use your Watch to snap hands-free selfies with Flex Mode; Plus, keep track of your day by easily switching between your Galaxy Watch and phone
        Unfold connectivity with your smart phone and Buds working together. "`,
    category: mobilePhones,
  },
  {
    name: "Motorola Razr 5G, 256GB 48MP Camera,  Blush Gold",
    images: ["https://m.media-amazon.com/images/I/616heU5ABBL._AC_SL1500_.jpg"],
    price: 1289,
    description: `"Iconic, pocketable design the re invented flip phone returns with a modern twist, crafted with premium materials and a main display that folds in half. Revolutionary flexible material allows the gorgeous 6.2"" poled display to fold in half, fitting comfortably in your palm or pocket. Precision crafted metal and glass on the new razr add a thoroughly modern look to the unmistakable iconic design.
        Interactive quick view display stay connected even while the phone is closed with the 2.7"" goled display reply to messages, skip songs, get directions, and more..The 48 mp camera comes with ois and quad pixel technology so that you can capture sharper photos with 4x better low light sensitivity. 8gb ram + 256gb storage experience instant response times and ultra fast performance with 8gb of ram and 256gb of storage..All day battery + turbo charging go up to 24 hours without recharging, and then fuel up fast with turbopower..Qualcomm snapdragon 765 processor get relentless performance with the qualcomm snapdragon 765 processor. Keep running smoothly with a whopping 8gb memory. Enjoy 256gb of room for photos, music, movies, and games, and never give storage a second thought.. Memory slots available: No SD card; Connector type: USB Type C. In box: motorola razr 5g 256gb (unlocked), 15w turbopower charger, usb type c cable, 3.5mm headset jack adapter, accessory pouch, sim removal tool kit, user guide. "`,
    category: mobilePhones,
  },
  {
    name: "OnePlus Nord N200 5G  Android Smartphone, Blue Quantum",
    images: ["https://m.media-amazon.com/images/I/71DCZOdq92S._AC_SL1500_.jpg"],
    price: 399,
    description:
      "5G Enabled (5G service only available on T-Mobile and Google Fi) - Powered by the latest Qualcomm 5G chipset, the OnePlus Nord N200 5G allows you to download or stream your favorite TV shows, connect with your social media, and play online multiplayer at blazing fast speeds.Optical sensor resolution:12 megapixels.Maximum display resolution:2400 x 1080 pixels.Display Type:LCD . 6.49” Full HD+ LCD Display, 90Hz Smooth Display - Immerse yourself in all your favorite movies, TV shows, and video games with N200 5G’s 6.49” crystal clear Full HD+ display. 90Hz Smooth Display - The 90Hz refresh rate refreshes 50% faster than standard 60Hz displays, ensuring smooth navigation and scrolling across the home screen and your applications. Large 5000mAh battery - The OnePlus Nord N200 5G is powered by a massive 5000mAh battery, providing all the power required to get you through the day. 18W Fast Charging - The N200 5G’s 18W fast charging gets you refilled and back on your feet quickly. 4GB RAM + 64GB built-in storage (expandable up to 256GB) - The OnePlus Nord N200 5G packs all the performance power and storage you’ll need to run and store your favorite content. 4GB of RAM ensures your applications and content run smoothly, making for a seamless, customizable, and enjoyable mobile experience. The 64GB of built-in storage ensures you can have all your favorite films, TV shows, games, and photos with you on the go. Need more storage Expand it by up to 256GB with a microSD card. 13MP Triple Camera System - It’s easy to capture every moment with clarity thanks to the 13MP main camera.",
    category: mobilePhones,
  },
  {
    name: "Canon PIXMA MG2570S - A4 All-in-One Inkjet Color Printer",
    images: ["https://m.media-amazon.com/images/I/61hMqHB4oRL._AC_SL1500_.jpg"],
    price: 70,
    description: `"A4 All-in-One Inkjet Color Printer. Print, Scan and Copy
        Standard print speed (A4): up to 8.0 ipm black / 4.0 ipm colour
        Hi-speed USB 2.0
        Recommended monthly print volume: 10 - 80 pages
        2 Years Local (Singapore) Warranty
        Compatible Ink: CL-746/746S/746XL Series, PG-745/745S/745XL Series"`,
    category: printers,
  },
  {
    name: "HP LaserJet Monochrome Laser Printer",
    images: ["https://m.media-amazon.com/images/I/41BPAfTYu1L._AC_.jpg"],
    price: 108,
    description:
      "A4 Wi-Fi Monochrome Laser Printer with Wi-Fi & Wi-Fi Direct. Prints up to 20.0ppm (Black draft). Maximum printing resolution: 600 x 600 dpi. 1 Hi-Speed USB 2.0; 2.4GHz Wireless 802.11b/g/n with Bluetooth; Compatible Ink: 150A.",
    category: printers,
  },
  {
    name: "Epson EcoTank Wi-Fi Duplex Printer",
    images: ["https://m.media-amazon.com/images/I/61dofhsmLSL._AC_SL1500_.jpg"],
    price: 399,
    description: `"A4 Wi-Fi Duplex All-in-One Ink Tank Printer with Wi-Fi & Wi-Fi Direct. Print, scan and copy. Up to 15ppm/33ppm (Color draft / Black draft). Up to 5.0ppm/10.5ppm (Color ISO / Black ISO. Maximum printing resolution: 5760 x 1440 dpi / Scanning optical resolution 1200 x 2400 dpi, 1 Hi-Speed USB 2.0 + Wi-Fi IEEE 802.11b/g/n, Wi-Fi Direct
        Compatible with Apple Airprint and Mopria Print Service
        Compatible Ink: 001."`,
    category: printers,
  },
  {
    name: "Brother MFC-J2340DW - A3 All-in-One Color Ink Cartridge Printer.",
    images: ["https://m.media-amazon.com/images/I/61lqMJs3m6L._AC_SL1500_.jpg"],
    price: 355,
    description: `"A4 Wi-Fi Ink Cartridge Duplex (up to A4) Printer. Print, scan and copy. Up to 28.0ppm/28.0ppm (Mono/Colour. Maximum printing resolution: 1200 x 4800 dpi / Scanning optical resolution 1200 x 4800 dpi. Hi-Speed USB 2.0 + Ethernet + Wi-Fi IEEE 802.11b/g/n, Wi-Fi Direct
        Compatible with Apple Airprint and Mopria Print Service
        1x Paper tray (up to 250 sheets of 80 gsm)
        Compatible Ink: LC462 Series"`,
    category: printers,
  },
  {
    name: "KODAK Dock Plus Portable Instant Photo Printer",
    images: ["https://m.media-amazon.com/images/I/71jSkYcjdqL._AC_SL1500_.jpg"],
    price: 230,
    description: `"DOCK & CHARGE - With the KODAK Dock Plus photo printer, you can dock your phone to print your favorite photos instantly. This printer also supports reliable and stable Bluetooth connection. Our KODAK Dock Plus photo printer is the most affordable option to print right from your home. 
        SUPERIOR PHOTO QUALITY - KODAK Dock Plus uses 4Pass Technology to print flawless photos instantly. TWO PHOTO TYPES - The KODAK Dock Plus photo printer supports both border and borderless type photos. AR APP - Download the KODAK Photo Printer application to print anywhere and anytime. "`,
    category: printers,
  },
  {
    name: "Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens , Black",
    images: [
      "https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SL1500_.jpg ",
    ],
    price: 879,
    description:
      "24 1 Megapixel CMOS (APS-C) sensor with is 100–6400 (H: 12800). Built-in Wi-Fi and NFC technology. 9-Point AF system and AI Servo AF. Optical Viewfinder with approx 95% viewing coverage. Use the EOS Utility Webcam Beta Software (Mac and Windows) to turn your compatible Canon camera into a high-quality webcam.",
    category: cameras,
  },
  {
    name: "KODAK AZ401BK PIXPRO Astro Zoom  16MP Digital Camera , Black",
    images: ["https://m.media-amazon.com/images/I/617G1b-WbiL._AC_SL1000_.jpg"],
    price: 279,
    description:
      "You’ll get well defined, detailed images thanks to the AZ401’s 16 million pixels. That’s ample resolution to crop, zoom, or enlarge your photos however the photographer in you desires. With a 24mm wide angle lens, there’s no sacrificing what you want in the frame. So go ahead and let your camera see what you see, the sky’s the limit. The Optical Image Stabilization will iron out any small movements as you’re focused on getting your shot, so you never have to be afraid to go for what you want. Whether you’re in the moment, or modifying your work at a later time, the bright, 3 inch LCD screen ensures that you end up with just what you’re looking for.",
    category: cameras,
  },
  {
    name: "Panasonic LUMIX FZ80 4K Digital Camera, 18.1 Megapixel Video Camera",
    images: ["https://m.media-amazon.com/images/I/917LEZ+it3L._AC_SL1500_.jpg"],
    price: 649,
    description:
      "Point and Shoot Long Zoom Camera: 18.1 megapixel MOS sensor plus 60X zooms DC Vario lens (20 1220 millimeter and Power O.I.S. (Optical Image Stabilizer) captures far off moments. High Resolution View Finder and LCD Display: High resolution 1,170K dot view finder and rear touch enabled 3 inch LCD Display (1040 dots) are clear even in bright sunlight. Lens:14 elements in 12 groups. 4K video Capture: 4K QFHD video recording (3840 x 2160) with three unique 4K ultra HD video pause and save 4K photo modes extracts individual high resolution Photos from 4K ultra HD video filmed at 30 frames per second to capture split second moments. Low Light Performance: Low light capture lets you enjoy photography during your nightlife again with impressive results; Note: Refer to user manual PDF attached below in technical specification for trouble shooting steps are on page 54. USB Charging and Wi-Fi Connectivity: Enjoy travel ready technologies like USB charging and Wi Fi connectivity to your mobile device; HDMI D (Micro), Micro USB and USB 2.0 provide additional connectivity to your favorite devices; Max resolution: 4896 x 3672",
    category: cameras,
  },
  {
    name: "OM SYSTEM/Olympus OM-1 Body Black",
    images: ["https://m.media-amazon.com/images/I/81EmQQDJwhL._AC_SL1500_.jpg"],
    price: 2879,
    description: `"The OM-1 is a new flagship camera released by OM Digital Solutions under its new OM System brand. The OM-1, and  features 20.4MP Micro Four Thirds stacked CMOS sensor with 5-axis in-body image stabilization and two high-resolution modes capable of outputting 50MP and 80MP images in a special Tripod High Res mode. It's also quite capable on the video front, with support for 4K video (UHD or DCI) at up to 60 fps and Full HD (1080p) video at up to 240 fps, both internally in H.264 (8-bit) or H.265 (10-bit) codecs. Olympus has also doubled down on its weatherproofing expertise by adding enough weather-sealing to qualify this camera for IP53 dust- and splash-resistance.High image quality exceeds sensor size concepts
        New Photo Represent Computational Photography
        Video function that meets creator requirements
        Item weight: 511.0 grams. "`,
    category: cameras,
  },
  {
    name: "CamGo X 4K 20MP WiFi Ultra HD Underwater Waterproof Camera",
    images: ["https://m.media-amazon.com/images/I/6116QOIPxTL._AC_SL1000_.jpg"],
    price: 189,
    description:
      "4K wifi waterproof action camera which uses a Sony IMX386 13M to capture sharp photos and gorgeous video. Equip with Allwinner V316 chipset which is a system-on-chip solution that integrates an advanced image sensor pipeline (ISP) and a powerful ARM Cortex CPU for advanced analytics, Wifi streaming and user applications. Waterproof up to 30 meters under water. Ideal for water sports such as swimming, surfing, snorkelling diving. Supports various photo and video recording formats such as: car mode, loop recording, diving mode, timer-shoot capture modes like time lapse. Built-in wifi; Share & edit videos and images easily; Download smartphone App (XDV) wireless control camera, HDMI output that supports 4k; 2.0 inch LCD display screen; Supports external storage up to 64GB at TF card class10; Also supports Wifi with both Android & iOS; 60 minutes video recording in 4K; HDMI, USB and AV video output; Wireless remote to control the camera from range",
    category: cameras,
  },
];
module.exports = productSeed;
