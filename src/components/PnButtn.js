import React, { Component } from 'react'

export default class PnButtn extends Component {
    render() {
        let {handleNextbttn, handlePrevbttn, page, totalResults} = this.props
        return (
            <div>
                <div className="container d-flex justify-content-between">
                    <button disabled= {page<=1} type="button" className="btn btn-dark" onClick={handlePrevbttn}>&laquo; Previous</button>
                    <button disabled= {page + 1 > Math.ceil(totalResults/10)} type="button" className="btn btn-dark" onClick={handleNextbttn}>Next &raquo;</button>

                </div>
            </div>
        )
    }
}
