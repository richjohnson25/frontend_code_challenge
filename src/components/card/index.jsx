import { Card, CardSection } from "@mantine/core";
import Image from "next/image";

export default function ProductCard(information){
    return (
        <Card withBorder>
            <CardSection>
                <Image
                    src="https://poultry.extension.org/wp-content/uploads/2019/02/shutterstock_531404539-1024x684.jpg"
                    width={500}
                    height={300}
                    alt="product"
                />
            </CardSection>
            <h1>Poultry</h1>
            <p>Our main product, as JAPFA is the leading Total Poultry Solutions Provider in Indonesia</p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full">R</button>
        </Card>
    )
}