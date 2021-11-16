import React, {useState} from "react";

const Report_crime = () => {
  const [userData, setUserData] = useState({
    category: "",
    date: "",
    state: "",
    district: "",
    policestation: "",
    victimImage: "",
    victimReport: "",
    suspectName: "",
    suspectImage: "",
    suspectReport: "",
  });

  //  ===================================== Storing data in state  ============================
  const handleInputs = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData, [name]: value});
  };

  //  ===================================== Send the Data to backend  ============================
  const reportForm = async e => {
    e.preventDefault();
    const {
      category,
      date,
      state,
      district,
      policestation,
      victimImage,
      victimReport,
      suspectName,
      suspectImage,
      suspectReport,
    } = userData;
    if (
      !category ||
      !date ||
      !state ||
      !district ||
      !policestation ||
      !victimImage ||
      !victimReport ||
      !suspectName ||
      !suspectImage ||
      !suspectReport
    ) {
      alert("Please Fill The All Details in Report");
    } else {
      const res = await fetch("/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
          date,
          state,
          district,
          policestation,
          victimImage,
          victimReport,
          suspectName,
          suspectImage,
          suspectReport,
        }),
      });
      const data = await res.json();
      setUserData({...userData, name: data.name});
      if (!data || res.status === 400) {
        alert("please Login or Fill all Fields");
      } else {
        alert("Report Filed");
        setUserData({
          ...userData,
          category: "",
          date: "",
          state: "",
          district: "",
          policestation: "",
          victimImage: "",
          victimReport: "",
          suspectName: "",
          suspectImage: "",
          suspectReport: "",
        });
      }
    }
  };

  //adding image

  return (
    <>
      <div className="reportcontainer">
        <div className="col-sm-12">
          <h3 className="sectionheadreport">Report a Crime</h3>
          <p className="sectionparareport">
            The effectiveness of police activities is enhanced by the support of
            citizens in
            <br /> every community that wants to feel safe and secure.
          </p>
        </div>

        <div className="col-12 boxstyle">
          <h3>Complain Details</h3>
        </div>
        <div className="victimbox">
          <div className="reportrow">
            <div>
              <span>Category Of Complaints :-</span>
              <select
                type="text"
                className="form-control"
                placeholder="Category of Complain"
                name="category"
                onChange={handleInputs}
                required>
                <option style={{background: "#c4c4c4"}}>---Select---</option>
                <option value="Murder"> Murder </option>
                <option value="Rape"> Rape </option>
                <option value="Molestation"> Molestation </option>
                <option value="Ragging"> Ragging </option>
              </select>
            </div>
            <div>
              <span>Date :-</span>
              <input
                type="date"
                id="name"
                placeholder=""
                name="date"
                onChange={handleInputs}
                className="form-control"
              />
            </div>
          </div>

          <div className="reportrow">
            <div>
              <span>State :-</span>
              <select
                type="text"
                className="form-control"
                placeholder="Category of Complain"
                name="state"
                onChange={handleInputs}>
                <option style={{background: "#c4c4c4"}}>---Select---</option>

                <option>ANDAMAN &amp; NICOBAR</option>
                <option>ANDHRA PRADESH</option>
                <option>ARUNACHAL PRADESH</option>
                <option>ASSAM</option>

                <option>BIHAR</option>

                <option>CHANDIGARH</option>
                <option>CHHATTISGARH</option>

                <option>DADRA &amp; NAGAR HAVELI AND DAMAN &amp; DIU</option>
                <option>DELHI</option>

                <option>GOA</option>
                <option>GUJARAT</option>

                <option>HARYANA</option>
                <option>HIMACHAL PRADESH</option>

                <option>JAMMU &amp; KASHMIR</option>
                <option>JHARKHAND</option>

                <option>KARNATAKA</option>
                <option>KERALA</option>

                <option>LADAKH</option>
                <option>LAKSHADWEEP</option>

                <option>MADHYA PRADESH</option>
                <option>MAHARASHTRA</option>
                <option>MANIPUR</option>
                <option>MEGHALAYA</option>
                <option>MIZORAM</option>

                <option>NAGALAND</option>

                <option>ODISHA</option>

                <option>PUDUCHERRY</option>
                <option>PUNJAB</option>

                <option>RAJASTHAN</option>

                <option>SIKKIM</option>

                <option>TAMIL NADU</option>
                <option>TELANGANA</option>
                <option>TRIPURA</option>

                <option>UTTARAKHAND</option>
                <option>UTTAR PRADESH</option>

                <option>WEST BENGAL</option>
              </select>
            </div>
            <div>
              <span>District :-</span>
              <select
                className="form-control"
                name="district"
                onChange={handleInputs}>
                <option selected style={{background: "#c4c4c4"}}>
                  ---Select---
                </option>
                <option>CENTRAL</option>
                <option>CRIME BRANCH</option>
                <option>DWARKA</option>
                <option>EAST</option>
                <option>E-DISTRICT</option>
                <option>EOW</option>
                <option>IGI AIRPORT</option>
                <option>METRO</option>
                <option>NEW DELHI</option>
                <option>NORTH</option>
                <option>NORTH EAST</option>
                <option>NORTH WEST</option>
                <option>OUTER DISTRICT</option>
                <option>OUTER NORTH</option>
                <option>RAILWAYS</option>
                <option>ROHINI</option>
                <option>SHAHDARA</option>
                <option>SOUTH</option>
                <option>SOUTH-EAST</option>
                <option>SOUTH WEST</option>
                <option>SPECIAL CELL(SB)</option>
                <option>SPECIAL POLICE UNIT FOR WOMEN &amp; CHILDREN</option>
                <option>VIGILANCE</option>
                <option>WEST</option>
              </select>
            </div>
          </div>

          <div className="reportrow">
            <div>
              <span>Police Station :-</span>
              <select
                name="policestation"
                className="form-control"
                onChange={handleInputs}>
                <option selected style={{background: "#c4c4c4"}}>
                  ---Select---
                </option>
                <option disabled style={{background: "#c4c4c4"}}>
                  District South, District Courts Saket, Delhi-110 017
                </option>
                <option>Ambedkar Nagar Police Station</option>
                <option>Fetehpur Beri Police Station</option>
                <option>Hauz Khas Police Station</option>
                <option>INA Metro Police Station</option>
                <option>Malviya Nagar Police Station</option>
                <option>Mehrauli Police Station</option>
                <option>Neb Sarai Police Station</option>
                <option>Qutab Minar Metro Police Station</option>
                <option>Safdarjung Enclave Police Station</option>
                <option>Saket Police Station</option>
                <option>Sangam Vihar Police Station</option>
                <option disabled style={{background: "#c4c4c4"}}>
                  District South-East, District Courts Saket, Delhi-110 017
                </option>
                <option>Amar Colony Police Station</option>
                <option>Badar Pur Police Station</option>
                <option>Chitranjan Park Police Station</option>
                <option>Defence Colony Police Station</option>
                <option>Govind Puri Police Station</option>
                <option>Greater Kailash Police Station</option>
                <option>Hazrat Nizamuddin Police Station</option>
                <option>Jaitpur Police Station</option>
                <option>Jamia Nagar Police Station</option>
                <option>Kalkaji Metro Police Station</option>
                <option>Kalkaji Police Station</option>
                <option>Kotla Mubarak Pur Police Station</option>
                <option>Lajpat Nagar Metro Police Station</option>
                <option>Lajpat Nagar Police Station</option>
                <option>Lodhi Colony Police Station</option>
                <option>New Friends Colony Police Station</option>
                <option>Okhla Industrial Area Police Station</option>
                <option>Pul Prahlad Pur Police Station</option>
                <option>Sarita Vihar Police Station</option>
                <option>Sunlight Colony Police Station</option>
                <option disabled style={{background: "#c4c4c4"}}>
                  District Central, District Courts Tis Hazari, Delhi-110 054.
                </option>
                <option>Bara Hindu Rao Police Station</option>
                <option>Burari Police Station</option>
                <option>Chandni Mahal Police Station</option>
                <option>Civil Lines Police Station</option>
                <option>Companies Act</option>
                <option>Darya Ganj Police Station</option>
                <option>DBG Road Police Station</option>
                <option>Delhi Cantt. Railway Police Station</option>
                <option>Gulabi Bagh Police Station</option>
                <option>Hauz Qazi Police Station</option>
                <option>Hazrat Nizamuddin Railway Police Station</option>
                <option>I.P. Estate Police Station</option>
                <option>Income Tax Act</option>
                <option>Jama Masjid Police Station</option>
                <option>Kamla Market Police Station</option>
                <option>Karol Bagh Police Station</option>
                <option>Kashmere Gate Metro Police Station</option>
                <option>Kashmere Gate Police Station</option>
                <option>Kotwali Police Station</option>
                <option>Lahori Gate Police Station</option>
                <option>Maurice Nagar Police Station</option>
                <option>Nabi Karim Police Station</option>
                <option>New Delhi Railway Station (NDLS)</option>
                <option>Old Delhi Railway Station (Railway Main Delhi)</option>
                <option>Pahar Ganj Police Station</option>
                <option>Prasad Nagar Police Station</option>
                <option>Railway Protection Force (RPF)</option>
                <option>Rajinder Nagar Police Station</option>
                <option>Roop Nagar Police Station</option>
                <option>Sadar Bazar Police Station</option>
                <option>Sarai Rohilla Police Station</option>
                <option>Sarai Rohilla Railway Police Station</option>
                <option>Seed Act</option>
                <option>Subzi Mandi Police Station</option>
                <option>Subzi Mandi Railway Police Station</option>
                <option>
                  The Prevention of Cruelty of Animal Act 1960 (SPCA)
                </option>
                <option>Timarpur Police Station</option>
                <option>Wild Life Protection Act, 1972</option>
                <option disabled style={{background: "#c4c4c4"}}>
                  District West, District Courts Tis Hazari, Delhi-110 054.
                </option>
                <option>Anand Parbat Police Station</option>
                <option>Hari Nagar Police Station</option>
                <option>Janak Puri Metro Police Station</option>
                <option>Khyala Police Station</option>
                <option>Kirti Nagar Police Station</option>
                <option>Maya Puri Police Station</option>
                <option>Mianwali Nagar Police Station</option>
                <option>Moti Nagar Police Station</option>
                <option>Mundka Police Station</option>
                <option>Nangloi Police Station</option>
                <option>Nihal Vihar Police Station</option>
                <option>Paschim Vihar Police Station</option>
                <option>Patel Nagar Police Station</option>
                <option>Punjabi Bagh Police Station</option>
                <option>Raja Garden Metro Police Station</option>
                <option>Rajouri Garden Police Station</option>
                <option>Ranhola Police Station</option>
                <option>Ranjeet Nagar Police Station</option>
                <option>Tilak Nagar Police Station</option>
                <option disabled style={{background: "#c4c4c4"}}>
                  District New Delhi, District Courts Patiala House, Delhi-110
                  001.
                </option>
                <option>Barakhamba Road Police Station</option>
                <option>Central Secretariat Metro Police Station</option>
                <option>Chanakya Puri Police Station</option>
                <option>Connaught Place Police Station</option>
                <option>Customs</option>
                <option>Delhi Cantt. Police Station</option>
                <option>Directorate of Revenue Intelligence</option>
                <option>FERA</option>
                <option>IGI Airport Police Station</option>
                <option>IGI Metro Police Station</option>
                <option>Inder Puri Police Station</option>
                <option>Mandi House Metro Police Station</option>
                <option>Mandir Marg Police Station</option>
                <option>Naraina Police Station</option>
                <option>North Avenue Police Station</option>
                <option>Parliament Street Police Station</option>
                <option>Prevention of Food Adulteration Act</option>
                <option>R.K. Puram Police Station</option>
                <option>Sagar Pur Police Station</option>
                <option>Sarojini Nagar Police Station</option>
                <option>South Avenue Police Station</option>
                <option>South Campus Police Station</option>
                <option>Special Cell Police Station</option>
                <option>Tilak Marg Police Station</option>
                <option>Tuglak Road Police Station</option>
                <option>Vasant Kunj North Police Station</option>
                <option>Vasant Kunj South Police Station</option>
                <option>Vasant Vihar Police Station</option>
                <option disabled style={{background: "#c4c4c4"}}>
                  District East, District Courts Karkardooma, Delhi-110 032
                </option>
                <option>Gandhi Nagar Police Station</option>
                <option>Gazi Pur Police Station</option>
                <option>Geeta Colony Police Station</option>
                <option>Kalyan Puri Police Station</option>
                <option>Krishna Nagar Police Station</option>
                <option>Mandawali Police Station</option>
                <option>Mayur Vihar Police Station</option>
                <option>New Ashok Nagar Police Station</option>
                <option>Pandav Nagar Police Station</option>
                <option>Preet Vihar Police Station</option>
                <option>Shakar Pur Police Station</option>
                <option disabled style={{background: "#c4c4c4"}}>
                  District North-East, District Courts Karkardooma, Delhi-110
                  032
                </option>
                <option>Bhajan Pura Police Station</option>
                <option>Gokul Puri Police Station</option>
                <option>Karawal Nagar Police Station</option>
                <option>Khajoori Khas Police Station</option>
                <option>New Usman Pur Police Station</option>
                <option>Seelampur Police Station</option>
                <option>Shastri Park Metro Police Station</option>
                <option>Sonia Vihar Police Station</option>
                <option disabled style={{background: "#c4c4c4"}}>
                  District Shahdara, District Courts Karkardooma, Delhi-110 032
                </option>
                <option>Anand Vihar Police Station</option>
                <option>Anand Vihar Railway Police Station</option>
                <option>Farash Bazar Police Station</option>
                <option>GTB Enclave Police Station</option>
                <option>Harsh Vihar Police Station</option>
                <option>Jagat Puri Police Station</option>
                <option>Jyoti Nagar Police Station</option>
                <option>Madhu Vihar Police Station</option>
                <option>Mansarover Park Police Station</option>
                <option>Nand Nagri Police Station</option>
                <option>Seema Puri Police Station</option>
                <option>Shahdara Police Station</option>
                <option>Vivek Vihar Police Station</option>
                <option>Welcome Police Station</option>
                <option disabled style={{background: "#c4c4c4"}}>
                  District North-West, District Courts Rohini, Delhi-110 085
                </option>
                <option>Aman Vihar Police Station</option>
                <option>Ashok Vihar Police Station</option>
                <option>Begum Pur Police Station</option>
                <option>Bharat Nagar Police Station</option>
                <option>Kanjhawala Police Station</option>
                <option>Keshav Puram Police Station</option>
                <option>Mangol Puri Police Station</option>
                <option>Maurya Enclave Police Station</option>
                <option>Rani Bagh Police Station</option>
                <option>Rithala Metro Police Station</option>
                <option>Rohini North Police Station</option>
                <option>Rohini South Police Station</option>
                <option>Shalimar Bagh Police Station</option>
                <option>Subhash Palace Police Station</option>
                <option>Sultan Puri Police Station</option>
                <option>Udyog Nagar Metro Police Station</option>
                <option>Vijay Vihar Police Station</option>
                <option disabled style={{background: "#c4c4c4"}}>
                  District North, District Courts Rohini, Delhi-110 085
                </option>
                <option>Adarsh Nagar Police Station</option>
                <option>Ali Pur Police Station</option>
                <option>Bawana Police Station</option>
                <option>Bhalswa Dairy Police Station</option>
                <option>Jahangir Puri Police Station</option>
                <option>K.N. Katju Marg Police Station</option>
                <option>Mahendra Park Police Station</option>
                <option>Model Town Police Station</option>
                <option>Mukherjee Nagar Police Station</option>
                <option>Narela Industrial Area Police Station</option>
                <option>Prashant Vihar Police Station</option>
                <option>Samai Pur Badli Police Station</option>
                <option>Shahabad Dairy Police Station</option>
                <option>Swaroop Nagar Police Station</option>
                <option disabled style={{background: "#c4c4c4"}}>
                  District South-West, District Courts Dwarka, Delhi-110 075
                </option>
                <option>Baba Haridas Nagar Police Station</option>
                <option>Binda Pur Police Station</option>
                <option>Chhawla Police Station</option>
                <option>Dabri Police Station</option>
                <option>Delhi Cantonment Board</option>
                <option>Dwarka North Police Station</option>
                <option>Dwarka Sector-23 Police Station</option>
                <option>Dwarka South Police Station</option>
                <option>Jaffarpur Kalan Police Station</option>
                <option>Janak Puri Police Station</option>
                <option>Kapashera Police Station</option>
                <option>Najafgarh Police Station</option>
                <option>Palam Domestic Airport Police Station</option>
                <option>Palam Village Police Station</option>
                <option>Uttam Nagar Police Station</option>
                <option>Vikas Puri Police Station</option>
              </select>
            </div>
            <div>
              <span>Victim Image/Video :-</span>
              <input
                type="file"
                className="form-control"
                id="upload_file"
                name="victimImage"
                onChange={handleInputs}
                // required
              />
            </div>
          </div>

          <div className="reportrowtext">
            <span>Victim Report :-</span>
            <textarea
              type="text"
              className="form-control"
              rows="5"
              placeholder="report with  Village name and district name"
              name="suspectReport"
              onChange={handleInputs}></textarea>
          </div>
        </div>

        <div className="col-12 boxstyle">
          <h3>Suspect Details</h3>
        </div>
        <div className="suspectbox">
          <div className="reportrow">
            <div>
              <span>Suspect Full Name</span>
              <input
                type="text"
                className="form-control"
                placeholder="Suspect Name"
                onChange={handleInputs}
                name="suspectName"
              />
            </div>
            <div>
              <span>Suspect Image</span>
              <input
                type="file"
                className="form-control"
                id="upload_file"
                name="suspectImage"
                placeholder="Upload Suspect's Image"
                onChange={handleInputs}
                required
              />
            </div>
          </div>
          <div className="reportrowtext">
            <span>About Suspect :-</span>
            <textarea
              type="text"
              className="form-control"
              rows="5"
              placeholder="report with  Village name and district name"
              name="suspectReport"
              onChange={handleInputs}></textarea>
          </div>
          <div>
            <button type="submit" onClick={reportForm} className="sendbtn">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div>
        <div value={userData.victimImage}></div>
      </div>
    </>
  );
};

export default Report_crime;
