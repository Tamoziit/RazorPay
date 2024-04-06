import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
    const searchQuery = useSearchParams()[0]; //to search url params for ref id.
    const referenceNum = searchQuery.get("reference");

    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"}>
                <Heading textTransform={"uppercase"}>Order Successfull</Heading>
                <Text>
                    Reference no.: {referenceNum}
                </Text>
            </VStack>
        </Box>
    )
}

export default PaymentSuccess