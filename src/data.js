import {cases, cpu, gc, mb,monitors, ram, ssd, ups} from './assets/banner';

export const banners = [
    {
        id: 1,
        url : "processors",
        banner: cpu
    },
    {
        id: 2,
        url: "motherboards",
        banner: mb
    },
    {
        id: 3,
        url: "graphics-cards",
        banner: gc
    },
    {
        id: 4,
        url: "ram-memory",
        banner: ram
    },
    {
        id: 5,
        url: "data-storages",
        banner:ssd
    },
    {
        id: 6,
        url: "computer-cases",
        banner: cases
    },
    {
        id: 7,
        url: "power-supplies",
        banner:ups
    },
    {
        id: 8,
        url: "cooling",
        banner: monitors
    },
]

export const products =[
    {
        id:1 ,
        img:"https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0601600_874099.jpg" ,
        title:"Samsung 970 EVO Plus SSD 1TB M.2 NVMe Interface PCIe 3.0 x4 Internal Solid State Drive with V-NAND 3 bit MLC Technology (MZ-V7S1T0B/AM)" ,
        origin_price:159.99,
        price:109.99 ,
        shop: 105,
        cat:"Hard Drives & SSDs",
        description:[{
            SKU:"",
            UPC:"",
            warrranty: "5 year Limited",
            vandor_Support: "http://www.samsung.com/us/support/#" 
        }]
        

    },
    {
        id: 2,
        img:"https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0651029_418731.jpg" ,
        title:"ASUS Z590-P Prime WiFi Intel LGA 1200 ATX Motherboard" ,
        origin_price:209.99,
        price: 199.99 ,
        shop: 209,
        cat: "Motherboards",
        description:[{
            SKU:"",
            UPC:"",
            warrranty: "5 year Limited",
            vandor_Support: "http://www.samsung.com/us/support/#" 
        }]
        
    },
    {
        id: 3,
        img:"https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0637879_279877.jpg" ,
        title:"ASUS NVIDIA GeForce RTX 3080 Ti TUF Overclocked Triple-Fan 12GB GDDR6X PCIe 4.0 Graphics Card" ,
        origin_price:1209.99,
        price:1049.99 ,
        shop: 55,
        cat:"Graphics Cards",
        description:[{
            SKU:"",
            UPC:"",
            warrranty: "5 year Limited",
            vandor_Support: "http://www.samsung.com/us/support/#" 
        }]
    },
    {
        id: 4,
        img:"https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0467049_098715.jpg" ,
        title: "G.Skill Ripjaws V 32GB (2 x 16GB) DDR4-3200 PC4-25600 CL16 Dual Channel Desktop Memory Kit F4-3200C16D-32G - Black",
        price:197.99 ,
        origin_price:209.99,
        shop: 100,
        cat: "RAM",
        description:[{
            SKU:"",
            UPC:"",
            warrranty: "5 year Limited",
            vandor_Support: "http://www.samsung.com/us/support/#" 
        }]
    },
    {
        id: 5,
        img:"https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0624764_127753.jpg" ,
        title: "EVGA SuperNOVA 750 GT 750 Watt 80 Plus Gold ATX Fully Modular Power Supply" ,
        price:184.99 ,
        origin_price:209.99,
        shop: 15,
        cat:"Power Supply",
        description:[{
            SKU:"",
            UPC:"",
            warrranty: "5 year Limited",
            vandor_Support: "http://www.samsung.com/us/support/#" 
        }]
    },
    {
        id: 6,
        img:"https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0630284_195081.jpg" ,
        title: "AMD Ryzen 7 5800X Vermeer 3.8GHz 8-Core AM4 Boxed Processor - Heatsink Not Included",
        price:209.99 ,
        origin_price:259.99,
        shop: 205,
        cat:"Processors",
        description:[{
            SKU:"",
            UPC:"",
            warrranty: "5 year Limited",
            vandor_Support: "http://www.samsung.com/us/support/#" 
        }]
    },
    {
        id: 7,
        img:"https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/642887_329706_01_front_thumbnail.jpg" ,
        title: "Lian Li Lancool II MESH Type C RGB Tempered Glass ATX Mid-Tower Computer Case - Snow White" ,
        price: 129.99,
        origin_price:159.99,
        shop: 25,
        cat:"Case",
        description:[{
            SKU:"",
            UPC:"",
            warrranty: "5 year Limited",
            vandor_Support: "http://www.samsung.com/us/support/#" 
        }]
    },
    {
        id: 8,
        img:"https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/632085_216952_01_front_thumbnail.jpg" ,
        title: "Samsung 870 EVO 1TB SSD 3-bit MLC V-NAND SATA III 6Gb/s 2.5\" Internal Solid State Drive",
        price: 104.00,
        origin_price:109.99,
        shop: 35,
        cat:"Hard Drives & SSDs",
        description:[{
            SKU:"",
            UPC:"",
            warrranty: "5 year Limited",
            vandor_Support: "http://www.samsung.com/us/support/#" 
        }]
    },
    {
        id: 9,
        img:"https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/649681_404921_01_front_thumbnail.jpg" ,
        title:"Lian Li Galahad 360mm RGB Water Cooling Kit - Black LGA 1700 Compatible" ,
        price: 159.99,
        origin_price:149.99,
        shop: 35,
        cat:"water-cooling-kit",
        description:[{
            SKU:"",
            UPC:"",
            warrranty: "5 year Limited",
            vandor_Support: "http://www.samsung.com/us/support/#" 
        }]
    },
    {
        id: 10,
        img:"https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/642887_329706_01_front_thumbnail.jpg" ,
        title:"i7-11700K Rocket Lake 3.6GHz Eight-Core LGA 1200 Boxed Processor - Heatsink Not Included" ,
        price: 269.99 ,
        origin_price:309.99,
        shop: 35,
        cat:"Proccessors",
        description:[{
            SKU:"",
            UPC:"",
            warrranty: "5 year Limited",
            vandor_Support: "http://www.samsung.com/us/support/#" 
        }]
    },
    {
        id: 11,
        img:"https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0630282_195107.jpg" ,
        title: "AMD Ryzen 9 5950X Vermeer 3.4GHz 16-Core AM4 Boxed Processor - Heatsink Not Included",
        price: 479.99,
        origin_price:509.99,
        shop: 67,
        cat:"Processors",
        description:[{
            SKU:"",
            UPC:"",
            warrranty: "5 year Limited",
            vandor_Support: "http://www.samsung.com/us/support/#" 
        }]
    },
    {
        id: 12,
        img:"https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/643431_336560_01_front_thumbnail.jpg" ,
        title:"ASUS Z690 ROG Maximus DDR5 Intel LGA 1700 ATX Motherboard" ,
        price: 599.99 ,
        origin_price:609.99,
        shop: 35,
        cat:"Motherboards",
        description:[{
            SKU:"",
            UPC:"",
            warrranty: "5 year Limited",
            vandor_Support: "http://www.samsung.com/us/support/#" 
        }]
    },

]
