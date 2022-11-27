import React from 'react';

const Extra = () => {

    const product = [
        {
            name: 'MSI GF63',
            image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            categoryId: '01',
            category: 'Budget Laptop',
            resalePrice: 460,
            originalPrice: 880,
            location: 'Dhaka',
            usingTime: '6 months',
            description: 'MSI GF63 Thin 10SCXR Core i5 10th Gen GTX 1650 4GB Graphics 15.6" FHD Gaming Laptop MSI GF63 Thin 10SCXR equipped with Intel Core i5-10500H Processor 12M Cache, 2.50 GHz up to 4.50 GHz 8GB 3200 MHz DDR4 RAM, 256GB PCIe SSD, 1TB HDD, 15.6" FHD (1920x1080) 60Hz, IPS Display and NVIDIA GeForce GTX 1650 4GB GDDR6 Graphics. The new Latest 10th Gen. Intel Core i5 processor powers up with up to 15% performance gains over the previous generation. A higher single-core frequency is better for the gaming experience. It is fine-tuned to be noticeably quieter and cooler under load, easily blending into any environment. This laptop is designed with Aluminum hairbrush aesthetics with an asymmetric pattern of 21.7mm thin, and 1.86kg light. The fastest gaming display brings you the most vibrant visuals so you never miss a beat by using this gaming laptop. Its a Metallic top and keyboard cover paired with unique X-shaped ventilation hidden underneath. All-new Dragon Center with exclusive Gaming Mode 2.0. MSI App Player for seamless gaming experience between mobile and PC. It is also featured with High-Resolution Audio ready. This laptop will provide you with productivity and 7 hours of battery life. This new exclusive MSI Evolve GF63 Thin 10SCXR gaming laptop has 01 year International Warranty.',
            date: '12 Nov 2022',
            seller: 'Jubayer',

        },
        {
            name: 'MSI GF63',
            image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            categoryId: '01',
            category: 'Budget Laptop',
            resalePrice: 250,
            originalPrice: 880,
            location: 'Dhaka',
            usingTime: '6 months',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae atque sint numquam odio ad quo magnam mollitia possimus ea. Soluta, ducimus. Asperiores laborum veritatis itaque. Nesciunt amet explicabo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate eligendi, facere laborum ratione dolorem cumque, distinctio alias consequatur consequuntur numquam perferendis magni recusandae quasi maiores officia voluptatem laboriosam possimus? ',
            date: '12 Nov 2022',
            seller: 'Jubayer',

        },
        {
            name: 'MSI GF63',
            image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            categoryId: '02',
            category: 'Mid Range Laptop',
            resalePrice: 362,
            originalPrice: 880,
            location: 'Dhaka',
            usingTime: '6 months',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae atque sint numquam odio ad quo magnam mollitia possimus ea. Soluta, ducimus. Asperiores laborum veritatis itaque. Nesciunt amet explicabo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate eligendi, facere laborum ratione dolorem cumque, distinctio alias consequatur consequuntur numquam perferendis magni recusandae quasi maiores officia voluptatem laboriosam possimus? ',
            date: '12 Nov 2022',
            seller: 'Jubayer',

        },
        {
            name: 'MSI GF63',
            image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            categoryId: '02',
            category: 'Mid Range Laptop',
            resalePrice: 425,
            originalPrice: 880,
            location: 'Dhaka',
            usingTime: '6 months',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae atque sint numquam odio ad quo magnam mollitia possimus ea. Soluta, ducimus. Asperiores laborum veritatis itaque. Nesciunt amet explicabo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate eligendi, facere laborum ratione dolorem cumque, distinctio alias consequatur consequuntur numquam perferendis magni recusandae quasi maiores officia voluptatem laboriosam possimus? ',
            date: '12 Nov 2022',
            seller: 'Jubayer',

        },
        {
            name: 'MSI GF63',
            image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            categoryId: '03',
            category: 'High Specification',
            resalePrice: 215,
            originalPrice: 880,
            location: 'Dhaka',
            usingTime: '6 months',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae atque sint numquam odio ad quo magnam mollitia possimus ea. Soluta, ducimus. Asperiores laborum veritatis itaque. Nesciunt amet explicabo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate eligendi, facere laborum ratione dolorem cumque, distinctio alias consequatur consequuntur numquam perferendis magni recusandae quasi maiores officia voluptatem laboriosam possimus? ',
            date: '12 Nov 2022',
            seller: 'Jubayer',

        },
        {
            name: 'MSI GF63',
            image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            categoryId: '03',
            category: 'High Specification',
            resalePrice: 325,
            originalPrice: 880,
            location: 'Dhaka',
            usingTime: '6 months',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae atque sint numquam odio ad quo magnam mollitia possimus ea. Soluta, ducimus. Asperiores laborum veritatis itaque. Nesciunt amet explicabo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate eligendi, facere laborum ratione dolorem cumque, distinctio alias consequatur consequuntur numquam perferendis magni recusandae quasi maiores officia voluptatem laboriosam possimus? ',
            date: '12 Nov 2022',
            seller: 'Jubayer',

        }
    ]

    const category = [
        {
            categoryId: '01',
            category: 'Budget Laptop',
            image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            categoryId: '02',
            category: 'Mid Range Laptop',
            image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            categoryId: '03',
            category: 'High Specification',
            image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
    ]

    // console.log(JSON.stringify())


    return (
        <div>

        </div>
    );
};

export default Extra;