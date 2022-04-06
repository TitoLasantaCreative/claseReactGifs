import React from "react"

export const GifReadItem = ({titile,url}) => {


	return (<div className="card animate__animated animate__bounce animate__delay-2s">
			<img src={url} alt={titile}></img>
			<p>{titile}</p>
		</div>)


}