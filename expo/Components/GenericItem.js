export default class GenericItem extends React.Component {
  onPress = () => {
    let { to, field, id, label, historyMethod } = this.props
    historyMethod = historyMethod || 'push'
    store[field] = id
    store.label = label

    if (historyMethod == 'push') {
      store.topBarLabels.push(store.label || store.topBarLabel)
    }

    history[historyMethod](to)
  }

  renderRegularItem () {
    let { label, children } = this.props

    return <Flex stretch2
      onPress={this.onPress}
      style={s.borders([0, 0, 1], theme[2])}
    >
      {label ? <Write padding={20}>{label}</Write> : children}
    </Flex>
  }

  renderAggregator () {
    return <Flex stretch2 row spacedIn
      onPress={() => {}}
      style={s.bg6}
    >
      <Write padding={20}>{this.props.id}</Write>

      <Flex padding={20} shrink>
        <FontAwesome5 name='chevron-down' size={18} />
      </Flex>
    </Flex>
  }

  render () {
    return this.props.type == 'aggregator' ? this.renderAggregator() : this.renderRegularItem()
  }
}
