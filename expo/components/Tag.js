import React from 'react'

export default class Tag extends React.Component {
  render() {
    return <Flex padding={10} onPress={() => {}}>
      {this.props.tag.Name}
    </Flex>
  }
}
