import { VStack, Image, Text, Button } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const Card = ({ name, amount, img, handleCheckout }) => {
    return (
        <VStack>
            <Image src={img} boxSize={'64'} objectFit="cover" />
            <Text fontSize={"1.1em"} fontWeight={"500"}>{name}</Text>
            <Text>₹{amount}</Text>
            <Button onClick={()=>handleCheckout(amount)}>Buy Now</Button>
        </VStack>
    )
}

export default Card