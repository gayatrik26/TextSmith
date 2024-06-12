import React from 'react'

export default function About(props) {
  return (
    <div>
      <div className="container mt-3" style={{color: props.mode==="light"?"#282c34":"white"}}>
        <h2 className="my-3 text-center">About App</h2>
        <p>
          TextSmith is a simple <strong>Text Utility</strong> web application made using Reactjs <br />
          It is a user-friendly text utility web application built with ReactJS. Our features include:
          <br /><br />
          - <strong>Uppercase Conversion:</strong>Transform text to uppercase.<br />
          - <strong>Lowercase Conversion:</strong> Convert text to lowercase.<br />
          - <strong>Case Inversion:</strong> Toggle the case of each letter.<br />
          - <strong>Text Replication:</strong> Duplicate your text.<br />
          - <strong>Clear Text:</strong> Erase all text instantly.<br />
        </p>
      </div>
    </div>
  )
}