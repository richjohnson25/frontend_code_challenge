import { Card, CardSection } from "@mantine/core";
import Image from "next/image";

export default function ProductCard(information){
    return (
        <Card className="flex gap-2" padding="lg" withBorder>
            <CardSection>
                <Image
                    src={information.imageUrl}
                    width={600}
                    height={200}
                    alt="product"
                />
            </CardSection>
            <h1 className="text-xl font-bold">{information.productName}</h1>
            <p className="h-44">{information.description}</p>
        </Card>
    )
}