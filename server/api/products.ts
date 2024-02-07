import { ProductStatus } from '~/types/product';

export default defineEventHandler((event) => {
    return {
        products: [
            {
                product: 'Macbook Pro 16 inch (2020) For Sale',
                serial: 'BA9212320',
                id: 1374,
                quantity: 122,
                total: 854.08,
                status: ProductStatus.purple,
                imageUrl:
                    'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/apple_mbp16m2_07_mbp_16_m2p_12c_19c_gpu_32_1tb_sg_1673986531_1746693.jpg',
            },
            {
                product: 'Gaming Chair, local pickup only',
                serial: 'BA9212320',
                id: 3933,
                quantity: 245,
                total: 943.65,
                status: ProductStatus.green,
                imageUrl:
                    'https://cdn.mos.cms.futurecdn.net/Yp3ECQTeEtRok86QMoEnwH.jpg',
            },
            {
                product: 'Macbook Air 13 inch (2020) For Sale',
                serial: 'KH9212924',
                id: 9374,
                quantity: 134,
                total: 779.58,
                status: ProductStatus.purple,
                imageUrl:
                    'https://pdbimg.choice.com.au/apple-macbook-air-13-inch-retina-2020-a2179_1.JPG',
            },
            {
                product: 'Heimer Miller Sofa (Mint Condition)',
                serial: 'SD9212969',
                id: 5560,
                quantity: 26,
                total: 275.43,
                status: ProductStatus.orange,
                imageUrl:
                    'https://img.vntg.com/15222572872047/original-herman-miller-vintage-tan-and-teak-eames-sofa.jpg',
            },
            {
                product: 'iPad Pro 2017 Model',
                serial: '012921097',
                id: 6065,
                quantity: 76,
                total: 475.22,
                status: ProductStatus.green,
                imageUrl:
                    'https://johnlewis.scene7.com/is/image/JohnLewis/236522169?$rsp-pdp-port-1440$',
            },
            {
                product: 'Gopro hero 7 (with receipt)',
                serial: 'BA9212320',
                id: 4349,
                quantity: 47,
                total: 219.78,
                status: ProductStatus.red,
                imageUrl:
                    'https://www.juzaphoto.com/shared_files/recensioni/gopro_hero7silver.jpg',
            },
            {
                product: 'Dell Computer Monitor',
                serial: 'SD9212969',
                id: 9359,
                quantity: 54,
                total: 105.55,
                status: ProductStatus.purple,
                imageUrl:
                    'https://www.bhphotovideo.com/images/images2500x2500/dell_p2416d_24_widescreen_led_1197315.jpg',
            },
            {
                product: 'AirPods Pro',
                serial: 'SD9212969',
                id: 8829,
                quantity: 132,
                total: 928.41,
                status: ProductStatus.purple,
                imageUrl:
                    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1572990352299',
            },
            {
                product: 'Playstation 4 Limited Edition',
                serial: 'SD9212969',
                id: 5045,
                quantity: 15,
                total: 473.85,
                status: ProductStatus.green,
                imageUrl:
                    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6290/6290575_sd.jpg',
            },
            {
                product: 'DJI Mavic Pro 2',
                serial: 'SD9212969',
                id: 3536,
                quantity: 39,
                total: 576.28,
                status: ProductStatus.purple,
                imageUrl:
                    'https://www.bhphotovideo.com/images/images2500x2500/dji_cp_ma_00000019_01_mavic_2_pro_1430449.jpg',
            },
        ],
    };
});
