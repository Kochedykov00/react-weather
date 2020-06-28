import React from 'react';



const Form = props => (
	<div className = "form_input">	
    <form onSubmit={props.weatherMethod}>
	<input type = "text" name = "city"/>
  	<button>Получить погоду</button>
</form>
	</div>
);



export default Form;
