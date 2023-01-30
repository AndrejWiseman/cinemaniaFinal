import React from 'react';
import Layout from '../components/Layout'
import AllFilmovi from '../components/AllFilmovi'
import SEO from '../components/SEO'


const Filmovi = () => {
    return (
        <Layout>
            <SEO title="Filmovi" />
            <main className="page">
                <AllFilmovi />
            </main>

        </Layout>
    )
}

export default Filmovi