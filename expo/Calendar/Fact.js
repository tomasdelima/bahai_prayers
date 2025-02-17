export default class Fact extends React.Component {
  state = {hideDescription: true}

  toggleDescription () {
    this.setState({hideDescription: !this.state.hideDescription || !this.props.fact.description})
  }

  render () {
    return <TouchableHighlight underlayColor='rgba(128, 128, 128, 0.3)' onPress={this.toggleDescription} style={[s.padding]}>
      <View>
        <Text style={[{fontSize: 20}]}>
          <Text style={[t[this.props.theme].purpleText]}>{this.props.fact.year} </Text>
          <Text style={[t[this.props.theme].text]}> {this.props.fact.name}</Text>
        </Text>
        <Collapsible collapsed={this.state.hideDescription}>
          <Text style={[t[this.props.theme].text, {paddingTop: 10, fontSize: 18, opacity: 0.7}]}>{this.props.fact.description}</Text>
        </Collapsible>
      </View>
    </TouchableHighlight>
  }
}
