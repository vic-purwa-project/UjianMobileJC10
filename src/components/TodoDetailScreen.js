import React from 'react'
import {} from 'react-native'
import { View, Container, Content, Card, CardItem, Text, H1, Button, Body } from 'native-base'

const TodoDetailScreen = props => {
    return (
        <Container>
            {/* <Content> */}
                <Card style={{ marginTop: '50%' }}>
                    <CardItem header>
                        <Body>
                            <H1>
                                Todo: 
                            </H1>
                            <Text note>
                                ID: 
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Status: 
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Date Created: 
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Date Completed: 
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Button info>
                            <Text>Go Back</Text>
                        </Button>
                    </CardItem>
                    <CardItem>
                        <Button info>
                            <Text onPress={() => props.navigation.navigate('TodoDetailScreen', {TodoData})}>Delete</Text>
                        </Button>
                    </CardItem>
                </Card>
            {/* </Content> */}
        </Container>
    )
}

export default TodoDetailScreen