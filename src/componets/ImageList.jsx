import { Component } from "react";
import { connect } from "react-redux";
class ImageList extends Component {
  
    render() {
        const { searchResults } = this.props;
        
    return (
      <>
        <div className="container ">
          <div className="marginTop ">
            <div>
              <h1>Rendom</h1>
              <p className="">40 Image has been found</p>
            </div>
              <div >
                <div  className="d-flex flex-wrap gap">
            {searchResults.map((result) => (
                  <div key={result.id}  className="card"  style={{ width: "18rem" }}>
                    <img src={result.urls.small} className="card-img-top" alt="..." />
                  </div>
                  
                  
                  ))}
                  </div>
              </div>
             <div className="text-center mt-5">
                  <button className="btn btn-dark  shadow-lg btn2 ">
                    Load More
                  </button>
                </div>
            
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
    searchResults: state.searchResults,
  });
  

export default connect(mapStateToProps)(ImageList);
