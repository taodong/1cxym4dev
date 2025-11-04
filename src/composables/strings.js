/**
 * Created by Ryan Balieiro on 03.01.2025
 */
const MAP = {
    "copyright_message": "Copyright ©{year} <a href='{url}' target='_blank'>{holder}</a>",
    "loading": "Loading..."
}

export function useStrings() {
    /**
     * @param {String} key
     * @param {{key:String, replacement:String}[]} [replacements=null]
     * @return {*|string}
     */
    const get = (key, replacements) => {
        let string = MAP[key] || 'strings.' + key

        if(replacements) {
            replacements.forEach(({key, replacement}) => {
                string = string.replaceAll('@{'+key+'}', replacement)
            })
        }

        return string
    }

    /**
     * @param {String|Number} year
     * @param {String} holder
     * @param {String} url
     * @return {string}
     */
    const getCopyrightMessage = (year, holder, url) => {
        return get("copyright_message").replaceAll("{year}", year.toString())
            .replaceAll("{url}", url)
            .replaceAll("{holder}", holder)
    }

    return {
        get,
        getCopyrightMessage
    }
}