import pathJSON from './paths.json'

export function createLink(path: string, link: string) {
    const pathChecker = function () {
        const paths = path.split('/')
        paths.shift()
        if (paths.some(newPath => newPath === "")) {
            if (paths.some(newPath => pathJSON.paths.some(extraPath => extraPath === newPath))) {
                const replaced = path.replace("/prefix", link).replace("/discount", link).replace("/filters", link).replace("/command", link)
                return replaced
            } else {
                const newLink = path + link.replace("/", '');
                return newLink
            }
        } else {
            if (paths.some(newPath => pathJSON.paths.some(extraPath => extraPath === newPath))) {
                const replaced = path.replace("/prefix", link).replace("/discount", link).replace("/filters", link).replace("/command", link)
                return replaced
            } else {
                const newLink = path + link;
                return newLink
            }
        }
    }

    const newPath = pathChecker();
    return newPath;
}