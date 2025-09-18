import {Button, Flex, Text} from "@radix-ui/themes";


export const HelloComponent = () => {
    return (
        <Flex direction="column" gap="2">
            <Text>Hello from Landing page :)</Text>
            <Button>Let's go</Button>
        </Flex>
    );
}