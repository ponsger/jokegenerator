import React,{Fragment} from 'react'

export default function Button({askData}) {
  return (
    <Fragment>
        <button type='button' onClick={askData} >Generate Joke</button>
    </Fragment>
  )
}
