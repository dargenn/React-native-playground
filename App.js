import React from 'react';
import {View, Text, Button, TextInput, CheckBox, Picker} from 'react-native';
import {StackNavigator} from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text1: String(),
            text2: String()
        };
    }

    render() {
        const {params} = this.props.navigation.state;
        const text1 = params ? params.text1 : null;
        const text2 = params ? params.text2 : null;
        const number1 = params ? params.number1 : null;
        const checkbox1 = params ? params.checkbox1 : null;
        const language = params ? params.language : null;

        return (
            <View>
                <Text>Widok nr 1</Text>
                <Text>Pole tekstowe nr 1:</Text>
                <TextInput
                    keyboardType='default'
                    placeholder='tekst1...'
                    value={this.state.text1.toString()}
                    onChangeText={(text) => this.setState({text1: text})}
                />

                <Text>Pole tekstowe nr 2:</Text>
                <TextInput
                    keyboardType='default'
                    placeholder='tekst2...'
                    value={this.state.text2.toString()}
                    onChangeText={(text) => this.setState({text2: text})}
                />
                <Button onPress={() => {
                    this.props.navigation.navigate('Screen2', {
                        text1: this.state.text1,
                        text2: this.state.text2,
                        number1: this.state.number1,
                        checkbox1: this.state.checkbox1,
                        language: this.state.language
                    })
                }} title={'Go to screen 2'}/>
            </View>
        );
    }
}

class Screen2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number1: String(),
            checkbox1: Boolean()
        };
    }

    render() {
        const {params} = this.props.navigation.state;
        const text1 = params ? params.text1 : null;
        const text2 = params ? params.text2 : null;
        const number1 = params ? params.number1 : null;
        const checkbox1 = params ? params.checkbox1 : null;
        const language = params ? params.language : null;

        return (
            <View>
                <Text>Widok nr 2</Text>
                <Text>Pole numeryczne nr 1:</Text>
                <TextInput
                    keyboardType='numeric'
                    placeholder='1'
                    value={this.state.number1.toString()}
                    onChangeText={(text) => this.setState({number1: text})}
                />
                <Text>Checkbox nr 1:</Text>
                <CheckBox
                    value={this.state.checkbox1}
                    onValueChange={(value) => this.setState({checkbox1: value})}
                />
                <Button onPress={() => this.props.navigation.navigate('Home', {
                    text1: text1,
                    text2: text2,
                    number1: this.state.number1,
                    checkbox1: this.state.checkbox1,
                    language: this.state.language
                })}
                        title={'Go to home screen '}/>
                <Button onPress={() => this.props.navigation.navigate('Screen3', {
                    text1: text1,
                    text2: text2,
                    number1: this.state.number1,
                    checkbox1: this.state.checkbox1,
                    language: this.state.language
                })}
                        title={'Go to screen 3'}/>
            </View>
        );
    }
}

class Screen3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: String()
        }
    }

    render() {
        const {params} = this.props.navigation.state;
        const text1 = params ? params.text1 : null;
        const text2 = params ? params.text2 : null;
        const number1 = params ? params.number1 : null;
        const checkbox1 = params ? params.checkbox1 : null;
        const language = params ? params.language : null;

        return (
            <View>
                <Text>Widok nr 3</Text>
                <Text>Lista nr 1:</Text>
                <Picker selectedValue={this.state.language} onValueChange={(value) => this.setState({language: value})}>
                    <Picker.Item label="C" value="C"/>
                    <Picker.Item label="C++" value="C++"/>
                    <Picker.Item label="C#" value="C#"/>
                </Picker>
                <Button onPress={() => this.props.navigation.navigate('Screen2', {
                    text1: text1,
                    text2: text2,
                    number1: number1,
                    checkbox1: checkbox1,
                    language: this.state.language
                })}
                        title={'Go to screen 2 '}/>
                <Button onPress={() => this.props.navigation.navigate('Screen4', {
                    text1: text1,
                    text2: text2,
                    number1: number1,
                    checkbox1: checkbox1,
                    language: this.state.language
                })}
                        title={'Go to screen 4'}/>
            </View>
        );
    }
}

class Screen4 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {params} = this.props.navigation.state;
        const text1 = params ? params.text1 : null;
        const text2 = params ? params.text2 : null;
        const number1 = params ? params.number1 : null;
        const checkbox1 = params ? params.checkbox1.checked ? 'true' : 'false' : 'false';
        const language = params ? params.language : null;

        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text>Widok nr 4, Podsumowanie:</Text>
                <Text>Pole tekstowe nr 1: {text1}</Text>
                <Text>Pole tekstowe nr 2: {text2}</Text>
                <Text>Pole numeryczne nr 1: {number1}</Text>
                <Text>Checkbox nr 1: {checkbox1}</Text>
                <Text>Lista nr 1: {language}</Text>
                <Button onPress={() => this.props.navigation.navigate('Screen3', {
                    text1: text1,
                    text2: text2,
                    number1: number1,
                    checkbox1: checkbox1,
                    language: language
                })} title={'Go to screen 3 '}/>
            </View>
        );
    }
}

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Screen2: {
            screen: Screen2,
        },
        Screen3: {
            screen: Screen3,
        },
        Screen4: {
            screen: Screen4
        }
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack/>;
    }
}