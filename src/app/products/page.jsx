'use client'
import ProductInfo from "@/components/infobox"
import Image from "next/image"

export default function ProductsPage(){
    return (
        <>
            <div name="ProductsPage">
                <section name="productsHeader" className="bg-red-100" style={{ width: '100%', height: '400px', position: 'relative' }}>
                    <Image
                        src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/thumb/images/our-business/poultry-overview/cover_w1440_h450_1440-ov-poult.jpg'
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="Header Section"
                    />
                    <div className="bg-gray-900/50 flex flex-col justify-center items-center gap-8 px-40 absolute inset-0">
                        <h1 className="text-orange-500 text-5xl font-bold">Our Products</h1>
                        <p className="text-white text-center text-xl">We offer various types of products and services that are integrated from upstream to downstream, particularly in the animal feed industry, poultry breeding and commercial farming, aquaculture, beef cattle farming and consumer product processing.</p>
                    </div>
                </section>

                {/*Bagian ini menggunakan refactoring pada komponen ProductInfo*/}
                <section className="flex flex-col justify-center gap-8 mx-20 py-20">
                    <ProductInfo imageUrl='https://poultry.extension.org/wp-content/uploads/2019/02/shutterstock_531404539-1024x684.jpg'
                    productName='Poultry'
                    description='Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. It is one of the two most widely-eaten types of meat globally along with pork. Poultry farming and processing operations are handled by JAPFA subsidiaries PT Ciomas Adisatwa (Ciomas) and PT So Good Food (SGF).'
                    brands='Poultry product brands: Ayam ULU, TORA DUO, Mom & Spice, Dosuka, BESTCHICKEN, and the newly launched Olagud' />
                    <ProductInfo imageUrl='https://www.cameronsseafood.com/wp-content/uploads/2020/01/caliseafood.jpg'
                    productName='Seafood'
                    description='Seafood is the culinary name for food that comes from any form of sea life, prominently fish and shellfish such as shrimps and crabs. JAPFA subsidiary PT Suri Tani Pemuka (STP) is in charge of aquaculture or seafood farming and processing operations.'
                    brands='Seafood product brands: Seafood Lovers, JAPFA Prime Seafood, Ichi No-ji, and Toba Tilapia' />
                    <ProductInfo imageUrl='https://www.mychicagosteak.com/steak-university/wp-content/uploads/2019/05/raw-steak-compressor.jpg'
                    productName='Beef'
                    description='Beef is the culinary name for meat from cattle. It can be prepared in various ways: cuts are often used for steak, while trimmings are often ground or minced, as found in most hamburgers. Beef is produced through cattle breeding business run by JAPFA subsidiary PT Santosa Agrindo (Santori).'
                    brands='Beef product brands: Tokusen, Bifuteki, and Santori Beef' />
                </section>
            </div>
        </>
    )
}