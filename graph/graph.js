class Vertex {
    constructor (label, wasVisited) {
        this.label = label;
        this.wasVisited = wasVisited;
    }
}

class Graph {
    constructor (v) {
        this.vertices = v;
        this.eges = 0;
        this.adj = [];
        for (let i = 0; i < this.vertices; i++) {
            this.adj[i] = [];
        }
    }

    addEdge (v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    showGraph () {
        for (let i = 0; i < this.vertices.length; i++) {
            let str = i + ': ';
            for (let j = 0; j < this.vertices[i].length; j++) {
                if (this.add[i][j] != undefined) {
                    str = str + this.adj[i][j] + ' ';
                }
            }
            console.log(str);
        }
    }
}