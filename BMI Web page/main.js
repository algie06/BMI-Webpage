function enableGenderInput(radioId, selectId) {
    const radioElement = document.getElementById(radioId);
    const selectElement = document.getElementById(selectId);
    const radioGroup = document.getElementsByName(radioElement.name); // Get all radio buttons in the group
  
    // Initially disable the select element
    selectElement.disabled = true;
  
    // Add event listeners to all radio buttons
    radioGroup.forEach(radio => {
      radio.addEventListener('change', () => {
        selectElement.disabled = !radio.checked;
      });
    });
  }
//   ageRange is needed for enableInputAge function
const ageRanges = {
    'Child': { min: 1, max: 16, value: 1 },
    'Young adult': { min: 17, max: 30, value: 17 },
    'Middle aged': { min: 31, max: 45, value: 31 },
    'Old aged adults': { min: 46, max: 200, value: 46 },
  };   

function enableInputAge(inputId, selectId, ageRanges) {
    const inputElement = document.getElementById(inputId);
    const selectElement = document.getElementById(selectId);
  
    selectElement.addEventListener('change', () => {
      const range = ageRanges[selectElement.value];
      inputElement.disabled = !range;
      if (range) {
        Object.assign(inputElement, range);
      } else {
        inputElement.value = 0;
      }
    });
  }
   

function enableInputsWandH(inputId, selectId) {
    const inputElement = document.getElementById(inputId);
    const selectElement = document.getElementById(selectId);
  
    selectElement.addEventListener('change', () => {
        inputElement.disabled = selectElement.value === '';
    });
  }


  function btnResult(){
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value); 


    if (isNaN(height) || isNaN(weight) || height == 0 || weight == 0) {
        document.getElementById("Result").textContent = "Please enter valid height and weight.";
        return;
    }
  
    const bmi = weight / (height * height);
    const resultElement = document.getElementById("Result");

    // Add logic to determine BMI category and display appropriate message
    resultElement.textContent = `Your BMI is ${bmi.toFixed(4)}`;

  }



  enableGenderInput('gender','ageCat');
  enableInputAge('age','ageCat', ageRanges);
  enableInputsWandH('weight','WeightAndHeightCat');
  enableInputsWandH('height','WeightAndHeightCat');
  enableInputsWandH('WeightAndHeightCat','ageCat');


