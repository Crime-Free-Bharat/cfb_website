import React from "react";
import logoimg from "../../img/logo.png";
import lawimg from "../../img/law.png";




function AnR() {
  return (
    <section id="" className="anrsection">
        <div className="container">
            <br/>
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="sectionheadact">Acts {"&"} Regulations</h3>
                    <p className="sectionparaact">When you disobey the rule, you sell your freedom.</p>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-sm-4">
                  <div className="anrimgmain">
                    <img src={logoimg} alt=""/>
                  </div>
                  </div>
                <div className="col-sm-8">
                    <p style={{textAlign: "justify"}}>
                      The term <b>“Arrest”</b> is very common term that we pick up a lot in our day today life. Normally, we see a person, who do or have done something against the law, get <b>arrested</b>. Generally, the term <b>“arrest”</b> in its ordinary sense, means the apprehension or restraint or the deprivation of one’s personal liberty. in Indian law, Criminal procedure Code, 1973 in its chapter V (section 41 to 60) deals with Arrest of a person. 
                    </p>
                    <h3>This code propose two types of arrests:</h3>
                    <ul>
                        <li>Arrest made in pursuance of a warrant issued by a magistrate.</li>
                        <li>Arrest made without such a warrant but made in accidence with some legal provision permitting such arrest.</li>
                        
                    </ul>
                </div>
            </div>
            <br/><br/>
            <div className="row">
                <div className="col-sm-8">
                    <h3>Acts under which citizen can arrested</h3>
                        <ul>
                            <li>The code exempts the members of Armed forces from being arrested for anything done by them in discharge of their official duties except after obtaining the consent of the government (Sec. 45).</li>
                            <li>Any private individual may arrest a person only when the person a proclaimed offender and the person commits a non bailable offence and cognizable offences in his presence (sec. 43).</li>
                            <li>Any magistrate (whether Executive or judicial) may arrest a person without a warrant (sec. 44).</li>
                            <li>Under section 41, Arrest by police officer can be made without warrant only in cognizable offences (sec.2(c)) and with warrant in non- cognizable offence (sec 2 (l)).</li>
                            <li>Females are not be arrested without the presence of a lady constable and further no female be arrested after sun-set but there are exception in some cases, where crime is very serious and arrest is important then arrest can be made with special orders and it depends on facts and circumstances of each case.</li>
                            <li>The salutary principle that the medical examination of a female should be made by female medical practitioner has been embodied in sec 53(2).</li>
                            <li>Sec 54-A empowers the court to direct specifically the holding of the identification of the arrested person at the request of the prosecution.</li>
                            <li>Arrest to be made strictly according to the code (Sec 60A) – “No arrest shall be made except in accordance with provision of this code or any other law for time being in force providing the arrest”.</li>
                          </ul>
                </div>
                <div className="col-sm-4">
                  <div className="anrimgmain">
                    <img src={lawimg}alt=""/><br/><br/><br/>
                  </div>
                </div> 
                <br/><br/><hr className="new5"/><br/><br/>
            <div className="col-md-12">
              <h3>Human Rights Act’s</h3>
              <p style={{"textAlign": "justify", "color": "black"}}>In India NHRC( NATIONAL HUMAN RIGHTS COMMISSION ) is a statutory public body Constituted on 12th October 1993. Under the protection of human rights ordinance of 28th September 1993. It was given a statutory basis by the Protection of Human Rights Act, 1993 (PHRA). The NHRC is the National Human Rights Commission of India, responsible for the protection and promotion of human rights, defined by the Act as "Rights Relating To Life, liberty, equality and dignity of the individual guaranteed by the constitution or embodied in the International Covenants and enforceable by courts in India".</p>
              <ul>
                <li>Human Rights court is also established under section 30 of the Act for the purpose of providing speedy trial of offences arising out of violation of human rights.</li>
                <li>The commission may look into court proceedings pending for violation of human rights, keep a check on jails, spread human rights literacy, and encourage non-governmental organisations to work in the field of human rights. The Commission under section 13, while inquiring into complaints under the Act shall have all the powers of a civil court trying a suit under the Code of Civil Procedure, 1908.</li>
                <li>Every proceeding before the Commission shall be a judicial proceeding under sections 193, 228, and 196 of the Indian Penal Code, and the Commission shall be deemed to be a civil court for all the purposes of section 195 and Chapter XXVI of the Code of Criminal Procedure, 1973.</li>
                <li>The Commission is bestowed with investigation powers while taking help of government officer’s under section 14.</li>
                <li>Commission under section 19 is granted special powers with respect to human right violations made by armed forces.</li>
              </ul>

            </div>  
            </div>
            <br/><br/>
       </div></section>
  );
}
export default AnR;
