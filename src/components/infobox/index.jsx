import Image from "next/image"

export default function ProductInfo(information){
    return (
        <div className="flex flex-row gap-4">
            <section className="flex-1/2 items-center justify-center">
                <Image
                    src={information.imageUrl}
                    width={450}
                    height={180}
                    alt="product"
                />
            </section>
            <section className="flex flex-col flex-1 gap-2">
                <h1 className="text-xl font-bold">{information.productName}</h1>
                <p>{information.description}</p>
                <p>{information.brands}</p>
            </section>
        </div>
    )
}