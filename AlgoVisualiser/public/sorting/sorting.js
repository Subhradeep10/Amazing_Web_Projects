class SortingVisualiser {
  // Constructor for getting all the Elements and setting onChange Events on them and also generating the Array and showing it on Screen
  constructor() {
    // Code for Sorting Type Selector
    this.sortingTypeSelector = document.getElementById("sorting-type");

    this.sortingType = this.sortingTypeSelector.value;

    this.sortingTypeSelector.addEventListener("change", (e) => {
      this.sortingType = this.sortingTypeSelector.value;
    });

    // Code for Array Size Selector
    this.arraySizeSelector = document.getElementById("array-size");

    this.arraySize = this.arraySizeSelector.value;

    this.arraySizeSelector.addEventListener("input", () => {
      this.arraySize = this.arraySizeSelector.value;
      this.array = this.generateArray();
      this.showArrayOnScreen();
    });

    // Code for Ultra Slow and Ultra Fast Button
    this.ultra_fast_btn = document.getElementById('ultra-fast');
    this.ultra_slow_btn = document.getElementById('ultra-slow');

    this.ultra_slow_btn.addEventListener('click',() => {
      this.sortingSpeed = 15;
    })

    this.ultra_fast_btn.addEventListener('click',() => {
      this.sortingSpeed = 500;
    })


    // Code for Sorting Speed Selector
    this.sortingSpeedSelector = document.getElementById("sorting-speed");

    this.sortingSpeed = this.sortingSpeedSelector.value;

    this.sortingSpeedSelector.addEventListener("input", () => {
      this.ultra_fast_btn.checked = false;
      this.ultra_slow_btn.checked = false;
      this.sortingSpeed = this.sortingSpeedSelector.value;
    });

    // Capturing the Container for the Array Elements on the screen
    this.arrayElemsContainer = document.getElementById("array-elems");

    // Generating the Array and showing it on the screen
    this.array = this.generateArray();
    this.showArrayOnScreen();

    // Code for Starting the Sort while a specific button is pressed
    this.startSortButton = document.getElementById("start-sort");
    this.startSortButton.addEventListener("click", this.startSort);
  }

  // Function for the Colouring used in the animation of the Sorting
  color_uncolor() {
    // Getting all the Array elements on the screen
    this.array_elems = document.getElementsByClassName("array-elems");

    // Making all the Array elemnents on the screen of Blue color
    for (let ii = 0; ii < this.array_elems.length; ii++)
      this.array_elems[ii].style.backgroundColor = "blue";

    // If the present Index is negative(absurd for an array), then we return
    if (this.i == -1) return;

    // If the present index is not absurd, then we color the specific array elements on the screen with Green and Red Colors
    if (this.i != -1 || this.j != -1) {
      this.array_elems[this.i].style.backgroundColor = "red";
      this.array_elems[this.j].style.backgroundColor = "green";
    }
  }

  // Function for getting random integer within a given range
  getRandInt(min, max) {
    return (
      Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min
    );
  }

  // Function for Generating a Random Array given the length
  generateArray() {
    let array = [];

    for (let i = 0; i < this.arraySize; i++) {
      array.push(this.getRandInt(1, 125));
    }

    return array;
  }

  // Create the array Element(Basically a Div with some height proportional to the value of the corr. Array element and a fixed width)
  createElem(val) {
    let div = document.createElement("div");
    div.style.height = `${5 * val}px`;
    div.style.width = `${screen.availWidth / (this.array.length * 1.15)}px`;
    div.style.backgroundColor = "blue";
    div.classList.add("array-elems");

    return div;
  }

  // Function for showing the whole Array on the screen
  showArrayOnScreen() {
    // Clearing the Array Element Container
    this.arrayElemsContainer.innerHTML = "";

    // Getting the Corresponding Array Element and appending that as a child to the Array Element Container
    for (let i = 0; i < this.array.length; i++) {
      let elem = this.createElem(this.array[i]);
      this.arrayElemsContainer.appendChild(elem);
    }

    // Getting all the Array elements on the screen
    this.array_elems = document.getElementsByClassName("array-elems");

    // Color the Required Elements if applicable
    if(this.i && this.j && this.i >=0 && this.j >= 0)
    {
      this.array_elems[this.i].style.backgroundColor = 'red';
      this.array_elems[this.j].style.backgroundColor ='green';
    }
  }

  startSort = () => {
    // Disabling the Controls while starting the Sort
    this.startSortButton.setAttribute("disabled", true);
    this.sortingSpeedSelector.setAttribute("disabled", true);
    this.arraySizeSelector.setAttribute("disabled", true);
    this.ultra_fast_btn.setAttribute('disabled',true);
    this.ultra_slow_btn.setAttribute('disabled',true);

    this.i = 0;
    this.j = 1;

    this.Id = setInterval(() => {
      // First we color the required array elements (arr[i] and arr[j]) with Red and Green Respectively
      this.color_uncolor();

      // If the Condition for Swapping in Bubble Sort is faced, then we swap the corresponding Elements in teh Array and show the Array on screen
      if (this.array[this.i] > this.array[this.j]) {
        let temp = this.array[this.i];
        this.array[this.i] = this.array[this.j];
        this.array[this.j] = temp;

        this.showArrayOnScreen();
      }

      // Incrementing the 'j' variable
      this.j += 1;

      // If 'j' reaches the end of array, then as per rule of Bubble Sort, we increment 'i' by 1 and set 'j' as 'i+1'
      if (this.j == this.array.length) {
        this.i += 1;
        this.j = this.i + 1;
      }

      // if the Sorting is complete, then we do the following
      if (this.i >= this.array.length || this.j >= this.array.length) {
        // Clear the setInterval
        clearTimeout(this.Id);

        // Set the present index to -1 so as to make it absurd
        this.i = -1;

        // Finally uncoloring the whole array on the screen
        this.color_uncolor();

        // Enabling the Controls
        this.startSortButton.removeAttribute("disabled");
        this.arraySizeSelector.removeAttribute("disabled");
        this.sortingSpeedSelector.removeAttribute('disabled');
        this.ultra_fast_btn.removeAttribute('disabled');
        this.ultra_slow_btn.removeAttribute('disabled');
      }
    }, 3000* 1/(this.sortingSpeed));
  };
}

// When Window is fully loaded, then we create an Object of the SortingVisualiser class
window.addEventListener("load", () => {
  let s1 = new SortingVisualiser();
});
