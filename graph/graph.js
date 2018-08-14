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
        this.marked = [];
        this.edgeTo = [];
        for (let i = 0; i < this.vertices; i++) {
            this.adj[i] = [];
            this.marked[i] = false;
        }
    }

    addEdge (v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    showGraph () {
        for (let i = 0; i < this.vertices; i++) {
            let str = i + ': ';
            for (let j = 0; j < this.vertices[i]; j++) {
                if (this.add[i][j] != undefined) {
                    str = str + this.adj[i][j] + ' ';
                }
            }
            console.log(str);
        }
    }

    dfs (v) {
        let node = this.adj[v];
        if (node === undefined) {
            return;
        }

        this.marked[v] = true;
        console.log("Visited vertex: " + v);
        
        let len = node.length;
        for (let i = 0; i < len; i++) {
            if (!this.marked[node[i]]) {
                this.dfs(node[i]);
            }
        }
    }
    
    bfs (s) {
        if (this.adj[s] === undefined) {
            return;
        }
        
        let queue = [];
        this.marked[s] = true;
        queue.push(s);
        while (queue.length > 0) {
            let v = queue.shift();
            console.log("Visited vertex: " + v);

            let node = this.adj[v];
            let len = node.length;
            for (let i = 0; i < len; i++) {
                if (!this.marked[node[i]]) {
                    this.edgeTo[node[i]] = v;
                    this.marked[node[i]] = true;
                    queue.push(node[i]);
                }
            }
        }
    }

    hasPathTo (v) {
        return this.marked[v];
    }

    // TODO: Demo
    // How abut more then one path to v?
    pathTo (v) {
        let source = 0;
        if (!this.hasPathTo(v)) {
            return undefined;
        }

        let path = [];
        for (let i = v; i != source; i = this.edgeTo[i]) {
            path.push(i);
        }
        path.push(source);
        return path;
    }
}