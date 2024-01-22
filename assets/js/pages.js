async function load_page (content) {
        const resp = await fetch("./assets/pages/" + content + ".html");
        const html = await resp.text();
        document.getElementsByClassName('main_container')[0].innerHTML = html;
}