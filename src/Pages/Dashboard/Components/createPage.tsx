import React from 'react'
import { connect } from 'react-redux'

interface ICreatePageProps {
}

interface ICreatePageState {

}

class CreatePage extends React.Component<ICreatePageProps, ICreatePageState> {
  constructor(props: any) {
    super(props)
    this.state = {  }
  }


  render() {
    return (
      <div>
        CreatePage
      </div>
    )
  }
}

export default connect(null, null)(CreatePage)
