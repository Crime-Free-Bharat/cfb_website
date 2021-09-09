import React from 'react';
const  Autocomplete = () => {
window.TestAutocomplete = function (){
    const autocomplete = new window.google.maps.places.Autocomplete(
        document.getElementById('autocompleteState'),
        {
            types:['regions'],
            componentRestrictions: {'country':['india']},
            fields:['place_id','geometry','name']
        }
    );
}
    const script = document.createElement("script");
        const API = 'AIzaSyDvfK_irmzeAM9rix3jopwX8kkG1CKW-Rw';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&libraries=places&callback=TestAutocomplete`;
        script.async = true;
        document.body.appendChild(script);
}
export default Autocomplete;