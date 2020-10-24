import React from 'react'
import { connect } from 'react-redux'

interface IMyPagesProps {
}

interface IMyPagesState {

}

class MyPages extends React.Component<IMyPagesProps, IMyPagesState> {
  constructor(props: any) {
    super(props)
    this.state = {  }
  }


  render() {
    return (
      <div>
        MyPages
      </div>
    )
  }
}

export default connect(null, null)(MyPages)
