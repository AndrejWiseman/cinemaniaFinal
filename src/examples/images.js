import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'



const Images = () => {
    return (
        <Wrapper>

            <article>
                <h4>constrained</h4>
                <StaticImage
                    src='../assets/images/recipe-1.jpeg'
                    alt='big'
                    placeholder='tracedSVG'
                    layout='constrained'
                    className='example-img'
                    as='section'
                />
            </article>
            <article>
                <h4>fixed</h4>
                <StaticImage
                    src='../assets/images/recipe-1.jpeg'
                    alt='big'
                    placeholder='tracedSVG'
                    layout='fixed'
                    width={200}
                    className='example-img'
                    as='div'
                />
            </article>
            <article>
                <h4>ful width</h4>
                <StaticImage
                    src='../assets/images/recipe-1.jpeg'
                    alt='big'
                    placeholder='tracedSVG'
                    layout='fullWidth'
                    width={200}
                    className='example-img'
                    as='div'
                />
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width:70vw;
    margin: 0 auto;
    display: grid;
    text-align: center;
    gap: 2rem;
    
    article{
        border: 1px solid red;
    }
    .example-img {
        border-radius: 1rem;
    }
    
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export default Images