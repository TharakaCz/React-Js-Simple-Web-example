import React,{Component} from 'react';
import './ResultList.css';
class Resultlist extends Component{
    render(){
        if (this.props.resultPlaces.results !== undefined) {
            var placeList = this.props.resultPlaces.results.map(name=>{
                // console.log("result list items",name)
                return(
                    <li key={name.id}>{name.name}</li>
                )
            })
        }
        return(
            <div className="row" key={name.id}>
                <div className="list-group">
                    <div className="list-group-item clearfix">
                        <div className="profile-img"><img src={name.icon} alt=""/></div>
                    </div>
                    <div className="profile-teaser-main">
                        <h2 className="profile-name">{name.name}</h2>
                        <div className="profile-into">
                            <div className="into"><span className="">Address</span>{name.formatted_address}</div>
                            <div className="into"><button className="btn btn-primary" onClick={()=>this.props.savePlace(name.name)}></button></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export  default Resultlist;