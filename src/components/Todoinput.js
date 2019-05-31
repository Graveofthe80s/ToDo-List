import React, { Component } from 'react'
import { classBody } from '@babel/types';

export default class Todoinput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props;

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className={
                                editItem? "input-group-text bg-success text-white" : "input-group-text bg-primary text-white"
                            }>
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input type="text" 
                        className="form-control text-capitalize" 
                        placeholder="To Do Item"
                        value={item}
                        onChange={handleChange} />
                        <button type="submit" className={
                            editItem? 'btn btn-block btn-success mt-3' : 'btn btn-block btn-primary mt-3'
                        }>
                            {editItem? 'Edit Item' : 'Add Item'}
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
