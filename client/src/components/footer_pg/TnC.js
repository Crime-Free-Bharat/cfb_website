import React from "react";
import terms from "../../img/terms.svg"
import terms2 from "../../img/terms2.svg"
function TnC(){
    return <div>
        <section id="" className="section sectionterms">
        <div className="container containerterms" >
            <br />
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="sectionheadact">Terms and Conditions</h3>
                    <p className="sectionparaact">When you disobey the rule, you sell your freedom.</p>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-4">
                    <img src= {terms} alt="termsIMG" className="img-responsive stctionimg"></img>
                </div>
                <div className="col-sm-8">
                    <p style={{textAlign: "justify"}}><b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum ex alias consectetur consequatur nam ad neque. Eaque sint recusandae alias consectetur mollitia? Sapiente maxime repudiandae explicabo, fuga corporis repellendus!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum ex alias consectetur consequatur nam ad neque. Eaque sint recusandae alias consectetur mollitia? Sapiente maxime repudiandae explicabo, fuga corporis repellendus!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum ex alias consectetur consequatur nam ad neque. Eaque sint recusandae alias consectetur mollitia? Sapiente maxime repudiandae explicabo, fuga corporis repellendus!</b></p>
                    <ul>
                        <li>lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-sm-8">
                    <p style={{textAlign: "justify"}}><b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum ex alias consectetur consequatur nam ad neque. Eaque sint recusandae alias consectetur mollitia? Sapiente maxime repudiandae explicabo, fuga corporis repellendus!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum ex alias consectetur consequatur nam ad neque. Eaque sint recusandae alias consectetur mollitia? Sapiente maxime repudiandae explicabo, fuga corporis repellendus!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum ex alias consectetur consequatur nam ad neque. Eaque sint recusandae alias consectetur mollitia? Sapiente maxime repudiandae explicabo, fuga corporis repellendus!</b></p>
                        <ul>
                            <li>lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li>lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li>lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        </ul>
                </div>
                <div className="col-sm-4">
                    <img 
                    src={terms2} 
                    alt="termsIMG" className="img-responsive stctionimg"></img>
                </div>   
            </div>
            <br /><br />
        </div>
    </section>
    </div>
}    
export default TnC;