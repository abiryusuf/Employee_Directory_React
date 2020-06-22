import React from "react";
import "./style.css";

class PageHeader extends React.Component{
    render(){
        return (
            <div className = "row h-150">
                <div className = "col-12 my-auto">
                    <div className = "text-center text-light page-header">
                        <h1> Employee Directory</h1>
                        <h3>
                        Click on triangles to sort, or enter name to filter by name (or
                        part of a name).
                        </h3>
                    </div>
                </div>
            </div>
        );
    }

}
export default PageHeader;