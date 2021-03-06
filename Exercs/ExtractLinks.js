
function extraxtLinks(input) {

    let regex = /www\.[A-Za-z0-9\-]+\.[a-z]+(?:\.[a-z]+)*/g;
    let url = [];

    for (let sent of input) {
        let match = sent.match(regex);
        if (match != null) {
            for (let m of match) {
                url.push(m);
            }
        }
    }

    return url.join('\n');
}

console.log(extraxtLinks(["Need information about cheap hotels in London?","You can check us at www.london-hotels.co.uk!","We provide the best services in London.","Here are some reviews in some blogs:","\"London Hotels are awesome!\" - www.indigo.bloggers.com","\"I am very satisfied with their services\" - ww.ivan.bg","\"Best Hotel Services!\" - www.rebel21.sedecrem.moc"]));
