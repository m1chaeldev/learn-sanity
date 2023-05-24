export default function getScheme(scheme: string) {
    const language = localStorage.getItem("c-language") || "en"
    return `*[_type == "${scheme}" && __i18n_lang == "${language}"]`
}
