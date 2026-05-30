const nodes = {
    root: {
        id: "root",
        title: "Product Strategy",
        description: "High-level planning system",
        parent: null,
        children: ["research", "planning", "delivery"]
    },

    research: {
        id: "research",
        title: "Research",
        description: "Understand users and market",
        parent: "root",
        children: ["interviews", "analysis"]
    },

    interviews: {
        id: "interviews",
        title: "User Interviews",
        description: "Talk to users",
        parent: "research",
        children: []
    },

    analysis: {
        id: "analysis",
        title: "Competitor Analysis",
        description: "Compare competitors",
        parent: "research",
        children: []
    },

    planning: {
        id: "planning",
        title: "Planning",
        description: "Define roadmap",
        parent: "root",
        children: []
    },

    delivery: {
        id: "delivery",
        title: "Delivery",
        description: "Build and ship",
        parent: "root",
        children: []
    }
};

let current = "root";

/* ---------- HELPERS ---------- */

function getPath(id) {
    const path = [];
    let node = nodes[id];

    while (node) {
        path.unshift(node);
        node = node.parent ? nodes[node.parent] : null;
    }

    return path;
}

/* ---------- RENDER MAIN ---------- */

function renderMain() {
    const node = nodes[current];

    document.getElementById("focusCard").innerHTML = `
        <div class="focus-card">
            <h1>${node.title}</h1>
            <p>${node.description}</p>
        </div>
    `;

    const children = document.getElementById("children");
    children.innerHTML = "";

    node.children.forEach(id => {
        const c = nodes[id];

        const div = document.createElement("div");
        div.className = "child";
        div.innerHTML = `<h3>${c.title}</h3><p>${c.description}</p>`;
        div.onclick = () => navigate(id);

        children.appendChild(div);
    });
}

/* ---------- SIDEBAR ---------- */

function renderSidebar() {
    const path = getPath(current);

    renderPath(path);
    renderCurrent(path[path.length - 1]);
    renderSiblings();
}

function renderPath(path) {
    const el = document.getElementById("path");
    el.innerHTML = "";

    path.forEach((node, i) => {
        const div = document.createElement("div");

        div.className = `
            node-row
            depth-${i}
            fade-${i}
            ${node.id === current ? "active" : ""}
        `;

        div.textContent = node.title;
        div.onclick = () => navigate(node.id);

        el.appendChild(div);
    });
}

function renderCurrent(node) {
    const el = document.getElementById("currentNode");

    el.innerHTML = `
        <div class="node-row active depth-0">
            ${node.title}
        </div>
    `;
}

function renderSiblings() {
    const el = document.getElementById("siblings");
    el.innerHTML = "";

    const parent = nodes[nodes[current].parent];

    if (!parent) return;

    parent.children
        .filter(id => id !== current)
        .forEach(id => {
            const n = nodes[id];

            const div = document.createElement("div");
            div.className = "node-row fade-2";
            div.textContent = n.title;
            div.onclick = () => navigate(id);

            el.appendChild(div);
        });
}

/* ---------- NAV ---------- */

function navigate(id) {
    if (!nodes[id]) return;

    current = id;

    renderMain();
    renderSidebar();
    renderBreadcrumbs();
}

function renderBreadcrumbs() {
    const el = document.getElementById("breadcrumbs");
    el.innerHTML = "";

    const path = getPath(current);

    path.forEach((node, i) => {
        const span = document.createElement("span");
        span.textContent = node.title;
        span.onclick = () => navigate(node.id);

        el.appendChild(span);

        if (i < path.length - 1) {
            el.appendChild(document.createTextNode(" › "));
        }
    });
}

/* ---------- BUTTONS ---------- */

document.getElementById("backBtn").onclick = () => {
    const parent = nodes[current].parent;
    if (parent) navigate(parent);
};

document.getElementById("topBtn").onclick = () => {
    navigate("root");
};

/* ---------- INIT ---------- */

function init() {
    renderMain();
    renderSidebar();
    renderBreadcrumbs();
}

init();