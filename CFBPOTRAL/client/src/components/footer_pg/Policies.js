import React from "react"

function Policies(){
    return <div className="policies">

        <div className="currentpage">
            <a href="#">Home{'>>'}</a>
            <p>Website Policy</p>
        </div>

        <div className="list">
            <h1 id="heading">Website Policy</h1>
            <div className="policygrid">
                <div className="item">
                    <h3>1.Copyright Policy</h3>
                    <p>Material featured on this Website may be reproduced free of charge after taking proper permission
                        by sending a mail to us. However, the material has to be reproduced accurately and not to be
                        used in a derogatory manner or in a misleading context. Wherever the material is being published
                        or issued to others, the source must be prominently acknowledged. However, the permission to
                        reproduce this material shall not extend to any material which is identified as being copyright
                        of a third party. Authorisation to reproduce such material must be obtained from the
                        departments/copyright holders concerned.<br/>
                        These terms and conditions shall be governed by and construed in accordance with the Indian
                        Laws. Any dispute arising under these terms and conditions shall be subject to the exclusive
                        jurisdiction of the courts of India.</p>
                </div>
                <div className="item">
                    <h3>2.Hyperlinking policy</h3>
                    <p>Links to external websites/portals<br/>
                        At many places in this Website, you shall find links to other websites/portals. This links have
                        been placed for your convenience. [Department] is not responsible for the contents and
                        reliability of the linked websites and does not necessarily endorse the views expressed in them.
                        Mere presence of the link or its listing on this website should not be assumed as endorsement of
                        any kind. We can not guarantee that these links will work all the time and we have no control
                        over availability of linked pages.</p>
                </div>
                <div className="item">
                    <h3>Links to our website by other websites</h3>
                    <p>We do not object to you linking directly to the information that is hosted on this website and no
                        prior permission is required for the same. However, we would like you to inform us about any
                        links provided to this website so that you can be informed of any changes or updations therein.
                        Also, we do not permit our pages to be loaded into frames on your site. The pages belonging to
                        this website must load into a newly opened browser window of the User.</p>
                </div>
                <div className="item">
                    <h3>3.Privacy policy</h3>
                    <p>This website does not automatically capture any specific personal information from you, (like
                        name, phone number or e-mail address), that allows us to identify you individually.
                        Wherever the Website requests you to provide personal information, you will be informed for the
                        particular purposes for which the information is gathered and adequate security measures will be
                        taken to protect your personal information.<br/>
                        We do not sell or share any personally identifiable information volunteered on the website site
                        to any third party (public/private). Any information provided to this Website will be protected
                        from loss, misuse, unauthorized access or disclosure, alteration, or destruction.<br/>
                        We gather certain information about the User, such as Internet protocol (IP) addresses, domain
                        name, browser type, operating system, the date and time of the visit and the pages visited. We
                        make no attempt to link these addresses with the identity of individuals visiting our site
                        unless an attempt to damage the site has been detected.</p>
                </div>
            </div>
        </div>
    </div>;
}

export default Policies;