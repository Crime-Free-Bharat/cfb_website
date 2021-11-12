import React from "react";
import terms from "../../img/terms.svg"
import terms2 from "../../img/terms2.svg"
function TnC(){
    return <div className="tc">
        <section id="" className="sectiontc">
        <div className="containertc containerterms" >
            <br />
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="sectionheadacttc">Terms and Conditions</h3>
                    <p className="sectionparaact">When you disobey the rule, you sell your freedom.</p>
                </div>
            </div>
            <br />
            <div className="row row2">
                <div className="col-sm-4">
                    <img src= {terms} alt="termsIMG" className="img-responsivetc stctionimgtc"></img>
                </div>
                <div className="col-sm-8">
                    <p>This website is developed and maintained by the organization, <b>National Technical Research and Development Committee, Crime -free Bharat (CFB).</b><br /> The purpose of this website is to provide information and help to people with the aim of development of the country and to provide aid to every stakeholder of the country i.e., people. 
</p>
                  
                </div>
            </div>
            <br /><br />
            <div className="row row2">
                <div className="col-sm-8">
                    <p ><b>With an earnest endeavor to ensure the accuracy of all the content on this website, the same should not be utilized without the knowledge of the organization for any statement of law or legal purposes.<br/> In case of any uncertainty, the user can always contact the organization for any professional direction. 
In case of any damage, loss, expense, or whatever is arising from the use of the website, CFB is not accountable for any expense, loss, or<br /><br />All the given terms and conditions shall be administered and taken over as per the Indian laws. Any dispute or distemper with these terms and conditions as listed above will regard to be a subject in the jurisdiction of the court of law.

</b></p>
    
                </div>
                <div className="col-sm-4">
                    <img 
                    src={terms2} 
                    alt="termsIMG" className="stctionimgtc stctionimgtc2"></img>
                </div>   <br />
            </div><br />

            <br /><br />
        </div>
    </section>
    </div>
}    
export default TnC;