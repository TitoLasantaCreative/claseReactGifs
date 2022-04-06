import React, {useState} from 'react';
import {AddCategory} from "./components/addCategory"
import {GifRead} from "./components/gifRead"

export const GifExpertApp = () => {


	const [categorias,setCategories] = useState(["OnePunch"])


	return (
		<>
			<h1>GifExpertApp</h1>
			<hr></hr>
			<AddCategory setCategories={setCategories}/>
			<ol> { categorias.map( (x) => <GifRead key={x} category={x}/> ) } </ol>
		</>
	)
	
}
