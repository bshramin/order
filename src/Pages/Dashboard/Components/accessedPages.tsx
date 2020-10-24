import React from 'react'
import { connect } from 'react-redux'

interface IAcccessedPagesProps {
}

interface IAcccessedPagesState {

}

class AcccessedPages extends React.Component<IAcccessedPagesProps, IAcccessedPagesState> {
  constructor(props: any) {
    super(props)
    this.state = {  }
  }


  render() {
    return (
      <div>
        AcccessedPages
      </div>
    )
  }
}

export default connect(null, null)(AcccessedPages)
