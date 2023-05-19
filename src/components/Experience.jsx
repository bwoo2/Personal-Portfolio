import '../style/Experience.css'

const Experience = () => {
  
  return (
    <div className='experience'>
      <h1>Experience</h1>

      <div className='education'>
        <h3>Education</h3>
        <div className='school'>
        <p>University at Buffalo</p>
        <p>Bachelors of Science in Computer Science - <i>Summer 2023</i></p>
        </div>
      </div>

      <br />

      <div className='occupations'>
        <h3>Past Occupations</h3>
        <div className='places'>
          <p><strong>Yogurt Shop Employee</strong></p>
          <p><i>16 Handles, Great Neck, NY</i></p>
          <ul>
            <li>Provided exceptional customer service, ensuring a positive and enjoyable experience for patrons visiting the yogurt shop.</li>
            <li>Prepared and served yogurt orders, ensuring proper portioning, and adhering to food safety and hygiene standards.</li>
            <li>Maintained cleanliness and organization of the shop, including the dining area, condiment station, and restrooms.</li>
            <li>Stocked and replenished yogurt toppings, cups, and other supplies to ensure a smooth operation during peak hours.</li>
            <li>Assisted in inventory management, conducting regular stock checks and notifying management of any low or out-of-stock items.</li>
            <li>Collaborated with team members to maintain a positive work environment, fostering effective communication and teamwork.</li>
            <li>Handled customer inquiries, resolved complaints, and addressed any issues promptly and professionally.</li>
            <li>Trained new employees on customer service protocols, yogurt preparation, and shop procedures.</li>
            <li>Participated in opening and closing procedures, including cash register reconciliation, cleaning equipment, and securing the premises.</li>
          </ul>

          <p><strong>Hospital Volunteer Experience</strong></p>
          <p><i>North Shore University Hospital, Manhasset, NY</i></p>
          <ul>
            <li>Staffed the information desk, warmly welcoming visitors, answering inquiries, and providing detailed information about hospital services and facilities.</li>
            <li>Supported administrative tasks by organizing medical records, filing paperwork, and assisting with data entry.</li>
            <li>Provided compassionate patient assistance, offering companionship and emotional support to enhance the well-being of patients during their hospital stay.</li>
            <li>Assisted with wayfinding and escorted patients and visitors, ensuring they reached their desired destinations within the hospital.</li>
            <li>Delivered comfort care by distributing blankets, pillows, and other amenities, creating a soothing and comfortable environment for patients.</li>
            <li>Assisted with meal distribution, ensuring timely delivery and providing support to patients who needed assistance with eating.</li>
            <li>Contributed to fundraising efforts and hospital events by assisting with logistics, registration, and promoting community outreach programs.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;