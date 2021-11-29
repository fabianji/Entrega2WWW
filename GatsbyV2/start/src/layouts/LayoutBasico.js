import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import "./LayoutBasico.css"
import { Link } from 'gatsby';

//import Seo from "../components/seo"
export default function LayoutBasico(props) { //recibe lo que viene del index o lo que actúa como página
    const { children} = props

    const data = useStaticQuery(graphql`
        query SiteQueryMetaData{
            site{
                siteMetadata{
                    title
                    description
                    author
                }
            }
        }
    `
    )
    console.log(data)
    return (
        <div className="header">
            <h1>{data.site.siteMetadata.title}</h1>
            <div className="menu">
                <Link to="/">Index</Link>
                <Link to="/home">Home</Link>
                
            </div>
            { children }
        </div>
    )
}

//<Link to="/">Index</Link>
//<Link to="/home">Home</Link>