import React,{Component} from 'react';
import axios from 'axios';
class Search extends Component{

    getKey(e){
        e.preventDefault();
        const me= this.refs.input.value;
        const update = this.props;
        axios.post('http://localhost:3001/getlocations', {
            city:me,
        })
            .then(function (response) {
              update.callUpdate()
            })
            .catch(function (error) {
                console.log(error);
            });


        console.log(me)

    }
    render(){
        return(
            <form className="form-horizontal">
                <fieldset>
                    <legend>Search Nearby Places</legend>
                    <div className="col-ms-10">

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Search hear" ref="input"/>

                    </div>

                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary" onClick={this.getKey.bind(this)}>Search</button>
                    </div>
                </fieldset>
            </form>
            );
        }
    }
export  default Search;