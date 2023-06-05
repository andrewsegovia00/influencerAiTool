import React, { useEffect } from 'react';
import Papa from 'papaparse';

function UploadFiles() {
  useEffect(() => {
    const csvForm = document.getElementById('csvForm');
    const csvFileInput = document.getElementById('csvFileInput');



    const handleFormSubmit = (event) => {
      event.preventDefault();
      let sumValue = 0;
      const file = csvFileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const csvData = e.target.result;
          const jsonData = Papa.parse(csvData, { header: true }).data;
          console.log(jsonData);
          jsonData.forEach( (jsonData) => {
          sumValue += parseInt(jsonData["Video views"]);

        console.log(jsonData.Likes)
        });
        let divTemp = document.createElement('div');
        divTemp.style.display = "inline";
        divTemp.innerText = sumValue;
        document.getElementById('input').appendChild(divTemp);
        console.log(sumValue);
        // = document.getElementById('input').innerText = jsonData.Date
        };
        reader.readAsText(file);
      }
    };

    csvForm.addEventListener('submit', handleFormSubmit);

    // Clean up the event listener when the component unmounts
    return () => {
      csvForm.removeEventListener('submit', handleFormSubmit);
    };
  }, []); // Empty dependency array to run the effect only once



  return (
    <>
    <form id="csvForm" className="text-center pt-56">
      <input type="file" id="csvFileInput" accept=".csv" />
      <button type="submit" className="border-blue-1 border-2 bg-grey-1 px-3 py-1 rounded-xl">
        Upload CSV
      </button>
    </form>
    <div id='input'></div>
    </>
  );
}

export default UploadFiles;
