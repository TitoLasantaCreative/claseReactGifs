export const getGifs = async(category)=>{
		const url = `https://api.giphy.com/v1/gifs/search?api_key=V7HE19bYqc1a0zuQJzOEF5gJd2CIX3aB&q=${encodeURI(category)}&limit=10`
	
		const res = await fetch(url)
		const {data} = await res.json()
		const gifs = data.map(img => {
			return  {
				id: img.id,
				titile: img.title,
				url: img.images?.downsized_medium.url
			}
		})
		return gifs
	}