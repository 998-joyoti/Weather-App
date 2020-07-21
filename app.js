

 window.addEventListener('load',() =>{
      
       let tempdes = document.querySelector('.temperature-description');
       let tempdeg = document.querySelector('.temperature-degree');
       let timezone = document.querySelector('.location-timezone');
       let icon1 = document.querySelector('.weather-icon');
       let tempsec = document.querySelector('.temperature');
       let span = document.querySelector('.temperature span');
       const form = document.querySelector('.city-selection form');
       

      
 
       form.addEventListener("submit", e => {
         e.preventDefault();
         var input = document.getElementById('city');
         const inputVal = input.value;
         const api = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=a5a22667fbe5959e3b0aaf7cbd2ea8c1&units=metric`;
         fetch(api)
               .then(response => {
                   return response.json();
               })
               .then(data => {
                   console.log(data);

                   const {temp} = data.main;
                   const {description,icon} = data.weather[0];
                   //set dom elements from API
                   tempdeg.textContent = temp;
                   tempdes.textContent = description;
                   timezone.textContent = data.name ;
                    let far = (temp * (9 / 5) + 32).toFixed(2);
                    //   let celcius = ((temp-32) * (5 / 9)).toFixed(2);
                   icon1.innerHTML = `<img src="${icon}.png">`;
                   tempsec.addEventListener('click', () => {
                       if(span.textContent === "C"){
                           span.textContent="F";
                           tempdeg.textContent = far;
                       }
                       else{
                        span.textContent="C";
                        tempdeg.textContent = temp;
                       }
                   }) 
            })
       });
      
       
            
             

             
             
        
       

       

       
       
 });
