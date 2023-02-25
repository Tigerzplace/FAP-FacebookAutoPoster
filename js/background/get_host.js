// function for getting host from URL
// eslint-disable-next-line no-unused-vars
function getHost(inp) {
    try {
        var url = new URL(inp);
        return url.host;
    } catch (e) {
        return "";
    }
}