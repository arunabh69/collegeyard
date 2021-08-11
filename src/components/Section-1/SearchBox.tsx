import React, {Component} from 'react'

class SearchBox extends Component<any, any>{


    render() {
        return (
            <div className="searchbox">
                <input type="text" id="Search" placeholder="Search..."/>
            </div>
        )
    }
}


export default SearchBox;