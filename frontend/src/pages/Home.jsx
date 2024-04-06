import { Box, Stack } from "@chakra-ui/react";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
    const handleCheckout = async (amount) => {
        const { data: { key } } = await axios.get("http://localhost:5000/api/getkey");

        const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Tamojit Das",
            description: "Khatron ka Khel Doston",
            image: "logo.jpg",
            order_id: order.id,
            callback_url: "http://localhost:5000/api/paymentverification",
            prefill: {
                name: "Test Account",
                email: "testacc@gmail.com",
                contact: "9999000077"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#38C2CC"
            }
        };
        
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <Box pt={[440, 8]}>
            <Stack
                height={"100vh"}
                alignItems="center"
                justifyContent="center"
                direction={["column", "row"]}
                spacing={4}
                align={["flex-start", "center"]}
            >
                <Card name={"Chicken Biryani"} amount={374} img={"biryani.jpeg"}
                    handleCheckout={handleCheckout} />
                <Card name={"Fried Rice"} amount={250} img={"friedRice.jpeg"}
                    handleCheckout={handleCheckout} />
                <Card name={"Bengali Thali"} amount={465} img={"bengali.jpg"}
                    handleCheckout={handleCheckout} />
                <Card name={"Chicken Momo"} amount={118} img={"momos.webp"}
                    handleCheckout={handleCheckout} />
                <Card name={"Tropical Sundae"} amount={287.29} img={"sundae.webp"}
                    handleCheckout={handleCheckout} />
            </Stack>
        </Box>
    )
}

export default Home