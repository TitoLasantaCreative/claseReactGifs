import React, {useState, useEffect} from 'react';
import {GifReadItem} from "./gifReadItem"
import {useFetchGifs} from "./../hooks/useFetchGifs"

export const GifRead = ({category}) => {
	




	const {data:images,loading} = useFetchGifs(category);



	return (
		<>
		<h3>{category}</h3>
		{ loading && <p>Loading</p>}
		{
			!loading &&
		<div className="card-grid">
			{
				images.map((x) =>
					<GifReadItem key={x.id} {...x}/>
					)
			}
		</div>
		}
		</>
		)
}