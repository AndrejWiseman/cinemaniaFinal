
const setupTags = (filmovi) => {

    const allTags = {}

    filmovi.forEach(film => {
        film.tags.zanr.forEach(tag => {
            if(allTags[tag]) {
                allTags[tag] = allTags[tag] + 1
            } else {
                allTags[tag] = 1
            }
        })
    })

    const newTags = Object.entries(allTags).sort((a, b) => {
        const [firstTag] = a
        const [secondTag] = b
        return firstTag.localeCompare(secondTag)
    })

    return (
        // filmovi
        newTags
    )
}

export default setupTags