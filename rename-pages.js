const pages = ["index", "catalog", "augmented-reality", "virtual-reality",
    "metaverse", "vision-systems",
    "ai-agents", "industries",
    "about", "contact"];

pages.forEach((page) => {
    const oldPath = path.join(__dirname, "out", page, "index.html");
    const newPath = path.join(__dirname, "out", `${page}.html`);
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        fs.rmdirSync(path.join(__dirname, "out", page), { recursive: true });
        console.log(`Renamed ${page}/index.html → ${page}.html`);
    }
});
