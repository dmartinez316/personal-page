import React from 'react'

export default (props) => {
    return (
        <li className="bg-white flex items-center">
            <div className="w-10/12 overflow-x-hidden">
                <h4 className="text-blue-800 font-bold">{props.repo.name}</h4>
                <p className="text-sm text-gray-800 overflow-hidden" style={{ height: "1.5em" }}>{props.repo.description} </p>
            </div>
            <div className="flex-1 text-right">
                <a target="_blank" rel="noopener noreferrer" href={props.repo.html_url}> Ver </a>
            </div>
        </li>
    )
}