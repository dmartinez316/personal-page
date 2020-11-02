import React, { useEffect, useState } from 'react'
import Repo from '../components/repo'

export default () => {
    const [repos, setRepos] = useState([])
    const [reposCount, setReposCount] = useState([])

    useEffect(() => {
        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/mrzay316/repos")
            const myRepos = await response.json()
            setReposCount(myRepos.length)
            sessionStorage.setItem("repos", JSON.stringify(myRepos))
            setRepos(myRepos)
        }

        const data = sessionStorage.getItem("repos")
        let myRepos
        if (data) {
            myRepos = JSON.parse(data)
            setReposCount(myRepos.length)
            return setRepos(myRepos)
        } else {
            fetchRepos()
        }
    }, [])
    return (
        <div className="mx-auto max-w-4xl p-8">
            <header className="text-center">
                <h2 className="text-3xl font-bold text-orange-400">Algunos de mis proyectos</h2>
                <p className="text-sm font-mono text-blue-900">Proyectos profesionales y de aprendizaje </p>
            </header>
            <ul className="repos-list">
                {
                    repos.map((repo) => {
                        if (!repo.private) {
                            return <Repo repo={repo} key={repo.id} />
                        } else {
                            return <div />
                        }
                    })
                }
            </ul>
            <div className="mt-8 text-center" >
                <a
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/mrzay316" >
                    Ver mas en Github({reposCount})
                </a>
            </div>
        </div>
    )
}