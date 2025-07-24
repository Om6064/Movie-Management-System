import { useState } from "react"

const Form = () => {
    const [input,setInput] = useState({
        title:"",img_url:"",genere:"",des:""
    })

    const handleChange = (e) => {
        setInput({...input,[e.target.id] : e.target.value})
    }
    console.log(input);
    

    return (
        <div>
            <div className="h-screen flex items-center">
                <div className="container mx-auto">
                <form>
                    <div className="">
                        <div>
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                            <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Movie Title" required onChange={handleChange} value={input.title} />
                        </div>
                        <div>
                            <label htmlFor="img_url" className="block mb-2 text-sm font-medium text-gray-900 ">img_url</label>
                            <input type="text" id="img_url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="URL" required onChange={handleChange} value={input.img_url} />
                        </div>
                        <div>
                            <label htmlFor="genere" className="block mb-2 text-sm font-medium text-gray-900 ">Genere</label>
                            <input type="text" id="genere" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="E.X. Comedy" required onChange={handleChange} value={input.genere} />
                        </div>
                        <div>
                            <label htmlFor="des" className="block mb-2 text-sm font-medium text-gray-900 ">describtion</label>
                            <textarea rows={5} id="des" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required onChange={handleChange} value={input.des} />
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Form