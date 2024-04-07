/*
 Navicat Premium Data Transfer

 Source Server         : mongodb
 Source Server Type    : MongoDB
 Source Server Version : 60014
 Source Host           : localhost:27017
 Source Schema         : armstep

 Target Server Type    : MongoDB
 Target Server Version : 60014
 File Encoding         : 65001

 Date: 23/03/2024 07:34:30
*/


// ----------------------------
// Collection structure for categories
// ----------------------------
db.getCollection("categories").drop();
db.createCollection("categories");

// ----------------------------
// Documents of categories
// ----------------------------
db.getCollection("categories").insert([ {
    _id: ObjectId("65fdf97d1b4b4484c37c6180"),
    title: "MERN Stack",
    detail: "This stack provides an end-to-end framework for the developers to work in and each of these technologies play a big part in the development of web applications.",
    icons: [
        {
            title: "MongoDB",
            icon: "upload/category/1711143242950-mongodb.svg"
        },
        {
            title: "Express.js",
            icon: "upload/category/1711143265939-express.svg"
        },
        {
            title: "React",
            icon: "upload/category/1711143275985-react.svg"
        },
        {
            title: "Node.js",
            icon: "upload/category/1711143291839-node.svg"
        }
    ],
    status: "1",
    createdAt: ISODate("2024-03-22T21:34:53.863Z"),
    updatedAt: ISODate("2024-03-22T21:34:53.863Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("65fdf9ed1b4b4484c37c6184"),
    title: "MEAN Stack",
    detail: "MEAN enables developers to build dynamic and scalable web applications entirely in JavaScript, making it a versatile choice for creating modern, real-time, and single-page applications.",
    icons: [
        {
            title: "Angular.js",
            icon: "upload/category/1711143329689-angular.svg"
        },
        {
            title: "MongoDB",
            icon: "upload/category/1711143384136-mongodb.svg"
        },
        {
            title: "Express.js",
            icon: "upload/category/1711143394089-express.svg"
        }
    ],
    status: "1",
    createdAt: ISODate("2024-03-22T21:36:45.96Z"),
    updatedAt: ISODate("2024-03-22T21:36:45.96Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("65fdfa4d1b4b4484c37c6188"),
    title: "IOS",
    detail: "Whether it's iOS or Android, our team transforms ideas into engaging, high-performance mobile experiences, ensuring your presence in the palm of your users' hands is nothing short of exceptional",
    icons: [
        {
            title: "Swift",
            icon: "upload/category/1711143434351-swift.svg"
        },
        {
            title: "React Native",
            icon: "upload/category/1711143498247-react.svg"
        }
    ],
    status: "1",
    createdAt: ISODate("2024-03-22T21:38:21.209Z"),
    updatedAt: ISODate("2024-03-22T21:38:21.209Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("65fdfaa41b4b4484c37c618c"),
    title: "Android",
    detail: "Our expertise includes programming languages like Java and Kotlin, Android Studio (the official integrated development environment), XML for layout design, and various Android libraries and frameworks.",
    icons: [
        {
            title: "React Native",
            icon: "upload/category/1711143568260-react.svg"
        },
        {
            title: "Kotlin",
            icon: "upload/category/1711143581030-kotlin.svg"
        },
        {
            title: "Java",
            icon: "upload/category/1711143588024-java.svg"
        }
    ],
    status: "1",
    createdAt: ISODate("2024-03-22T21:39:48.777Z"),
    updatedAt: ISODate("2024-03-22T21:39:48.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("65fdfadc1b4b4484c37c6190"),
    title: "Blockchain",
    detail: "Embrace innovation with our blockchain development services and redefine the way you engage with trust, transparency, and immutability",
    icons: [
        {
            title: "Solidity",
            icon: "upload/category/1711143618465-solidity.svg"
        },
        {
            title: "Rust",
            icon: "upload/category/1711143626493-rust.svg"
        },
        {
            title: "Go(Golang)",
            icon: "upload/category/1711143641933-go.svg"
        }
    ],
    status: "1",
    createdAt: ISODate("2024-03-22T21:40:44.45Z"),
    updatedAt: ISODate("2024-03-22T21:40:44.45Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("65fdfb411b4b4484c37c6194"),
    title: "WEB3",
    detail: "We are experts in Web3 technologies, paving the way for the decentralized and blockchain-powered future of the internet. Our proficiency includes blockchain platforms, smart contract development, decentralized applications (DApps), IPFS for decentralized file storage and building blockchain-based solutions.",
    icons: [
        {
            title: "Alchemy",
            icon: "upload/category/1711143712882-solidity.svg"
        },
        {
            title: "Hardhat",
            icon: "upload/category/1711143744250-rust.svg"
        }
    ],
    status: "1",
    createdAt: ISODate("2024-03-22T21:42:25.824Z"),
    updatedAt: ISODate("2024-03-22T21:42:25.824Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("65fdfb9f1b4b4484c37c6198"),
    title: "AI & ML",
    detail: "Embrace a future-driven approach with our AI and Machine Learning development services, and unlock the potential for data-driven insights, automation, and unparalleled innovation",
    icons: [
        {
            title: "TensorFlow",
            icon: "upload/category/1711143799787-tensor.svg"
        },
        {
            title: "PyTorch",
            icon: "upload/category/1711143812230-pytorch.svg"
        },
        {
            title: "Scikit-Learn",
            icon: "upload/category/1711143825779-scikit.svg"
        },
        {
            title: "OpenCV",
            icon: "upload/category/1711143838744-opencv.svg"
        }
    ],
    status: "1",
    createdAt: ISODate("2024-03-22T21:43:59.957Z"),
    updatedAt: ISODate("2024-03-22T21:43:59.957Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("65fdfbcb1b4b4484c37c619c"),
    title: "Generative AI",
    detail: "Our expertise enables us to create AI-driven systems that autonomously generate diverse content, from realistic text and images to innovative applications across various domains.",
    icons: [
        {
            title: "GPT4",
            icon: "upload/category/1711143870714-gpt-4.svg"
        },
        {
            title: "HuggingFace",
            icon: "upload/category/1711143882452-hugging.svg"
        }
    ],
    status: "1",
    createdAt: ISODate("2024-03-22T21:44:43.737Z"),
    updatedAt: ISODate("2024-03-22T21:44:43.737Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for contacts
// ----------------------------
db.getCollection("contacts").drop();
db.createCollection("contacts");

// ----------------------------
// Documents of contacts
// ----------------------------

// ----------------------------
// Collection structure for projects
// ----------------------------
db.getCollection("projects").drop();
db.createCollection("projects");

// ----------------------------
// Documents of projects
// ----------------------------
db.getCollection("projects").insert([ {
    _id: ObjectId("65fe3a541b4b4484c37c6204"),
    title: "Graviton",
    thumb: "upload/projects/1711159655761-thumb-graviton.png",
    img: "upload/projects/1711159887797-graviton.png",
    services: "Web & Blockchain Development",
    industry: "NFT Service Providers",
    platform: "Web and Desktop",
    client: "Graviton provides Web3 tools and infrastructure that allows artists to reach fans, advertise and monetize their talents.",
    overview: "Graviton aims to develop three Web3 products: NFT-Display, NFT-Storage, and NFT-Torrents, catering to artists in the NFT space.  These products, available as both web and desktop versions, will enable artists to showcase, securely store, and distribute their NFT artworks.  The project involves translating existing Figma designs into functional interfaces, integrating blockchain technology, ensuring user security, implementing monetization strategies, and fostering a community of artists and fans. The goal is to create a seamless, secure, and user-friendly ecosystem for artists to reach their audience and monetize their talents in the Web3 world.",
    link: "https://graviton.xyz/",
    team: [
        "1 Full Stack",
        "1 Blockchain Developer"
    ],
    duration: "6 months",
    stacks: [
        "MERN stack",
        "Solidity",
        "Foundry"
    ],
    result: "All three products were delivered punctually, meeting or even exceeding the high-quality standards set for them.    Our team's dedication and expertise ensured that each product was not only completed within the specified deadlines but also with an emphasis on excellence in design, functionality, and user experience.This commitment to delivering top-notch products paid off, as the client expressed full satisfaction with the end results.  Their positive feedback is a testament to our team's hard work, attention to detail, and ability to fulfill their expectations in the Web3 domain. This successful project completion reinforces our reputation for reliability and proficiency in delivering value to our clients.",
    status: "1",
    createdAt: ISODate("2024-03-23T02:11:32.2Z"),
    updatedAt: ISODate("2024-03-23T02:11:32.2Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("projects").insert([ {
    _id: ObjectId("65fe51b31b4b4484c37c621a"),
    title: "Demoverse",
    thumb: "upload/projects/1711165759556-thumb-demoverse.png",
    img: "upload/projects/1711165766222-demoverse.png",
    services: "Web & Blockchain Development",
    industry: "Blockchain & Web3",
    platform: "Web",
    client: "DemoVerse is a musician-led platform that is revolutionizing the music industry by harnessing the power of blockchain technology. Their mission is to empower artists to attain both financial independence and creative freedom. They fully understand the challenges musicians face in the industry and are dedicated to reshaping it to better serve the interests and aspirations of the talented individuals who create the music we love.",
    overview: "The task was to develop music web3 marketplace, where artists' songs could be digitalized and become NFTs, which these creators could share / sell / monetize inside of the platform.    For that their local token on Ethereum and Polygon should have been created along with its smart contract.",
    link: "https://www.demoverse.com/",
    team: [
        "1 Full Stack Web3",
        "1 Mobile Developer"
    ],
    duration: "3 months",
    stacks: [
        "MERN stack",
        "Solidity",
        "Hardhat",
        "React Native"
    ],
    result: "The integration of local tokens and smart contracts on Ethereum and Polygon has significantly boosted security and usability in the Music Web3 Marketplace.   With a user-friendly interface and community-focused features, the platform empowers artists and transforms the music industry in the Web3 era. We successfully delivered both the smart contract infrastructure and the marketplace web app MVP, meeting the client's timeline and passing the final testing phase with full client satisfaction. This marks a groundbreaking step in empowering artists to control their music and finances through NFTs and blockchain technology.",
    status: "1",
    createdAt: ISODate("2024-03-23T03:51:15.251Z"),
    updatedAt: ISODate("2024-03-23T03:51:15.251Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("projects").insert([ {
    _id: ObjectId("65fe52301b4b4484c37c621e"),
    title: "Slash.Digital",
    thumb: "upload/projects/1711165907007-thumb-slash.png",
    img: "upload/projects/1711165911460-slash.png",
    services: "Web & AI Development",
    industry: "Artificial Intelligence & Neuromarketing",
    platform: "Web & Desktop",
    client: "Neuroscience meets creative agency! The company is a full-service digital marketing partner with a strong focus on driving growth for clients. They are dedicated to the relentless pursuit of converting prospects into customers and customers into brand ambassadors. The belief is that personalizing every interaction at every touchpoint is the key to driving this behavior. The company boasts an outstanding track record, having worked with renowned clients such as HUGO BOSS, Danone, Poggenpohl, and many others.",
    overview: "The task for the company was to create a website that serves as a digital marketing hub and showcases their expertise in merging neuroscience with creative agency services. The website is designed to be a powerful tool for attracting clients.",
    link: "https://slash.digital/",
    team: [
        "AI and Full Stack developer"
    ],
    duration: "18 months",
    stacks: [
        "Tensorflow",
        "Pytorch",
        "BigQuery",
        "Google Cloud",
        "React",
        "Django"
    ],
    result: "The company's new website is a powerful digital marketing tool that effectively merges neuroscience with creative agency services. The successful launch of the website has garnered full satisfaction from the client, who is pleased with the results achieved in conveying their message and attracting both clients and talent.",
    status: "1",
    createdAt: ISODate("2024-03-23T03:53:20.522Z"),
    updatedAt: ISODate("2024-03-23T03:53:20.522Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("projects").insert([ {
    _id: ObjectId("65fe52b61b4b4484c37c6222"),
    title: "Tribeone",
    thumb: "upload/projects/1711166026625-thumb-tribeone.png",
    img: "upload/projects/1711166041543-tribeone.png",
    services: "Web3 & Blockchain Development",
    industry: "Blockchain",
    platform: "Web",
    client: "TribeOne is a cutting-edge DeFi and NFT funding platform, delivering the best of both worlds to users. The platform has already introduced its instant NFT-lending decentralized application (dApp). TribeOne's protocol empowers users to engage in leveraged trading of NFT floor perpetual products. This is achieved through an innovative skew-based funding rate mechanism and a reliance on oracles that boast state-of-the-art security and stability.",
    overview: "This task involved developing complex smart contracts on Ethereum and Binance Smart Chain, focusing on lending, borrowing, and staking operations. We customized features from AAVE, a prominent DeFi platform, to suit our project's needs. To enhance user accessibility, we integrated web3 connections into our website. Our key goals were to create robust smart contracts, adapt AAVE functionalities, and ensure user-friendliness. We aimed to complete the project on time with regular updates, delivering a user-centric DeFi ecosystem on both blockchains.",
    link: "https://www.tribeone.io/",
    team: [
        "1 Full Stack",
        "Blockchain developer"
    ],
    duration: "9 months",
    stacks: [
        "Create Web3 tools for artists",
        "NFT-Display",
        "NFT-Storage",
        "NFT-Torrents",
        "web & desktop"
    ],
    result: "The successful completion of this task would result in the creation of a robust and versatile DeFi ecosystem on both Ethereum and Binance Smart Chain networks. This ecosystem would offer lending, borrowing, staking, and other financial services to users while leveraging the functionalities inspired by Aave. Additionally, the integration of Web3 connections on the website would ensure a user-friendly and intuitive experience, enhancing accessibility and adoption of the DeFi platform.",
    status: "1",
    createdAt: ISODate("2024-03-23T03:55:34.692Z"),
    updatedAt: ISODate("2024-03-23T03:55:34.692Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("projects").insert([ {
    _id: ObjectId("65fe53361b4b4484c37c6226"),
    title: "Serenity shield",
    thumb: "upload/projects/1711166174979-thumb-serenity.png",
    img: "upload/projects/1711166177781-serenity.png",
    services: "Web development",
    industry: "Blockchain",
    platform: "Web",
    client: "Serenity Shield’s secure and multi-chain private data storage capabilities have wide-ranging use cases across various industries and applications. Individuals, families, and businesses can use it to store sensitive information such as financial records, legal documents, medical records, and other confidential data that needs to be protected. Serenity Shield’s inheritance features are particularly useful for estate planning and transferring important information to beneficiaries after someone passes away.",
    overview: "The project involved the development of a blockchain bridge between Solana and Secret Network for the transfer of fungible and non-fungible tokens (NFTs). This bridge was to be integrated into a new website. Serenity Shield's capabilities for secure, multi-chain private data storage, and inheritance features were also to be highlighted, demonstrating their applications for individuals, families, and businesses in storing sensitive information and estate planning.",
    link: "https://www.serenityshield.io/",
    team: [
        "2 Full Stack",
        "1 Blockchain developer"
    ],
    duration: "4 months",
    stacks: [
        "Solidity",
        "Rust",
        "React",
        "Node",
        "Hardhat",
        "and other related technologies"
    ],
    result: "While there was a slight delay of 2 weeks beyond the initial estimation, the project successfully culminated in the launch of the Minimum Viable Product (MVP). Although the timeline was extended, the overall quality of the work delivered was commendable. The initial impressions from users and stakeholders were positive, indicating a promising start to the project. This outcome underscores the importance of prioritizing quality, even when timelines may require minor adjustments.",
    status: "1",
    createdAt: ISODate("2024-03-23T03:57:42.22Z"),
    updatedAt: ISODate("2024-03-23T03:57:42.22Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("projects").insert([ {
    _id: ObjectId("65fe53ae1b4b4484c37c622a"),
    title: "Superlocal",
    thumb: "upload/projects/1711166284505-thumb-superlocal.png",
    img: "upload/projects/1711166286964-superlocal.png",
    services: "Blockchain & Mobile Development",
    industry: "Blockchain",
    platform: "Web & Mobile",
    client: "Superlocal is a social network where users go places, check in, and accumulate points. Points can be redeemed for rewards. The app included points, stuff, document life, stats, badges, and the local community.",
    overview: "Enhance the Superlocal \"Move to Earn\" (M2E) mobile application by building smart contracts to support the LOCAL token on the Polygon blockchain. Implement a crypto-economic framework, connect web3 functionality, and improve existing app features for a more engaging user experience.",
    link: "https://www.superlocal.com",
    team: [
        "1 Blockchain",
        "Mobile developer",
        "1 Crypto Economist"
    ],
    duration: "6 months",
    stacks: [
        "Angular.js",
        "Node.js",
        "Solidity",
        "Alchemy",
        "Hardhat",
        "etc."
    ],
    result: "The project yielded outstanding results, leaving all stakeholders highly satisfied. Key achievements include successful smart contract implementation, a robust crypto-economic framework for the LOCAL token, seamless web3 integration, and enhanced app features. Users expressed immense satisfaction with the improved Superlocal M2E application, which now offers a more engaging and rewarding experience.",
    status: "1",
    createdAt: ISODate("2024-03-23T03:59:42.492Z"),
    updatedAt: ISODate("2024-03-23T03:59:42.492Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("projects").insert([ {
    _id: ObjectId("65fe54151b4b4484c37c622e"),
    title: "Dokdo",
    thumb: "upload/projects/1711166401962-thumb-dokdo.png",
    img: "upload/projects/1711166404761-dokdo.png",
    services: "Web development",
    industry: "Blockchain",
    platform: "Web",
    client: "Dokdo is a dynamic company with a clear mission—to elevate the Solar Network ecosystem. They achieve this by providing innovative solutions. Their unwavering commitment, forward-thinking expertise, and collaborative spirit make them a driving force in catalyzing positive change.",
    overview: "The task at hand is to deliver high-quality websites characterized by responsive design, robust security measures, and exceptional performance. This endeavor includes effective collaboration with cross-functional teams to ensure the seamless integration of design elements and content. Additionally, the task entails providing continuous and comprehensive support to maintain and enhance these websites, meeting industry standards and client expectations.",
    link: "https://www.dokdo.sh/",
    team: [
        "Full Stack developer"
    ],
    duration: "12 months",
    stacks: [
        "Create Web3 tools for artists: NFT-Display",
        "NFT-Storage",
        "NFT-Torrents",
        "web & desktop"
    ],
    result: "The successful development and implementation of a state-of-the-art IT infrastructure tailored to the organization's unique needs, ensuring data security and operational efficiency.     Key Responsibilities:      Back-end development for server-side logic, security, and APIs.   Database management, integration, testing, and optimization.   Collaboration with design and content teams.   Security, performance, and documentation.",
    status: "1",
    createdAt: ISODate("2024-03-23T04:01:25.267Z"),
    updatedAt: ISODate("2024-03-23T04:01:25.267Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("projects").insert([ {
    _id: ObjectId("65fe54781b4b4484c37c6232"),
    title: "SolarCard",
    thumb: "upload/projects/1711166505815-thumb-solar.png",
    img: "upload/projects/1711166510026-solar.png",
    services: "Web development",
    industry: "Blockchain",
    platform: "Web",
    client: "The task at hand involved the development of the Solar Card application, available on Android, iOS, and Huawei devices. This unique application introduces a Global Crypto Debit Card, aiming to provide users with unparalleled convenience in managing both digital assets and fiat currencies within a unified platform.",
    overview: "The task at hand involved the development of the Solar Card application, available on Android, iOS, and Huawei devices. This unique application introduces a Global Crypto Debit Card, aiming to provide users with unparalleled convenience in managing both digital assets and fiat currencies within a unified platform.",
    link: "https://www.dokdo.sh/",
    team: [
        "Full Stack developer"
    ],
    duration: "12 months",
    stacks: [
        "Create Web3 tools for artists: NFT-Display",
        "NFT-Storage",
        "NFT-Torrents",
        "web & desktop"
    ],
    result: "The Solar Card application, accessible across Android, iOS, and Huawei platforms, it offers users a seamless and global Crypto Debit Card experience. Users can effortlessly manage both cryptocurrencies and fiat currencies within the application. The project not only met its deadlines but also ensured the delivery of a high-quality solution, ultimately leading to the client's complete satisfaction.",
    status: "1",
    createdAt: ISODate("2024-03-23T04:03:04.786Z"),
    updatedAt: ISODate("2024-03-23T04:03:04.786Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("projects").insert([ {
    _id: ObjectId("65fe54de1b4b4484c37c6236"),
    title: "Tymt",
    thumb: "upload/projects/1711166682932-thumb-tymt.png",
    img: "upload/projects/1711166685421-tymt.png",
    services: "Web development",
    industry: "Blockchain",
    platform: "Web",
    client: "Tymt is a revolutionary game launcher that seamlessly integrates traditional games, blockchain-based games, and Web3 games. It offers gamers a unified platform to access their favorite titles, explore blockchain gaming with NFTs, and engage in the future of decentralized gaming.    Tymt's vision is to empower gamers with unparalleled access and ownership in the evolving gaming landscape.",
    overview: "The task at hand entails the development of a multi-platform application compatible with Windows, Mac, and Linux operating systems. This comprehensive project encompasses the creation of an application that integrates various features, some of which are still in development.    Additionally, a fully operational landing page is already prepared.",
    link: "https://www.tymt.com/",
    team: [
        "Full Stack developer"
    ],
    duration: "5 months",
    stacks: [
        "Create Web3 tools for artists: NFT-Display",
        "NFT-Storage",
        "NFT-Torrents",
        "web & desktop"
    ],
    result: "The project has successfully delivered an application compatible with Windows, Mac, and Linux. It integrates both existing and developing features, offers multi-chain compatibility, API integration, and a user-centric design. The landing page is seamlessly integrated, enhancing accessibility, while operational efficiency ensures consistent performance across platforms.    This achievement positions the application to provide versatile and user-friendly solutions in a dynamic digital landscape.",
    status: "1",
    createdAt: ISODate("2024-03-23T04:04:46.617Z"),
    updatedAt: ISODate("2024-03-23T04:04:46.617Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for reviews
// ----------------------------
db.getCollection("reviews").drop();
db.createCollection("reviews");

// ----------------------------
// Documents of reviews
// ----------------------------
db.getCollection("reviews").insert([ {
    _id: ObjectId("65fe5b981b4b4484c37c624d"),
    logo: "upload/reviews/1711168273801-graviton.png",
    user: "upload/reviews/1711168328907-graviton-user.png",
    company: "Graviton",
    review: "Their commitment to excellence resulted in a seamless development process, and the end product exceeded our expectations. Highly recommended!",
    name: "Troy Murray",
    role: "Founder",
    profile: "https://www.linkedin.com/in/troy-murray-2461a693/",
    status: "1",
    createdAt: ISODate("2024-03-23T04:33:28.609Z"),
    updatedAt: ISODate("2024-03-23T04:34:23.322Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("reviews").insert([ {
    _id: ObjectId("65fe5bf91b4b4484c37c6254"),
    logo: "upload/reviews/1711168500237-serenity.png",
    user: "upload/reviews/1711168503081-serenity-user.png",
    company: "Serenity Shield",
    review: "Their proficiency in security solutions and attention to detail elevated our project's resilience. A trustworthy partner in the realm of digital security!",
    name: "Hugues Svay",
    role: "COO",
    profile: "https://www.linkedin.com/in/hugues-svay-5b387248/",
    status: "1",
    createdAt: ISODate("2024-03-23T04:35:05.08Z"),
    updatedAt: ISODate("2024-03-23T04:35:05.08Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("reviews").insert([ {
    _id: ObjectId("65fe5c241b4b4484c37c6258"),
    logo: "upload/reviews/1711168544526-solar.png",
    user: "upload/reviews/1711168547225-solar-user.png",
    company: "Solar",
    review: "Their adept team seamlessly integrated blockchain solutions, propelling our project to new heights. A commendable collaboration!",
    name: "Nayiem Willems",
    role: "Founder",
    profile: "https://twitter.com/WillemsTRA",
    status: "1",
    createdAt: ISODate("2024-03-23T04:35:48.328Z"),
    updatedAt: ISODate("2024-03-23T04:35:48.328Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("reviews").insert([ {
    _id: ObjectId("65fe5c5e1b4b4484c37c625c"),
    logo: "upload/reviews/1711168602254-demoverse.png",
    user: "upload/reviews/1711168605040-demoverse-user.png",
    company: "Demo Verse",
    review: "Their adeptness in crafting dynamic, user-centric platforms truly set them apart. A reliable partner for bringing visions to life!",
    name: "Anna Chan",
    role: "Founder",
    profile: "https://www.linkedin.com/in/annajchan",
    status: "1",
    createdAt: ISODate("2024-03-23T04:36:46.263Z"),
    updatedAt: ISODate("2024-03-23T04:36:46.263Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("reviews").insert([ {
    _id: ObjectId("65fe5c821b4b4484c37c6260"),
    logo: "upload/reviews/1711168639267-superlocal.png",
    user: "upload/reviews/1711168641737-superlocal-user.png",
    company: "Superlocal",
    review: "Their proficiency in security solutions and attention to detail elevated our project's resilience. A trustworthy partner in the realm of digital security!",
    name: "Connor Smith",
    role: "Founder",
    profile: "https://www.linkedin.com/in/connor-smith-1b676a1b/",
    status: "1",
    createdAt: ISODate("2024-03-23T04:37:22.815Z"),
    updatedAt: ISODate("2024-03-23T04:37:22.815Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for services
// ----------------------------
db.getCollection("services").drop();
db.createCollection("services");

// ----------------------------
// Documents of services
// ----------------------------
db.getCollection("services").insert([ {
    _id: ObjectId("65fe37fb1b4b4484c37c61ba"),
    icon: "upload/projects/1711159223502-service-web.svg",
    title: "Web",
    subtitle: "Web Development",
    intro: "Nicely developed website is one of the most important steps to tell users about your product. Our web development services encompass the use of cutting-edge technology stacks, including MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js). ",
    detail: "Our web development services are engineered to empower your digital presence, ensuring your online footprint is as robust and dynamic as your business. Dive into the world of cutting-edge web solutions with us.",
    content: "At Armstep, we are not just developers; we are architects of online experiences. Our web development services go beyond conventional coding; they are a meticulous craft aimed at delivering seamless, high-performance websites. From concept to execution, we thrive on turning your ideas into lines of code that resonate with your audience.",
    subcontent: "Websites' and Web Applications' development using MERN and MEAN stacks. Web3 Wallets'  integration into websites",
    category: [
        ObjectId("65fdf9ed1b4b4484c37c6184"),
        ObjectId("65fdf97d1b4b4484c37c6180")
    ],
    status: "1",
    createdAt: ISODate("2024-03-23T02:01:31.509Z"),
    updatedAt: ISODate("2024-03-23T02:01:31.509Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("65fe38581b4b4484c37c61cd"),
    icon: "upload/projects/1711159350012-service-mobile.svg",
    title: "Mobile",
    subtitle: "Mobile Development",
    intro: "In today’s fast-paced digital landscape, a robust mobile presence is not just an option, but a necessity. Our agency specializes in creating dynamic, efficient, and user-friendly mobile applications for both iOS and Android platforms. Leveraging advanced technologies like React Native, Kotlin, Swift, and Java.",
    detail: "Our Mobile Development services are not just about coding; they're about creating intuitive and seamless experiences that leave a lasting impact.",
    content: "Whether you're looking to launch your first app, enhance an existing one, or explore cross-platform solutions, our team of skilled developers is ready to turn your mobile vision into a reality. From sleek interfaces to robust functionalities, we thrive on delivering mobile solutions that go beyond expectations.",
    subcontent: "Mobile applications' development on Android and IOS devices using Kotlin, Swift and React Native",
    category: [
        ObjectId("65fdfa4d1b4b4484c37c6188"),
        ObjectId("65fdfaa41b4b4484c37c618c")
    ],
    status: "1",
    createdAt: ISODate("2024-03-23T02:03:04.932Z"),
    updatedAt: ISODate("2024-03-23T02:03:04.932Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("65fe38a01b4b4484c37c61d8"),
    icon: "upload/projects/1711159417179-service-blockchain.svg",
    title: "Blockchain",
    subtitle: "Blockchain Development",
    intro: "In a previous decade, decentralization showed the highest growth being integrated by most of Fortune 500 companies. Our agency is dedicated to delivering state-of-the-art blockchain solutions, harnessing the power of leading languages and frameworks including Solidity, Rust, Go, Truffle, Hardhat, Foundry, and Alchemy.",
    detail: "Step into the future with our tailored blockchain services, designed to enhance and secure your digital strategy. Our cutting-edge solutions ensure your venture excels in the decentralized digital world, aligning perfectly with your business goals.",
    content: "Our Blockchain Development services are centered around harnessing the power of distributed ledger technology to create secure, transparent, and immutable solutions. Whether you're a startup exploring blockchain or an enterprise seeking to integrate this transformative technology, our team is here to guide you through every step of the journey.",
    subcontent: "Blockchain Protocols' (new ones or forks of existing blockchains like Ethereum, Solana, Polkadot, etc.) and Smart Contracts' Development on EVM-compatible, (Ethereum, Binance Smart Chain, Polygon, etc.).",
    category: [
        ObjectId("65fdfadc1b4b4484c37c6190"),
        ObjectId("65fdfb411b4b4484c37c6194")
    ],
    status: "1",
    createdAt: ISODate("2024-03-23T02:04:16.944Z"),
    updatedAt: ISODate("2024-03-23T02:04:16.944Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("65fe39281b4b4484c37c61f0"),
    icon: "upload/projects/1711159590842-service-ai.svg",
    title: "AI and Machine Learning",
    subtitle: "AI and Machine Learning",
    intro: "In the rapidly evolving landscape of technology, harnessing the power of artificial intelligence (AI) is crucial for staying ahead. Our AI development services are designed to seamlessly integrate into your business framework, empowering your products with smart, data-driven solutions. Our commitment is to transform your ideas into intelligent applications that not only enhance user experience but also drive innovation and growth in your industry.",
    detail: "Whether you're a startup looking to implement machine learning or an enterprise seeking to harness the power of artificial intelligence, we're here to make it happen.",
    content: "Our approach involves understanding your unique business challenges and objectives to craft AI solutions that make a real impact. From predictive analytics to natural language processing, our team specializes in turning data into a strategic asset, driving efficiency, and fostering innovation.",
    subcontent: "AI Model Development/Large Language Models Integration/ Training and Testing/Audio Processing/Natural Language Processing (NLP)",
    category: [
        ObjectId("65fdfb9f1b4b4484c37c6198"),
        ObjectId("65fdfbcb1b4b4484c37c619c")
    ],
    status: "1",
    createdAt: ISODate("2024-03-23T02:06:32.446Z"),
    updatedAt: ISODate("2024-03-23T02:06:32.446Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for teams
// ----------------------------
db.getCollection("teams").drop();
db.createCollection("teams");

// ----------------------------
// Documents of teams
// ----------------------------
db.getCollection("teams").insert([ {
    _id: ObjectId("65fe5dc61b4b4484c37c629b"),
    name: "Arman",
    role: "CEO and Founder",
    imgUrl: "upload/teams/1711168871167-arman.png",
    upwork: "https://www.upwork.com/freelancers/astepanyan",
    linkedin: "https://www.linkedin.com/in/arman-stepanyan-67412a146/",
    contra: "https://contra.com/arman_stepanyan",
    about: "Meet Arman, the CEO and Founder of our esteemed agency, where we turn ambitious ideas into digital realities. With a rich history of partnering with over 50 diverse clients, his journey in the tech industry has been marked by a relentless pursuit of excellence and innovation. \n \nBefore establishing our agency, he navigated through the tech realm as a Lead Developer and senior executive in more than 10 companies, each with a valuation ranging from $10 million to $100 million. This extensive experience has not only honed my technical expertise in Web, Mobile, Blockchain, and AI Development but also instilled in him a deep understanding of the multifaceted needs of small to mid-sized businesses.",
    stacks: [
        {
            heading: "TensorFlow",
            icon: "upload/teams/1711168912282-tensorflow.svg"
        },
        {
            heading: "Scikit-Learn",
            icon: "upload/teams/1711168929086-pytorch.svg"
        },
        {
            heading: "Scikit-Learn",
            icon: "upload/teams/1711168953367-scikit-learn.svg"
        },
        {
            heading: "OpenCV",
            icon: "upload/teams/1711168963390-opencv.svg"
        }
    ],
    status: "1",
    createdAt: ISODate("2024-03-23T04:42:46.676Z"),
    updatedAt: ISODate("2024-03-23T04:42:46.676Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("teams").insert([ {
    _id: ObjectId("65fe5e551b4b4484c37c62a1"),
    name: "Sam",
    role: "CTO and Co-Founder",
    imgUrl: "upload/teams/1711169037164-sam.png",
    upwork: "https://www.upwork.com/freelancers/~010253f1848f69430b",
    linkedin: "https://www.linkedin.com/in/samvel-barseghyan-305085195",
    contra: "https://contra.com/samvel_barseghyan",
    about: "Meet Samvel, the mastermind behind our cutting-edge technological solutions and the Co-Founder of our agency. With a remarkable track record of working with over 35 clients, Samvel's expertise is the cornerstone of our success in delivering exceptional digital solutions. \n \nAs our CTO, Samvel embodies the perfect blend of technical prowess and leadership excellence. He is dedicated to fostering a culture of innovation and precision, ensuring that every project we undertake is a testament to our commitment to quality and ingenuity.",
    stacks: [
        {
            heading: "TensorFlow",
            icon: "upload/teams/1711169073928-tensorflow.svg"
        },
        {
            heading: "Scikit-Learn",
            icon: "upload/teams/1711169083514-pytorch.svg"
        },
        {
            heading: "Scikit-Learn",
            icon: "upload/teams/1711169097353-scikit-learn.svg"
        },
        {
            heading: "OpenCV",
            icon: "upload/teams/1711169106422-opencv.svg"
        }
    ],
    status: "1",
    createdAt: ISODate("2024-03-23T04:45:09.029Z"),
    updatedAt: ISODate("2024-03-23T04:45:09.029Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for technologies
// ----------------------------
db.getCollection("technologies").drop();
db.createCollection("technologies");

// ----------------------------
// Documents of technologies
// ----------------------------
db.getCollection("technologies").insert([ {
    _id: ObjectId("65fe5ea01b4b4484c37c62b1"),
    logo: "upload/technologies/1711169171614-service-web.svg",
    title: "Web",
    category: [
        ObjectId("65fdf9ed1b4b4484c37c6184"),
        ObjectId("65fdf97d1b4b4484c37c6180")
    ],
    status: "1",
    createdAt: ISODate("2024-03-23T04:46:24.064Z"),
    updatedAt: ISODate("2024-03-23T04:46:24.064Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("technologies").insert([ {
    _id: ObjectId("65fe5ec51b4b4484c37c62ba"),
    logo: "upload/technologies/1711169207669-service-mobile.svg",
    title: "Mobile",
    category: [
        ObjectId("65fdfa4d1b4b4484c37c6188"),
        ObjectId("65fdfaa41b4b4484c37c618c")
    ],
    status: "1",
    createdAt: ISODate("2024-03-23T04:47:01.12Z"),
    updatedAt: ISODate("2024-03-23T04:47:01.12Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("technologies").insert([ {
    _id: ObjectId("65fe5ee21b4b4484c37c62c5"),
    logo: "upload/technologies/1711169236838-service-ai.svg",
    title: "AI & ML",
    category: [
        ObjectId("65fdfb9f1b4b4484c37c6198"),
        ObjectId("65fdfbcb1b4b4484c37c619c")
    ],
    status: "1",
    createdAt: ISODate("2024-03-23T04:47:30.327Z"),
    updatedAt: ISODate("2024-03-23T04:47:30.327Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("technologies").insert([ {
    _id: ObjectId("65fea295925a4ed5d7fa205e"),
    logo: "upload/technologies/1711186567718-service-blockchain.svg",
    title: "Blockchain",
    category: [
        ObjectId("65fdfadc1b4b4484c37c6190"),
        ObjectId("65fdfb411b4b4484c37c6194")
    ],
    status: "1",
    createdAt: ISODate("2024-03-23T09:36:21.598Z"),
    updatedAt: ISODate("2024-03-23T09:36:21.598Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");
db.getCollection("users").createIndex({
    email: NumberInt("1")
}, {
    name: "email_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("65f2f3cef84413682ce57c28"),
    name: "timeworn",
    email: "monkey199294@gmail.com",
    password: "$2b$10$8STEliR2N2Mmr3CnETTaV.T0jtzrufBGHvw.aLUa6I5oi/B7SzVI2",
    status: "1",
    createdAt: ISODate("2024-03-14T12:55:42.395Z"),
    updatedAt: ISODate("2024-03-14T12:55:42.395Z"),
    __v: NumberInt("0")
} ]);
