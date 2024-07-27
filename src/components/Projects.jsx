import React from 'react'
import pic from "../../public/new.png";

function Projects() {
    const cardItem=[
        {
            id:1,
            logo:pic,
            name:"MongoDB"
        },
        {
            id:2,
            logo:pic,
            name:"Express"
        },
        {
            id:3,
            logo:pic,
            name:"ReactJS"
        },
        {
            id:4,
            logo:pic,
            name:"NodeJS"
        },
        {
            id:5,
            logo:pic,
            name:"Python"
        },
        {
            id:1,
            logo:pic,
            name:"Java"
        }



    ]
  return (
    <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
            <h1 className="text-3xl font-bold mb-5">Projects</h1>
            <span className="underline font-semibold">Featured Projects</span>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
                {
                    cardItem.map(({id,logo,name})=>(
                        <div className="md:w-[300px] h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                            <img src={pic} className="w-[120px] h-[120px] p-1 rounded-full bordeer-[4px]" alt="" />
                            <div>
                                <div className="px-2 font-bold texxt-xl mb-2">{name}</div>
                                <p className="px-2 text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className=" px-6 py-4 space-x-3 justify-around">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source Code</button>
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Projects;
